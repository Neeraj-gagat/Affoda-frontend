// /* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react';
import EmailVerificationContent from './EmailVerificationContent';

// 
export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading verification...</p>
        </div>
      </div>
    }>
      <EmailVerificationContent />
    </Suspense>
  );
}