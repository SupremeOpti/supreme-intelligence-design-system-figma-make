import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Add BugHerd script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.bugherd.com/sidebarv2.js?apikey=ljnm33lvqfgml4sr9fwffa";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src*="bugherd.com"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-none animate-pulse">
            404
          </h1>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Page Not Found
        </h2>

        {/* Coming Soon section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl border border-white/20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 animate-bounce">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            Coming Soon
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            We're working hard to bring you something amazing. This page is
            under construction and will be available soon.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
          >
            Return to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-slate-200 hover:bg-white"
          >
            Go Back
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-slate-500 text-sm">
          <p>
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-1000">
        <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float animation-delay-2000">
        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default NotFound;
