import * as React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'curie' | 'supreme'
  theme?: 'original' | 'black' | 'white'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  imageSrc?: string
  imageAlt?: string
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ 
    className, 
    variant = 'supreme', 
    theme = 'original', 
    size = 'md', 
    showText = true,
    imageSrc,
    imageAlt,
    ...props 
  }, ref) => {
    

    // Default image paths for each variant
    const defaultImages = {
      curie: {
        "black-text": '/assets/CurieAiBlackText.svg',
        "black-icon": '/assets/CurieAiBlackIcon.svg',
        "white-text": '/assets/CurieAiWhiteText.svg',
        "white-icon": '/assets/CurieAiWhiteIcon.svg',
        "original-text": '/assets/CurieAiOriginalText.svg',
        "original-icon": '/assets/CurieAiOriginalIcon.svg'
      },
      supreme: {
        "black-text": '/assets/SupremeIntelligenceBlackText.svg',
        "black-icon": '/assets/SupremeIntelligenceBlackIcon.svg',
        "white-text": '/assets/SupremeIntelligenceWhiteText.svg',
        "white-icon": '/assets/SupremeIntelligenceWhiteIcon.svg',
        "original-text": '/assets/SupremeIntelligenceOriginalText.svg',
        "original-icon": '/assets/SupremeIntelligenceOriginalIcon.svg'
      }
    }

    const getImageSrc = () => {
      if (imageSrc) return imageSrc
      const imageKey = showText ? `${theme}-text` : `${theme}-icon`
      return defaultImages[variant][imageKey]
    }

    const getImageAlt = () => {
      if (imageAlt) return imageAlt
      return `${variant === 'curie' ? 'Curie AI' : 'Supreme Intelligence'} Logo`
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        <div className={cn(
          'relative flex items-center justify-center',
        )}>
          <img
            src={getImageSrc()}
            alt={getImageAlt()}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to SVG if image fails to load
              console.warn(`Failed to load logo image: ${getImageSrc()}. Falling back to SVG.`)
              e.currentTarget.style.display = 'none'
              // You could trigger a fallback to SVG here if needed
            }}
          />
        </div>
      </div>
    )
  }
)
Logo.displayName = 'Logo'

export { Logo }