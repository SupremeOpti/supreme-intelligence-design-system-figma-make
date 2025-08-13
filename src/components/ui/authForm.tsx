import { Button } from "@/components/ui/button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { GoogleIcon, LinkedInIcon } from "./Icons";
import { Toggle } from "@/components/ui/toggle";

interface AuthFormProps {
  mode: "login" | "signup";
  onSuccess: () => void;
  onModeChange: (mode: "login" | "signup") => void;
  onSubmit: (data: {
    email: string;
    password: string;
    fullName?: string;
    confirmPassword?: string;
    rememberMe?: boolean;
  }) => Promise<void>;
  onGoogleLogin: () => Promise<void>;
  onLinkedInLogin: () => Promise<void>;
  showTerms?: boolean;
  onRememberMeChange: (checked: boolean) => void;
  rememberMe?: boolean;
  className?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  onSuccess,
  onModeChange,
  onSubmit,
  onGoogleLogin,
  onLinkedInLogin,
  onRememberMeChange,
  showTerms = true,
  rememberMe = false,
  className = "",
}) => {
  // Common state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Signup specific state
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic validation for all modes
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (mode === "signup") {
      if (!fullName.trim()) {
        setError("Please enter your full name");
        setLoading(false);
        return;
      }

      // Basic validation for signup
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }
    }

    try {
      await onSubmit({
        email,
        password,
        fullName: mode === "signup" ? fullName : undefined,
        confirmPassword: mode === "signup" ? confirmPassword : undefined,
        rememberMe: mode === "login" ? rememberMe : undefined,
      });
      // onSuccess is now called from the parent component after successful authentication
    } catch (err: any) {
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await onGoogleLogin();
      // onSuccess is now called from the parent component after successful authentication
    } catch (err: any) {
      setError(err.message || "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLinkedInSignIn = async () => {
    try {
      setLoading(true);
      await onLinkedInLogin();
      // onSuccess is now called from the parent component after successful authentication
    } catch (err: any) {
      setError(err.message || "LinkedIn sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isLoginMode = mode === "login";

  return (
    <div className={`px-8 pb-8 ${className}`}>
      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Full Name Input - Only for signup */}
        {!isLoginMode && (
          <div className="relative">
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-2 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-2 focus:border-supreme-blue-500 hover:border-supreme-blue-500 transition-all duration-200 text-base text-supreme-blue-700 bg-white peer placeholder-transparent"
              placeholder="Full Name"
              required
            />
            <label
              htmlFor="fullName"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                fullName
                  ? "-top-2 text-xs text-supreme-blue-500 bg-white px-1"
                  : "top-3 text-base text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-supreme-blue-500 peer-focus:bg-white peer-focus:px-1"
              }`}
            >
              Full Name
            </label>
          </div>
        )}

        {/* Email Input */}
        <div className="relative">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-2 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-2 focus:border-supreme-blue-500 hover:border-supreme-blue-500 transition-all duration-200 text-base text-supreme-blue-700 bg-white peer placeholder-transparent"
            placeholder="Enter your email"
          />
          <label
            htmlFor="email"
            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
              email
                ? "-top-2 text-xs text-supreme-blue-500 bg-white px-1"
                : "top-3 text-base text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-supreme-blue-500 peer-focus:bg-white peer-focus:px-1"
            }`}
          >
            {isLoginMode ? "Email Address" : "Business Email Address"}
          </label>
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-2 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-2 focus:border-supreme-blue-500 hover:border-supreme-blue-500 transition-all duration-200 text-base text-supreme-blue-700 bg-white peer placeholder-transparent pr-12"
            placeholder="Enter your password"
            minLength={6}
          />
          <label
            htmlFor="password"
            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
              password
                ? "-top-2 text-xs text-supreme-blue-500 bg-white px-1"
                : "top-3 text-base text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-supreme-blue-500 peer-focus:bg-white peer-focus:px-1"
            }`}
          >
            {isLoginMode ? "Password" : "New Password"}
          </label>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="p-2 hover:bg-neutral-100 border-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="w-4 h-4 text-supreme-blue-500" />
              ) : (
                <EyeSlashIcon className="w-4 h-4 text-supreme-blue-500" />
              )}
            </Button>
          </div>
        </div>

        {/* Confirm Password Input - Only for signup */}
        {!isLoginMode && (
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-2 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-2 focus:border-supreme-blue-500 hover:border-supreme-blue-500 transition-all duration-200 text-base text-supreme-blue-700 bg-white peer placeholder-transparent pr-12"
              placeholder="Confirm your password"
              minLength={6}
            />
            <label
              htmlFor="confirm-password"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                confirmPassword
                  ? "-top-2 text-xs text-supreme-blue-500 bg-white px-1"
                  : "top-3 text-base text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-supreme-blue-500 peer-focus:bg-white peer-focus:px-1"
              }`}
            >
              Confirm Password
            </label>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="p-2 hover:bg-neutral-100 border-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeIcon className="w-4 h-4 text-supreme-blue-500" />
                ) : (
                  <EyeSlashIcon className="w-4 h-4 text-supreme-blue-500" />
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Remember me - Only for login */}
        {isLoginMode && (
          <div className="flex items-center justify-between gap-1 mt-4">
            <div className="flex items-center gap-1">
              <Toggle
                onPressedChange={(checked) => onRememberMeChange(checked)}
                pressed={rememberMe}
              />
              <p className="text-sm text-neutral-500 font-light tracking-wide">
                Remember me
              </p>
            </div>
            {/* Forgot Password - Uncomment when implemented */}
            <p className="text-sm text-supreme-blue-500 font-light tracking-wide cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-sm p-3 rounded-lg text-red-600 bg-red-50 border border-red-200">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" disabled={loading} variant="primary-stroke">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Please wait...
              </div>
            ) : isLoginMode ? (
              "Login"
            ) : (
              "Create Account"
            )}
          </Button>
        </div>

        {/* Mode switching */}
        <div className="text-center">
          <p className="text-sm text-neutral-600 font-normal tracking-wide">
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              className="text-supreme-blue-500 font-medium cursor-pointer hover:underline"
              onClick={() => onModeChange(isLoginMode ? "signup" : "login")}
            >
              {isLoginMode ? "Sign up" : "Sign in"}
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="relative mt-2">
          <div className="absolute left-0 top-0 w-full h-[1px] bg-neutral-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-neutral-600 text-base font-normal">
            OR
          </div>
        </div>

        {/* Social Sign-in Buttons */}
        <div className="flex flex-col gap-3 !mt-14">
          <Button
            type="button"
            variant="secondary"
            className="w-full bg-white py-4 px-8 rounded-full transition-all duration-200 border-neutral-300 hover:border-supreme-blue-400 hover:bg-neutral-50"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <GoogleIcon size={24} className="mr-2" />
            <p className="text-base text-neutral-800 font-medium tracking-wide">
              Continue with Google
            </p>
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="w-full bg-white py-4 px-8 rounded-full transition-all duration-200 border-neutral-300 hover:border-supreme-blue-400 hover:bg-neutral-50"
            onClick={handleLinkedInSignIn}
            disabled={loading}
          >
            <LinkedInIcon size={24} className="mr-2" />
            <p className="text-base text-neutral-800 font-medium tracking-wide">
              Continue with LinkedIn
            </p>
          </Button>
        </div>

        {/* Terms and Privacy Policy */}
        {showTerms && (
          <div className="text-center text-neutral-600 text-xs font-normal mt-2">
            <p>
              Supreme Intelligence © {new Date().getFullYear()}. All rights
              Reserved
            </p>
            <p>Terms and Conditions</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
