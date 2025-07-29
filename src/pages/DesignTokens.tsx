import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DesignTokens = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Design Tokens</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive design token system for consistent UI development
            </p>
          </div>
        </div>

        {/* Border Radius Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Border Radius</h2>
          <div className="grid grid-cols-5 gap-4">
            {[
              { name: "rounded-none", class: "rounded-none" },
              { name: "rounded-xs", class: "rounded-xs" },
              { name: "rounded-sm", class: "rounded-sm" },
              { name: "rounded-md", class: "rounded-md" },
              { name: "rounded-lg", class: "rounded-lg" },
              { name: "rounded-xl", class: "rounded-xl" },
              { name: "rounded-2xl", class: "rounded-2xl" },
              { name: "rounded-3xl", class: "rounded-3xl" },
              { name: "rounded-4xl", class: "rounded-4xl" },
              { name: "rounded-full", class: "rounded-full" },
            ].map((radius) => (
              <div key={radius.name} className="text-center space-y-2">
                <div className={`w-16 h-16 bg-supreme-blue-500 ${radius.class} mx-auto`}></div>
                <p className="text-sm font-mono">{radius.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Typography Scale</h2>
          <div className="space-y-4">
            {[
              { name: "text-xs", class: "text-xs" },
              { name: "text-sm", class: "text-sm" },
              { name: "text-base", class: "text-base" },
              { name: "text-lg", class: "text-lg" },
              { name: "text-xl", class: "text-xl" },
              { name: "text-2xl", class: "text-2xl" },
              { name: "text-3xl", class: "text-3xl" },
              { name: "text-4xl", class: "text-4xl" },
              { name: "text-5xl", class: "text-5xl" },
              { name: "text-6xl", class: "text-6xl" },
              { name: "text-7xl", class: "text-7xl" },
              { name: "text-8xl", class: "text-8xl" },
              { name: "text-9xl", class: "text-9xl" },
            ].map((typography) => (
              <div key={typography.name} className="flex items-center space-x-4">
                <p className={`${typography.class} font-normal`}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <Badge variant="default" className="font-mono">
                  {typography.name}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Opacity Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Opacity Scale</h2>
          <div className="grid grid-cols-11 gap-2">
            {[
              { name: "opacity-0", class: "opacity-0" },
              { name: "opacity-5", class: "opacity-5" },
              { name: "opacity-10", class: "opacity-10" },
              { name: "opacity-15", class: "opacity-15" },
              { name: "opacity-20", class: "opacity-20" },
              { name: "opacity-25", class: "opacity-25" },
              { name: "opacity-30", class: "opacity-30" },
              { name: "opacity-35", class: "opacity-35" },
              { name: "opacity-40", class: "opacity-40" },
              { name: "opacity-45", class: "opacity-45" },
              { name: "opacity-50", class: "opacity-50" },
            ].map((opacity) => (
              <div key={opacity.name} className="text-center space-y-2">
                <div className={`w-8 h-8 bg-black ${opacity.class} mx-auto rounded-sm`}></div>
                <p className="text-xs font-mono">{opacity.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-10 gap-2">
            {[
              { name: "opacity-55", class: "opacity-55" },
              { name: "opacity-60", class: "opacity-60" },
              { name: "opacity-65", class: "opacity-65" },
              { name: "opacity-70", class: "opacity-70" },
              { name: "opacity-75", class: "opacity-75" },
              { name: "opacity-80", class: "opacity-80" },
              { name: "opacity-85", class: "opacity-85" },
              { name: "opacity-90", class: "opacity-90" },
              { name: "opacity-95", class: "opacity-95" },
              { name: "opacity-100", class: "opacity-100" },
            ].map((opacity) => (
              <div key={opacity.name} className="text-center space-y-2">
                <div className={`w-8 h-8 bg-black ${opacity.class} mx-auto rounded-sm`}></div>
                <p className="text-xs font-mono">{opacity.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadow Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Shadow Scale</h2>
          <div className="grid grid-cols-8 gap-4">
            {[
              { name: "shadow-none", class: "shadow-none" },
              { name: "shadow-2xs", class: "shadow-2xs" },
              { name: "shadow-xs", class: "shadow-xs" },
              { name: "shadow-sm", class: "shadow-sm" },
              { name: "shadow-md", class: "shadow-md" },
              { name: "shadow-lg", class: "shadow-lg" },
              { name: "shadow-xl", class: "shadow-xl" },
              { name: "shadow-2xl", class: "shadow-2xl" },
            ].map((shadow) => (
              <div key={shadow.name} className="text-center space-y-2">
                <div className={`w-16 h-16 bg-white border border-border ${shadow.class} mx-auto rounded-lg`}></div>
                <p className="text-sm font-mono">{shadow.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "shadow-inset-2xs", class: "shadow-inset-2xs" },
              { name: "shadow-inset-xs", class: "shadow-inset-xs" },
              { name: "shadow-inset-sm", class: "shadow-inset-sm" },
            ].map((shadow) => (
              <div key={shadow.name} className="text-center space-y-2">
                <div className={`w-16 h-16 bg-white border border-border ${shadow.class} mx-auto rounded-lg`}></div>
                <p className="text-sm font-mono">{shadow.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blur Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Blur Effects</h2>
          <div className="grid grid-cols-8 gap-4">
            {[
              { name: "blur-none", class: "blur-none" },
              { name: "blur-xs", class: "blur-xs" },
              { name: "blur-sm", class: "blur-sm" },
              { name: "blur-md", class: "blur-md" },
              { name: "blur-lg", class: "blur-lg" },
              { name: "blur-xl", class: "blur-xl" },
              { name: "blur-2xl", class: "blur-2xl" },
              { name: "blur-3xl", class: "blur-3xl" },
            ].map((blur) => (
              <div key={blur.name} className="text-center space-y-2">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-supreme-blue-400 to-supreme-blue-600 rounded-lg"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br from-supreme-blue-400 to-supreme-blue-600 rounded-lg ${blur.class}`}></div>
                </div>
                <p className="text-sm font-mono">{blur.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Backdrop Blur Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Backdrop Blur Effects</h2>
          <div className="relative h-32 bg-gradient-to-br from-supreme-blue-200 to-supreme-blue-400 rounded-lg overflow-hidden" style={{ backgroundImage: 'url(/assets/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-supreme-blue-300 to-supreme-blue-500 opacity-50"></div>
            <div className="grid grid-cols-8 gap-4 p-4">
              {[
                { name: "backdrop-blur-none", class: "backdrop-blur-none" },
                { name: "backdrop-blur-xs", class: "backdrop-blur-xs" },
                { name: "backdrop-blur-sm", class: "backdrop-blur-sm" },
                { name: "backdrop-blur-md", class: "backdrop-blur-md" },
                { name: "backdrop-blur-lg", class: "backdrop-blur-lg" },
                { name: "backdrop-blur-xl", class: "backdrop-blur-xl" },
                { name: "backdrop-blur-2xl", class: "backdrop-blur-2xl" },
                { name: "backdrop-blur-3xl", class: "backdrop-blur-3xl" },
              ].map((blur) => (
                <div key={blur.name} className="text-center space-y-2">
                  <div className={`w-12 h-12 bg-white/20 border border-white/30 rounded-lg ${blur.class} flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  <p className="text-xs font-mono text-white">{blur.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Spacing Scale</h2>
          <div className="space-y-4">
            {[
              { name: "0", class: "w-0", label: "0px" },
              { name: "0.5", class: "w-0.5", label: "2px" },
              { name: "1", class: "w-1", label: "4px" },
              { name: "1.5", class: "w-1.5", label: "6px" },
              { name: "2", class: "w-2", label: "8px" },
              { name: "2.5", class: "w-2.5", label: "10px" },
              { name: "3", class: "w-3", label: "12px" },
              { name: "3.5", class: "w-3.5", label: "14px" },
              { name: "4", class: "w-4", label: "16px" },
              { name: "5", class: "w-5", label: "20px" },
              { name: "6", class: "w-6", label: "24px" },
              { name: "7", class: "w-7", label: "28px" },
              { name: "8", class: "w-8", label: "32px" },
              { name: "9", class: "w-9", label: "36px" },
              { name: "10", class: "w-10", label: "40px" },
              { name: "11", class: "w-11", label: "44px" },
              { name: "12", class: "w-12", label: "48px" },
              { name: "14", class: "w-14", label: "56px" },
              { name: "16", class: "w-16", label: "64px" },
              { name: "20", class: "w-20", label: "80px" },
              { name: "24", class: "w-24", label: "96px" },
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center space-x-4">
                <div className={`h-4 bg-supreme-blue-500 ${spacing.class}`}></div>
                <div className="flex space-x-2">
                  <Badge variant="default" className="font-mono">
                    {spacing.name}
                  </Badge>
                  <Badge variant="foundation" className="font-mono">
                    {spacing.label}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supreme Blue Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Supreme Blue Color Palette</h2>
          <div className="grid grid-cols-12 gap-2">
            {[
              { name: "50", class: "bg-supreme-blue-50", hex: "#EDEBFD" },
              { name: "100", class: "bg-supreme-blue-100", hex: "#C6C2F8" },
              { name: "200", class: "bg-supreme-blue-200", hex: "#AAA5F5" },
              { name: "300", class: "bg-supreme-blue-300", hex: "#847CF0" },
              { name: "400", class: "bg-supreme-blue-400", hex: "#6C62ED" },
              { name: "500", class: "bg-supreme-blue-500", hex: "#473BE9" },
              { name: "600", class: "bg-supreme-blue-600", hex: "#4136D4" },
              { name: "700", class: "bg-supreme-blue-700", hex: "#322AA5" },
              { name: "800", class: "bg-supreme-blue-800", hex: "#272080" },
              { name: "900", class: "bg-supreme-blue-900", hex: "#1E1962" },
              { name: "950", class: "bg-supreme-blue-950", hex: "#100D3" },
            ].map((color) => (
              <div key={color.name} className="text-center space-y-2">
                <div className={`w-12 h-12 ${color.class} rounded-lg border border-border mx-auto`}></div>
                <p className="text-xs font-mono">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button with Design Tokens</CardTitle>
                <CardDescription>
                  Using semantic colors, spacing, and border radius tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Button variant="primary" size="lg">
                  Primary Action
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary Action
                </Button>
                <Button variant="link" size="md">
                  Link Style
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Shadows</CardTitle>
                <CardDescription>
                  Demonstrating shadow and spacing tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-supreme-blue-50 rounded-lg shadow-sm">
                  <p className="text-sm text-supreme-blue-800">
                    Light card with subtle shadow
                  </p>
                </div>
                <div className="p-4 bg-supreme-blue-500 rounded-xl shadow-lg">
                  <p className="text-sm text-white">
                    Dark card with prominent shadow
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignTokens; 