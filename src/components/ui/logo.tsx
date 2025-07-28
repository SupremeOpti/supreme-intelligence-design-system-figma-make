import * as React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'curie' | 'supreme'
  theme?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, variant = 'curie', theme = 'light', size = 'md', showText = true, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    }

    const textSizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-xl',
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {variant === 'curie' && (
          <>
            <div className={cn(
              'relative flex items-center justify-center',
              sizeClasses[size],
              theme === 'dark' ? 'text-white' : 'text-primary'
            )}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {showText && (
              <span className={cn(
                'font-semibold',
                textSizeClasses[size],
                theme === 'dark' ? 'text-white' : 'text-foreground'
              )}>
                Curie AI
              </span>
            )}
          </>
        )}

        {variant === 'supreme' && (
          <>
            <div className={cn(
              'relative flex items-center justify-center rounded-sm font-bold text-white',
              sizeClasses[size],
              theme === 'dark' ? 'bg-gradient-to-br from-primary to-primary/80' : 'bg-foreground'
            )}>
              <span className={cn(
                'font-bold',
                size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg'
              )}>
                S1
              </span>
            </div>
            {showText && (
              <span className={cn(
                'font-semibold',
                textSizeClasses[size],
                theme === 'dark' ? 'text-white' : 'text-foreground'
              )}>
                Supreme Intelligence
              </span>
            )}
          </>
        )}
      </div>
    )
  }
)
Logo.displayName = 'Logo'

export { Logo }