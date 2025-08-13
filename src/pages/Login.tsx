import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthForm from "../components/ui/authForm";
import { Logo } from "@/components/ui/logo";

const Login: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  const handleSuccess = () => {
    console.log("Authentication successful!");
    // Redirect to index page after successful login
    navigate("/");
  };

  const handleSubmit = async (data: {
    email: string;
    password: string;
    fullName?: string;
    confirmPassword?: string;
    rememberMe?: boolean;
  }) => {
    console.log("Form submitted:", data);
    console.log("Remember me:", data.rememberMe);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically make an API call to authenticate
      // For demo purposes, we'll simulate a successful login
      if (mode === "signup") {
        // Create new user
        const newUser = {
          id: Date.now().toString(),
          email: data.email,
          fullName: data.fullName || "",
        };
        login(newUser);
      } else {
        // Login existing user (simulate)
        const existingUser = {
          id: "1",
          email: data.email,
          fullName: "Demo User",
        };
        login(existingUser);
      }

      // Only call onSuccess after successful authentication
      handleSuccess();
    } catch (error) {
      console.error("Authentication failed:", error);
      // Handle error appropriately
    }
  };

  const handleGoogle = async () => {
    console.log("Google sign-in");
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Create demo user for Google login
      const googleUser = {
        id: "google-" + Date.now(),
        email: "user@gmail.com",
        fullName: "Google User",
      };
      login(googleUser);

      // Redirect after successful authentication
      handleSuccess();
    } catch (error) {
      console.error("Google sign-in failed:", error);
      throw error;
    }
  };

  const handleLinkedIn = async () => {
    console.log("LinkedIn sign-in");
    try {
      // Simulate LinkedIn OAuth
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Create demo user for LinkedIn login
      const linkedInUser = {
        id: "linkedin-" + Date.now(),
        email: "user@linkedin.com",
        fullName: "LinkedIn User",
      };
      login(linkedInUser);

      // Redirect after successful authentication
      handleSuccess();
    } catch (error) {
      console.error("LinkedIn sign-in failed:", error);
      throw error;
    }
  };

  const handleModeChange = (newMode: "login" | "signup") => {
    setMode(newMode);
  };

  const handleRememberMeChange = (checked: boolean) => {
    setRememberMe(checked);
    console.log("Remember me changed:", checked);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-supreme-blue-50 to-supreme-blue-100">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-8 pb-6">
          <Logo variant="supreme" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {mode === "login" ? "Welcome Back" : "Create An Account"}
          </h1>
          <p className="text-slate-600 w-[60%] mx-auto text-sm text-center leading-relaxed">
            {mode === "login"
              ? "Sign in to access the Supreme Intelligence platform"
              : "Unlock the future of life sciences with AI-powered insights and data-driven decision making"}
          </p>
        </div>

        {/* Auth Form */}
        <AuthForm
          mode={mode}
          onSuccess={handleSuccess}
          onModeChange={handleModeChange}
          onSubmit={handleSubmit}
          onGoogleLogin={handleGoogle}
          onLinkedInLogin={handleLinkedIn}
          showTerms={true}
          onRememberMeChange={handleRememberMeChange}
          rememberMe={rememberMe}
        />
      </div>
    </div>
  );
};

export default Login;
