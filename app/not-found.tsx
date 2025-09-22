;
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#4C6FFF]/20 dark:text-[#4C6FFF]/30">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button href="/" size="lg" className="w-full group">
            <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Go Home
          </Button>
          
          <Button href="javascript:history.back()" variant="outline" className="w-full group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
