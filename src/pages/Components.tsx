import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxHeader,
  ContentBoxTitle,
} from "@/components/ui/contentbox";
import { EnvelopeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleDemo } from "@/pages/toggle-demo";
import { Logo } from "@/components/ui/logo";

import {
  PageLevel,
  PageLevelList,
  PageLevelItem,
} from "@/components/ui/page-level";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useNavigate } from "react-router-dom";
import { Persona } from "@/components/ui/persona";
import { AppIcon } from "@/components/ui/Icons/AppIcon";
import { AI } from "@/components/ui/Icons/AI";
import { Audiences } from "@/components/ui/Icons/Audiences";
import { BrandGuidelines } from "@/components/ui/Icons/BrandGuidelines";
import { DataSources } from "@/components/ui/Icons/DataSources";
import { DigitalAssetManagement } from "@/components/ui/Icons/DigitalAssetManagement";
import { Google } from "@/components/ui/Icons/Google";
import { Home } from "@/components/ui/Icons/Home";
import { KnowledgeBase } from "@/components/ui/Icons/KnowledgeBase";
import { LinkedIn } from "@/components/ui/Icons/LinkedIn";
import { PersonaIcon } from "@/components/ui/Icons/PersonaIcon";
import { Sidebar } from "@/components/ui/Icons/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import ToastDemo from "./toast-demo";
import {
  InfoCard,
  IconCard,
  MessageAngle,
  MessageCard,
  HighlightCard,
  HighlightCTACard,
  AnnouncementCard,
} from "@/components/ui/card";
import BannerDemo from "./banner-demo";
import { RangeSlider, Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Components = () => {
  const navigate = useNavigate();
  const [singleSliderValue, setSingleSliderValue] = useState([75]);
  const [rangeSliderValue, setRangeSliderValue] = useState<[number, number]>([
    25, 75,
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button asChild variant="secondary" size="md">
              <Link to="/design-tokens">Design Tokens</Link>
            </Button>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Design System Components</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of all available components
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="InteractiveDynamicControls"
          className="w-full mx-auto"
        >
          <TabsList className="w-full justify-between">
            <TabsTrigger
              value="InteractiveDynamicControls"
              className="w-1/3"
              variant="supreme-blue"
            >
              Interactive & Dynamic Controls
            </TabsTrigger>
            <TabsTrigger
              value="ContentOrganizationLayout"
              className="w-1/3"
              variant="supreme-blue"
            >
              Content Organization & Layout
            </TabsTrigger>
            <TabsTrigger
              value="VisualElementsIndicators"
              className="w-1/3"
              variant="supreme-blue"
            >
              Visual Elements & Indicators
            </TabsTrigger>
          </TabsList>
          <TabsContent value="InteractiveDynamicControls">
            <div className="flex flex-col gap-4 mt-4">
              {/* Buttons */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Buttons</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Button Matrix</ContentBoxTitle>
                    <ContentBoxDescription>
                      Comprehensive button variants, sizes, and states
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="space-y-8">
                    {/* Button States Matrix */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Button States & Variants
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-medium">
                                Size
                              </th>
                              <th className="text-center p-3 font-medium">
                                Primary
                              </th>
                              <th className="text-center p-3 font-medium">
                                Primary Stroke
                              </th>
                              <th className="text-center p-3 font-medium">
                                Secondary
                              </th>
                              <th className="text-center p-3 font-medium">
                                Secondary Color
                              </th>
                              <th className="text-center p-3 font-medium">
                                Link
                              </th>
                              <th className="text-center p-3 font-medium">
                                Icon Only
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Large</td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="primary"
                                  size="lg"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="primary-stroke"
                                  size="lg"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="secondary"
                                  size="lg"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="secondary-color"
                                  size="lg"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="link"
                                  size="lg"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button size="icon" showIcons="center"></Button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Medium</td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="primary"
                                  size="md"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="primary-stroke"
                                  size="md"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="secondary"
                                  size="md"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="secondary-color"
                                  size="md"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  variant="link"
                                  size="md"
                                  showIcons="both"
                                >
                                  Button
                                </Button>
                              </td>
                              <td className="p-3 text-center">
                                <Button
                                  size="icon-sm"
                                  showIcons="center"
                                ></Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Toggle */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Toggle & Checkbox</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Toggle & Checkbox</ContentBoxTitle>
                    <ContentBoxDescription>
                      On/off state controls with different states and sizes
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <ToggleDemo />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Toast */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Toast</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Toast Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Toast messages for user feedback
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <ToastDemo />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Banner */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Banner</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Banner Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Banner component for displaying important messages
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <BannerDemo />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Table */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Table</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Enhanced Table Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Table with filtering, pagination, and action buttons
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Click the link below to view the full table demo with
                        filtering and pagination:
                      </p>
                      <Button asChild variant="primary" size="md">
                        <Link to="/table-demo">View Table Demo</Link>
                      </Button>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Slider */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Slider</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Range Slider Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Interactive slider with Supreme Intelligence design tokens
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Slider */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Basic Slider</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">
                                Volume
                              </span>
                              <span className="text-supreme-blue-400 text-sm">
                                {singleSliderValue[0]}%
                              </span>
                            </div>
                            <Slider
                              value={singleSliderValue}
                              onValueChange={setSingleSliderValue}
                              max={100}
                              step={1}
                              className="w-full"
                            />
                          </div>
                        </div>

                        {/* Range Slider */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Range Slider</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">
                                Price Range
                              </span>
                              <span className="text-supreme-blue-400 text-sm">
                                ${rangeSliderValue[0]} - ${rangeSliderValue[1]}
                              </span>
                            </div>
                            <RangeSlider
                              value={rangeSliderValue}
                              onValueChange={(value) =>
                                setRangeSliderValue(value as [number, number])
                              }
                              max={100}
                              step={5}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3">
                          Component Features
                        </h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                            White circular handles with blue outline
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                            Blue progress bar from left to handle position
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                            Light gray track from handle to right edge
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                            Subtle shadows for depth and elevation
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-supreme-blue-500 rounded-full mr-3"></span>
                            Fully accessible with keyboard navigation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Input & Textarea */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Form Inputs</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>
                      Input & Textarea Components
                    </ContentBoxTitle>
                    <ContentBoxDescription>
                      Form input components with labels, hints, and validation
                      states
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="space-y-8">
                    {/* Input Demo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Input Component</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Design Implementation */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">
                            Design Implementation
                          </h4>
                          <Input
                            label="Title"
                            required
                            placeholder="Placeholder"
                            hint="This is a hint text to help user."
                            leftIcon={
                              <Home className="text-muted-foreground" />
                            }
                            rightIcon={
                              <Home className="text-muted-foreground" />
                            }
                          />
                        </div>

                        {/* Additional Examples */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">
                            Additional Examples
                          </h4>
                          <div className="space-y-4">
                            <Input
                              label="Email"
                              type="email"
                              placeholder="Enter your email"
                              hint="We'll never share your email with anyone else."
                              leftIcon={
                                <EnvelopeIcon className="text-muted-foreground w-5 h-5" />
                              }
                            />
                            <Input
                              label="Search"
                              placeholder="Search..."
                              hint="Search for something..."
                              leftIcon={
                                <MagnifyingGlassIcon className="text-muted-foreground w-5 h-5" />
                              }
                            />
                            <Input
                              label="With Error"
                              placeholder="This field has an error"
                              error="This field is required"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Textarea Demo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">
                        Textarea Component
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">
                            Basic Textarea
                          </h4>
                          <Textarea
                            label="Description"
                            placeholder="Enter your description here..."
                            hint="Provide a detailed description of your project."
                          />
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">
                            With Error State
                          </h4>
                          <Textarea
                            label="Comments"
                            required
                            placeholder="Enter your comments..."
                            error="This field is required"
                          />
                        </div>
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Progress */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Progress</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Progress Component</ContentBoxTitle>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <Progress showValue size="lg" value={50} />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Accordion */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Accordion</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Accordion Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Accordion component for displaying content in a
                      collapsible format
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          Accordion example lorem ipsum
                        </AccordionTrigger>
                        <AccordionContent>
                          Description Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Sed massa erat, faucibus vel eros et,
                          feugiat euismod erat. Aenean viverra pellentesque
                          nulla, at tempor libero laoreet id. Sed faucibus magna
                          sit am.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Page Level Navigation */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">
                  Page Level Navigation
                </h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Page Level Indicators</ContentBoxTitle>
                    <ContentBoxDescription>
                      Hierarchical navigation indicators
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Basic Page Level
                        </h3>
                        <PageLevel level={1} />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Custom Text
                        </h3>
                        <PageLevel>Dashboard Overview</PageLevel>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Different Variants
                        </h3>
                        <div className="flex gap-2">
                          <PageLevel variant="default">
                            Default variant
                          </PageLevel>
                          <PageLevel variant="primary">
                            Primary variant
                          </PageLevel>
                          <PageLevel variant="secondary">
                            Secondary variant
                          </PageLevel>
                          <PageLevel variant="brand">Brand variant</PageLevel>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Arrow Positions
                        </h3>
                        <div className="gap-2 items-center flex">
                          <PageLevel arrowPosition="before">
                            Arrow before text
                          </PageLevel>
                          <PageLevel arrowPosition="after">
                            Arrow after text
                          </PageLevel>
                          <PageLevel showArrow={false}>No arrow</PageLevel>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Page Level List
                        </h3>
                        <PageLevelList>
                          <PageLevelItem>Home</PageLevelItem>
                          <PageLevelItem>Components</PageLevelItem>
                          <PageLevelItem active>Page Level</PageLevelItem>
                        </PageLevelList>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Custom Separator
                        </h3>
                        <PageLevel
                          separator={
                            <span className="text-muted-foreground">/</span>
                          }
                        >
                          Custom separator
                        </PageLevel>
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
            </div>
          </TabsContent>
          <TabsContent value="ContentOrganizationLayout">
            <div className="flex flex-col gap-4 mt-4">
              {/* Cards */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Cards</h2>
                <ContentBox className="bg-neutral-100">
                  <ContentBoxHeader>
                    <ContentBoxTitle>Card Components</ContentBoxTitle>
                    <ContentBoxDescription>
                      Various card layouts and styles for different use cases.{" "}
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-center">
                    {/* Message Angle */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Message Angle</h3>
                      <div className="max-w-md">
                        <MessageAngle
                          title="Diam nascetur lobortis nec"
                          description="Vulputate et id vulputate eget facilisis. Sed viverra eu quis viverra tincidunt nisi id ut sit fames eget."
                        />
                      </div>
                    </div>
                    {/* Info Card */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Info Card</h3>
                      <div className="max-w-md">
                        <InfoCard
                          subtitle="Risus pretium"
                          title="Lorem pharetra"
                          description="Diam nascetur lobortis nec"
                        />
                      </div>
                    </div>
                    {/* Card with Icon */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Card with Icon</h3>
                      <div className="max-w-md">
                        <IconCard
                          title="Diam nascetur lobortis nec"
                          value="99999"
                        />
                      </div>
                    </div>
                    {/* Highlight Card */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Highlight Card</h3>
                      <div className="max-w-2xl">
                        <HighlightCard
                          value="99"
                          title="Montes egestas mauris"
                          subtitle="Velit dui enim turpis tempor"
                        />
                      </div>
                    </div>
                    {/* Highlight CTA Card */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Highlight CTA Card
                      </h3>
                      <div className="max-w-sm">
                        <HighlightCTACard
                          title="Lorem ipsum dolor sit"
                          value="9999M"
                          description="Sapien orci id vitae justo elit sem dictums sed eu. Elementum hac volutpat amet."
                          ctaText="See More Details"
                          onCtaClick={() => console.log("CTA clicked")}
                        />
                      </div>
                    </div>
                    {/* Card with Message */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Card with Message</h3>
                      <div className="max-w-2xl">
                        <MessageCard
                          headerTitle="Risus pretium"
                          mainContent="Sapien orci id vitae justo elit sem dictumst sed eu. Elementum hac volutpat amet viverra commodo sociis elementum gravida sit. Felis sed nec tellus interdum neque fames imperdiet ac. Pellentesque integer sit nibh risus in arcu amet tempus. Interdum convallis morbi."
                          nestedTitle="Diam nascetur lobortis nec"
                          nestedContent="Vulputate et id vulputate eget facilisis. Sed viverra eu quis viverra tincidunt nisi id ut sit fames eget."
                        />
                      </div>
                    </div>
                    {/* Announcement Card */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Announcement Card</h3>
                      <div className="max-w-2xl">
                        <AnnouncementCard
                          title="Sed mauris phasellus scelerisque"
                          author="By Team"
                          date="Month 1, 2025"
                          content={
                            "Sapien orci id vitae justo elit sem dictumst sed eu. Elementum hac volutpat amet viverra commodo sociis elementum gravida sit. Felis sed nec tellus interdum neque fames imperdiet ac. Pellentesque integer sit nibh risus in arcu amet tempus. Interdum convallis morbi."
                          }
                          badgeText="Badge"
                        />
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Pagination Demo */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Pagination</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Pagination Showcase</ContentBoxTitle>
                  </ContentBoxHeader>
                  <ContentBoxContent className="w-full flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">5</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">6</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">7</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">8</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">100</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </ContentBoxContent>
                </ContentBox>
              </section>
            </div>
          </TabsContent>
          <TabsContent value="VisualElementsIndicators">
            <div className="flex flex-col gap-4 mt-4">
              {/* Icons */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Icons</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Custom Icons</ContentBoxTitle>
                    <ContentBoxDescription>
                      Rules: Only use the Outline style of Heroicons to ensure
                      consistency across all interfaces. All icons should use a
                      1.5px stroke weight to align with our visual standards.
                      Then Custom Icons should be used for any icons that are
                      not part of the Heroicons library.
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="flex flex-wrap gap-4">
                    <AppIcon />
                    <AI />
                    <Audiences />
                    <BrandGuidelines />
                    <DataSources />
                    <DigitalAssetManagement />
                    <Google />
                    <Home />
                    <KnowledgeBase />
                    <LinkedIn />
                    <PersonaIcon />
                    <Sidebar />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Persona */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Persona</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Persona Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      User profile images and fallbacks
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent>
                    <Persona
                      variant="default"
                      showLeftIcon
                      showRightIcon
                      personas={["John Doe", "Jane Smith"]}
                    />
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Logo */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Logo</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Brand Logos</ContentBoxTitle>
                    <ContentBoxDescription>
                      Different logo variants and themes
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="space-y-4 bg-slate-400 p-8 rounded-lg">
                    <div className="flex items-center gap-8">
                      <Logo variant="curie" size="lg" />
                      <Logo variant="curie" size="lg" showText={false} />
                      <Logo variant="supreme" size="lg" />
                      <Logo variant="supreme" size="lg" showText={false} />
                    </div>
                    <div className="flex items-center gap-8">
                      <Logo variant="curie" size="lg" theme="black" />
                      <Logo
                        variant="curie"
                        size="lg"
                        showText={false}
                        theme="black"
                      />
                      <Logo variant="supreme" size="lg" theme="black" />
                      <Logo
                        variant="supreme"
                        size="lg"
                        showText={false}
                        theme="black"
                      />
                    </div>
                    <div className="flex items-center gap-8">
                      <Logo variant="curie" size="lg" theme="white" />
                      <Logo
                        variant="curie"
                        size="lg"
                        showText={false}
                        theme="white"
                      />
                      <Logo variant="supreme" size="lg" theme="white" />
                      <Logo
                        variant="supreme"
                        size="lg"
                        showText={false}
                        theme="white"
                      />
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Badges */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Badges</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Badge Variants</ContentBoxTitle>
                    <ContentBoxDescription>
                      Status indicators and labels
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="default" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="foundation" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="red" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="orange" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="yellow" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="green" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="blue" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="indigo" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="purple" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="pink" dismissible dot>
                        Badge
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="default" dismissible dot>
                        Badge
                      </Badge>
                      <Badge variant="default">Badge</Badge>
                      <Badge variant="default" dot>
                        Badge
                      </Badge>
                      <Badge variant="default" dismissible>
                        Badge
                      </Badge>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Avatars */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Avatars</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Avatar Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      User profile images and fallbacks
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="space-y-8">
                    {/* Single Avatars */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Single Avatars</h3>

                      {/* Photo Row */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Photo
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="sm">
                              <AvatarImage
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                              />
                              <AvatarFallback>DA</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Small
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="md">
                              <AvatarImage
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                              />
                              <AvatarFallback>DA</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Mid
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="lg">
                              <AvatarImage
                                src="/assets/defaultAvatar.jpg"
                                alt="Default Avatar"
                              />
                              <AvatarFallback>DA</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Large
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Initials Row */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Initials
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="sm">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                AA
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Small
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="md">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                AA
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Mid
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <Avatar size="lg">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                AA
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              Large
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Group Avatars */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Group Avatars</h3>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Groups
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex -space-x-3">
                              {[...Array(5)].map((_, i) => (
                                <Avatar
                                  key={i}
                                  size="sm"
                                  className="border-2 border-background"
                                >
                                  <AvatarImage
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                  />
                                  <AvatarFallback>DA</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              Small
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex -space-x-4">
                              {[...Array(5)].map((_, i) => (
                                <Avatar
                                  key={i}
                                  size="md"
                                  className="border-2 border-background"
                                >
                                  <AvatarImage
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                  />
                                  <AvatarFallback>DA</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              Mid
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex -space-x-5">
                              {[...Array(5)].map((_, i) => (
                                <Avatar
                                  key={i}
                                  size="lg"
                                  className="border-2 border-background"
                                >
                                  <AvatarImage
                                    src="/assets/defaultAvatar.jpg"
                                    alt="Default Avatar"
                                  />
                                  <AvatarFallback>DA</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              Large
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ContentBoxContent>
                </ContentBox>
              </section>
              {/* Tooltip */}
              <section className="space-y-2">
                <h2 className="text-3xl font-semibold">Tooltip</h2>
                <ContentBox>
                  <ContentBoxHeader>
                    <ContentBoxTitle>Tooltip Component</ContentBoxTitle>
                    <ContentBoxDescription>
                      Tooltip component for displaying content in a collapsible
                      format
                    </ContentBoxDescription>
                  </ContentBoxHeader>
                  <ContentBoxContent className="flex gap-4">
                    <Tooltip>
                      <TooltipTrigger>Top</TooltipTrigger>
                      <TooltipContent arrowDirection="top">
                        Add to library
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>Bottom</TooltipTrigger>
                      <TooltipContent arrowDirection="bottom">
                        Add to library
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>Left</TooltipTrigger>
                      <TooltipContent arrowDirection="left">
                        Add to library
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>Right</TooltipTrigger>
                      <TooltipContent arrowDirection="right">
                        Add to library
                      </TooltipContent>
                    </Tooltip>
                  </ContentBoxContent>
                </ContentBox>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Components;
