import * as React from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement> {
  copyright?: string;
  links?: FooterLink[];
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      copyright = `Supreme Optimization © ${new Date().getFullYear()}. All rights Reserved`,
      links = [{ label: "Terms and Conditions", href: "#" }],
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "flex w-full justify-center border-t border-slate-200 bg-slate-50",
          "py-3.5 text-xs font-normal leading-4 tracking-normal text-[#4e4c6c]",
          className,
        )}
        {...props}
      >
        <div className="flex w-full max-w-[1261px] flex-wrap items-center justify-center gap-9 px-4 text-center sm:flex-nowrap">
          <span className="shrink-0">{copyright}</span>
          {links.map(({ label, href, onClick }) =>
            href ? (
              <a
                key={label}
                href={href}
                onClick={onClick}
                className="shrink-0 text-[#4e4c6c] hover:text-supreme-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2"
              >
                {label}
              </a>
            ) : (
              <span key={label} className="shrink-0">
                {label}
              </span>
            ),
          )}
        </div>
      </footer>
    );
  },
);

Footer.displayName = "Footer";

