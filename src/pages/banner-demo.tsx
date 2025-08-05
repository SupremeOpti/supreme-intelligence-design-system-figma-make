import React from "react";
import { Banner } from "@/components/ui/banner";

export default function BannerDemo() {
  const handleCtaClick = () => {
    console.log("CTA button clicked!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Banner Component Demo
          </h1>
          <p className="text-lg text-gray-600">
            Based on the provided image design
          </p>
        </div>
        {/* Variant examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Banner Variants
          </h2>
          <div className="space-y-4">
            <Banner
              variant="primary"
              title="Primary variant banner"
              ctaText="Get Started"
              onCtaClick={handleCtaClick}
            />
            <Banner
              variant="secondary"
              title="Secondary variant banner"
              ctaText="Learn More"
              onCtaClick={handleCtaClick}
            />
            <Banner
              variant="dark"
              title="Dark variant banner"
              ctaText="Sign Up"
              onCtaClick={handleCtaClick}
            />
          </div>
        </div>

        {/* Size examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Banner Sizes</h2>
          <div className="space-y-4">
            <Banner
              size="sm"
              title="Small banner with compact spacing"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
            <Banner
              size="default"
              title="Default size banner"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
            <Banner
              size="lg"
              title="Large banner with more padding"
              ctaText="Action"
              onCtaClick={handleCtaClick}
            />
          </div>
        </div>

        {/* Banner without CTA */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Banner Without CTA
          </h2>
          <Banner
            title="This banner has no call-to-action button"
            showCta={false}
          />
        </div>

        {/* Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Design Specifications
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Default State:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Width: 696px</li>
              <li>Height: 72px</li>
              <li>Border radius: 66px</li>
              <li>Padding: 14px top/bottom, 32px left, 16px right</li>
              <li>
                Background: Linear gradient (180deg, #4E47AF 0%, #312A93 100%)
              </li>
              <li>Shadow: 0px 4px 6px -2px #0000000D</li>
            </ul>
            <p className="mt-4">
              <strong>Hover State:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Enhanced shadow: 0px 10px 15px -3px #0000001A</li>
              <li>
                Gradient: Linear gradient (180deg, #4E47AF 0%, #312A93 100%)
              </li>
            </ul>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Props:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <code>title</code> - The main text content (required)
              </li>
              <li>
                <code>ctaText</code> - Call-to-action button text (default:
                "Create Free Account")
              </li>
              <li>
                <code>onCtaClick</code> - Function called when CTA button is
                clicked
              </li>
              <li>
                <code>showCta</code> - Whether to show the CTA button (default:
                true)
              </li>
              <li>
                <code>variant</code> - Color variant: "default", "primary",
                "secondary", "dark"
              </li>
              <li>
                <code>size</code> - Size variant: "sm", "default", "lg", "xl"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
