import * as React from "react";
import { cn } from "@/lib/utils";
import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { AIIcon, PersonaIcon } from "./Icons";
import { Button } from "./button";

export interface CurieAIChatPromptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onSend?: (message: string) => void;
  onAdd?: () => void;
  onPersonasChange?: (persona: string) => void;
  personas?: string[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const CurieAIChatPrompt = React.forwardRef<
  HTMLDivElement,
  CurieAIChatPromptProps
>(
  (
    {
      onSend,
      onAdd,
      onPersonasChange,
      personas = ["General", "Creative", "Analytical", "Technical"],
      placeholder = "Ask Anything",
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [message, setMessage] = React.useState("");
    const [selectedPersona, setSelectedPersona] = React.useState(personas[0]);
    const [isPersonasOpen, setIsPersonasOpen] = React.useState(false);

    const handleSend = () => {
      if (message.trim() && onSend) {
        onSend(message.trim());
        setMessage("");
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    const handlePersonaSelect = (persona: string) => {
      setSelectedPersona(persona);
      setIsPersonasOpen(false);
      if (onPersonasChange) {
        onPersonasChange(persona);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center p-4 gap-4 bg-slate-100 rounded-2xl",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            {/* Curie AI Icon - Four-pointed star/compass rose */}
            <AIIcon
              className="text-supreme-blue-700 w-7 h-7"
              fill="currentColor"
            />
            <h1 className="text-2xl font-semibold text-supreme-blue-700">
              Curie AI
            </h1>
          </div>
          <h2 className="text-3xl font-medium text-neutral-700">
            What would you like to discover?
          </h2>
        </div>

        {/* Main Input Area */}
        <div className="relative w-full max-w-4xl">
          <div className="relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-4">
            {/* Textarea */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full h-16 resize-none border-none outline-none text-base placeholder:text-neutral-400 focus:ring-0 focus:outline-none disabled:opacity-50"
            />

            {/* Bottom Action Bar */}
            <div className="flex items-center justify-between pt-2">
              {/* Left Side - Add and Personas */}
              <div className="flex items-center space-x-3">
                {/* Add Button */}
                <Button
                  variant="secondary"
                  onClick={onAdd}
                  disabled={disabled}
                  size="icon"
                >
                  <PlusIcon className="w-6 h-6 text-black" />
                </Button>

                {/* Personas Dropdown */}
                <div className="relative">
                  <Button
                    onClick={() => setIsPersonasOpen(!isPersonasOpen)}
                    disabled={disabled}
                    size="default"
                    variant="secondary"
                  >
                    {/* Persona Icon */}
                    <PersonaIcon size={24} />
                    <span className="text-sm font-medium text-black">
                      {selectedPersona}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>

              {/* Right Side - Send Button */}
              <Button
                onClick={handleSend}
                size="icon"
                disabled={disabled || !message.trim()}
              >
                <ArrowUpIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CurieAIChatPrompt.displayName = "CurieAIChatPrompt";

export { CurieAIChatPrompt };
