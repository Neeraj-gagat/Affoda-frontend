/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";

const EmailVerificationContent = () => {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();
  
  const token = searchParams.get('token');
  
  useEffect(() => {
    const storedemail = localStorage.getItem("verifyEmail");
    setEmail(storedemail);
    if (token) {
      if (typeof token === 'string') {
        verifyEmail(token);
      } else {
        setVerificationStatus('error');
      }
    } else {
      setVerificationStatus('error');
    }
  }, [token]);

  const verifyEmail = async (verificationToken: string) => {
    try {
      const response = await fetch(`http://backend.affoda.com/api/v1/user/verify-email?token=${verificationToken}`, {
        method: 'GET',
      });
      
      const data = await response.json();

      if (response.ok) {
        setVerificationStatus('success');
      } else if (data.message === 'Invalid or expired token.') {
        setVerificationStatus('expired');
      } else {
        setVerificationStatus('error');
      }
    } catch (error) {
      setVerificationStatus('error');
    }
  };

  const resendVerificationEmail = async () => {
    if (!email) return;
    
    setIsResending(true);
    try {
      toast({
        title: "Verification email sent!",
        description: "Please check your email for the new verification link.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend verification email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'loading':
        return (
          <div className="text-center space-y-4">
            <Loader2 className="h-16 w-16 animate-spin text-blue-600 mx-auto" />
            <CardTitle className="text-2xl">Verifying your email...</CardTitle>
            <CardDescription className="text-lg">
              Please wait while we verify your email address.
            </CardDescription>
          </div>
        );

      case 'success':
        return (
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
            <CardTitle className="text-2xl text-green-600">Email Verified Successfully!</CardTitle>
            <CardDescription className="text-lg">
              Your email has been verified. You can now access all features of your account.
            </CardDescription>
            <div className="pt-4">
              <Link href="/signin">
                <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Continue to Sign In
                </Button>
              </Link>
            </div>
          </div>
        );

      case 'expired':
        return (
          <div className="text-center space-y-4">
            <XCircle className="h-16 w-16 text-orange-500 mx-auto" />
            <CardTitle className="text-2xl text-orange-600">Link Expired</CardTitle>
            <CardDescription className="text-lg">
              This verification link has expired. Please request a new one.
            </CardDescription>
            {email && (
              <div className="pt-4">
                <Button 
                  onClick={resendVerificationEmail}
                  disabled={isResending}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  {isResending ? "Sending..." : "Resend Verification Email"}
                </Button>
              </div>
            )}
          </div>
        );

      case 'error':
        return (
          <div className="text-center space-y-4">
            <XCircle className="h-16 w-16 text-red-600 mx-auto" />
            <CardTitle className="text-2xl text-red-600">Verification Failed</CardTitle>
            <CardDescription className="text-lg">
              The verification link is invalid or has already been used.
            </CardDescription>
            <div className="pt-4 space-y-3">
              <Link href="/signup">
                <Button variant="outline" className="w-full h-12 border-2">
                  Create New Account
                </Button>
              </Link>
              <Link href="/signin">
                <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Tropical background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        </CardHeader>
        
        <CardContent>
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerificationContent;