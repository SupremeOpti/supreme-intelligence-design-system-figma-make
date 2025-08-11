import { Button } from "@/components/ui/button";
import {
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxHeader,
  ContentBoxTitle,
} from "@/components/ui/contentbox";
import { Logo } from "@/components/ui/logo";
import { ArrowRight, Palette, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center mb-6">
            <Logo variant="supreme" size="lg" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Supreme Intelligence Design System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive design system built with React, TypeScript, and
            Tailwind CSS. Featuring beautiful components, semantic tokens, and
            seamless dark mode support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/components">
                View Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/design-tokens">
                Design Tokens <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/sidebar-demo">
                Sidebar Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContentBox>
            <ContentBoxHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <ContentBoxTitle>Design Tokens</ContentBoxTitle>
              <ContentBoxDescription>
                Semantic color system with HSL values, supporting both light and
                dark themes seamlessly.
              </ContentBoxDescription>
            </ContentBoxHeader>
          </ContentBox>

          <ContentBox>
            <ContentBoxHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <ContentBoxTitle>TypeScript Ready</ContentBoxTitle>
              <ContentBoxDescription>
                Fully typed components with excellent IntelliSense support and
                type safety out of the box.
              </ContentBoxDescription>
            </ContentBoxHeader>
          </ContentBox>

          <ContentBox>
            <ContentBoxHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <ContentBoxTitle>Performance First</ContentBoxTitle>
              <ContentBoxDescription>
                Optimized bundle size with tree-shaking support and efficient
                component architecture.
              </ContentBoxDescription>
            </ContentBoxHeader>
          </ContentBox>
        </div>

        {/* Quick Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">TypeScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Themes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
