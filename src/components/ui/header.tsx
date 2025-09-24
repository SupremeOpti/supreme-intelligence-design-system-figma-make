import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { SupremeIcon } from "./Icons/SupremeIcon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar } from "./avatar";

export interface HeaderProps {
  className?: string;
  items: {
    icon: React.ReactNode;
    label: string;
    href: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ className, items }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { logout } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  // Use the same navigation items as Layout.tsx
  const navigationItems = items.map((item) => ({
    icon: item.icon,
    label: item.label,
    href: item.href,
  }));

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full bg-slate-100 right-0 flex justify-end",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="flex py-1 items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo and Branding */}
            <div className="flex justify-center items-center">
              <SupremeIcon size={60} />
            </div>
            {/* Navigation Menu Button */}
            <div className="flex items-center">
              {/* Navigation Items */}
              <nav className="hidden md:flex items-center gap-2">
                {navigationItems.map((item) => {
                  const isActive = window.location.pathname === item.href;
                  return (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className={cn(
                        "rounded-lg hover:bg-white hover:border hover:border-slate-200",
                        isActive && "bg-white border border-slate-200"
                      )}
                      size="md"
                      onClick={() => navigate(item.href)}
                    >
                      <div className="flex items-center">
                        <span
                          className={cn(
                            "flex-shrink-0 mr-2",
                            isActive && "text-slate-600"
                          )}
                        >
                          {item.icon}
                        </span>
                        <span
                          className={cn(
                            "truncate text-slate-600",
                            isActive && "text-slate-600 font-semibold"
                          )}
                        >
                          {item.label}
                        </span>
                      </div>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
          {/* User Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              size="md"
            >
              Log out
            </Button>

            {/* Profile Picture */}
            <div className="relative" ref={userMenuRef}>
              <Button
                variant="ghost"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <Avatar
                  size="sm"
                  fallback="AA"
                  className="bg-supreme-blue-900 text-primary-foreground"
                />
                <ChevronDownIcon className="h-4 w-4 text-gray-700" />
              </Button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border border-gray-200 py-2 z-50 bg-white">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Help
                  </a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
