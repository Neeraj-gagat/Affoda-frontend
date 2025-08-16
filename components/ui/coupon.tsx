import React, { useState } from 'react';
import { X, Ticket } from 'lucide-react';

interface CouponProps {
  discount?: string;
  description?: string;
  buttonText?: string;
  onActivate?: () => void | { description?: string; message?: string };
  onClose?: () => void;
  showCloseButton?: boolean;
  successMessage?: string;
  reloadOnActivate?: boolean;
  reloadDelay?: number;
}

const CouponComponent: React.FC<CouponProps> = ({
  discount = "5% OFF",
  description = "Just activate your coupon now to unlock this offer.",
  buttonText = "Activate coupon",
  onActivate,
  onClose,
  showCloseButton = true,
  successMessage,
  reloadOnActivate = false,
  reloadDelay = 2000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  const [activationMessage, setActivationMessage] = useState<string>('');

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleActivate = () => {
    const result = onActivate?.();
    
    if (result && typeof result === 'object' && 'description' in result) {
      setActivationMessage(result.description || 'Coupon activated successfully!');
    } else if (successMessage) {
      setActivationMessage(successMessage);
    } else {
      setActivationMessage('Your coupon has been activated successfully!');
    }
    
    setIsActivated(true);
    if (reloadOnActivate) {
        // Reload the page after showing success message
        setTimeout(() => {
          window.location.reload();
        }, reloadDelay);
      } else {
        // Hide the success message after 3 seconds if not reloading
        // setTimeout(() => {
        //   setActivationMessage('');
        //   setIsActivated(false);
        // }, 3000);
      }
  };

  if (!isVisible) return null;

  // Show success message if activated
  if (isActivated && activationMessage) {
    return (
      <div className="w-[810px] relative bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg shadow-sm p-4 mx-4 my-2">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Ticket className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-green-800 font-semibold text-[10px] md:text-sm mb-1">
              Success!
            </h3>
            <p className="text-green-700 text-[10px] md:text-sm">
              {activationMessage}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:block w-[810px] relative bg-gradient-to-r from-orange-50 to-orange-100 border border-affoda-blue/40 rounded-lg shadow-sm p-3 mx-4 my-2">
      {/* Close button */}
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-orange-400 hover:text-orange-600 transition-colors"
          aria-label="Close coupon"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex items-center gap-4">
        {/* Coupon Icon */}
        <div className="flex-shrink-0">
          <div className="w-6 md:w-12 h-6 md:h-12 bg-affoda-blue rounded-lg flex items-center justify-center">
            <Ticket className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-affoda-blue font-semibold text-[10px] md:text-sm mb-1">
            Congratulations! You get an extra {discount} today.
          </h3>
          <p className="text-affoda-blue hidden md:block text-sm">
            {description}
          </p>
        </div>

        {/* Activate Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleActivate}
            className="bg-affoda-blue hover:bg-affoda-blue/90 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[10px]  md:text-sm"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponComponent;