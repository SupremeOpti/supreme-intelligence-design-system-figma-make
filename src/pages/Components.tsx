import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleDemo } from "@/pages/toggle-demo";
import { Logo } from "@/components/ui/logo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
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

const Components = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button asChild variant="secondary" size="md">
              <Link to="/design-tokens">
                Design Tokens
              </Link>
            </Button>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Design System Components</h1>
            <p className="text-xl text-muted-foreground">A showcase of all available components</p>
          </div>
        </div>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Buttons</h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Matrix</CardTitle>
              <CardDescription>Comprehensive button variants, sizes, and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Button States Matrix */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Button States & Variants</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Size</th>
                        <th className="text-center p-3 font-medium">Primary</th>
                        <th className="text-center p-3 font-medium">Primary Stroke</th>
                        <th className="text-center p-3 font-medium">Secondary</th>
                        <th className="text-center p-3 font-medium">Secondary Color</th>
                        <th className="text-center p-3 font-medium">Link</th>
                        <th className="text-center p-3 font-medium">Icon Only</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Large</td>
                        <td className="p-3 text-center">
                          <Button variant="primary" size="lg" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="primary-stroke" size="lg" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary" size="lg" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary-color" size="lg" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="link" size="lg" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button size="icon" showIcons="center"></Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Medium</td>
                        <td className="p-3 text-center">
                          <Button variant="primary" size="md" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="primary-stroke" size="md" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary" size="md" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary-color" size="md" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="link" size="md" showIcons="both">Button</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button size="icon-sm" showIcons="center"></Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Persona */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Persona</h2>
          <Card>
            <CardHeader>
              <CardTitle>Persona Component</CardTitle>
              <CardDescription>User profile images and fallbacks</CardDescription>
            </CardHeader>
            <CardContent>
              <Persona variant="default" showLeftIcon showRightIcon personas={["John Doe", "Jane Smith"]} />
            </CardContent>
          </Card>
        </section>

        {/* Logo */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Logo</h2>
          <Card>
            <CardHeader>
              <CardTitle>Brand Logos</CardTitle>
              <CardDescription>Different logo variants and themes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 bg-slate-400 p-8 rounded-lg">
              <div className="flex items-center gap-8">
                <Logo variant="curie" size="lg" />
                <Logo variant="curie" size="lg" showText={false} />
                <Logo variant="supreme" size="lg" />
                <Logo variant="supreme" size="lg" showText={false} />
              </div>
              <div className="flex items-center gap-8">
                <Logo variant="curie" size="lg" theme="black" />
                <Logo variant="curie" size="lg" showText={false} theme="black" />
                <Logo variant="supreme" size="lg" theme="black" />
                <Logo variant="supreme" size="lg" showText={false} theme="black" />
              </div>
              <div className="flex items-center gap-8">
                <Logo variant="curie" size="lg" theme="white" />
                <Logo variant="curie" size="lg" showText={false} theme="white" />
                <Logo variant="supreme" size="lg" theme="white" />
                <Logo variant="supreme" size="lg" showText={false} theme="white" />
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Badges */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Badges</h2>
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge variant="default" dismissible dot>Badge</Badge>
                <Badge variant="foundation" dismissible dot>Badge</Badge>
                <Badge variant="red" dismissible dot>Badge</Badge>
                <Badge variant="orange" dismissible dot>Badge</Badge>
                <Badge variant="yellow" dismissible dot>Badge</Badge>
                <Badge variant="green" dismissible dot>Badge</Badge>
                <Badge variant="blue" dismissible dot>Badge</Badge>
                <Badge variant="indigo" dismissible dot>Badge</Badge>
                <Badge variant="purple" dismissible dot>Badge</Badge>
                <Badge variant="pink" dismissible dot>Badge</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Avatars */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Avatars</h2>
          <Card>
            <CardHeader>
              <CardTitle>Avatar Component</CardTitle>
              <CardDescription>User profile images and fallbacks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Single Avatars */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Single Avatars</h3>

                {/* Photo Row */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Photo</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                        <AvatarFallback>DA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                        <AvatarFallback>DA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Mid</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                        <AvatarFallback>DA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Large</span>
                    </div>
                  </div>
                </div>

                {/* Initials Row */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Initials</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">AA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">AA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Mid</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-primary-foreground">AA</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Large</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Avatars */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Group Avatars</h3>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Groups</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex -space-x-3">
                        {[...Array(5)].map((_, i) => (
                          <Avatar key={i} className="h-8 w-8 border-2 border-background">
                            <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                            <AvatarFallback>DA</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex -space-x-4">
                        {[...Array(5)].map((_, i) => (
                          <Avatar key={i} className="h-12 w-12 border-2 border-background">
                            <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                            <AvatarFallback>DA</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Mid</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex -space-x-5">
                        {[...Array(5)].map((_, i) => (
                          <Avatar key={i} className="h-16 w-16 border-2 border-background">
                            <AvatarImage src="/assets/defaultAvatar.jpg" alt="Default Avatar" />
                            <AvatarFallback>DA</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Large</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Icons */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Icons</h2>
          <Card>
            <CardHeader>
              <CardTitle>Custom Icons</CardTitle>
              <CardDescription>Rules:
                Only use the Outline style of Heroicons to ensure consistency across all interfaces.
                All icons should use a 1.5px stroke weight to align with our visual standards.
                Then Custom Icons should be used for any icons that are not part of the Heroicons library.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
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
            </CardContent>
          </Card>
        </section>

        {/* Progress */}
        {/* <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Progress</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Bars</CardTitle>
              <CardDescription>Loading and completion indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={33} />
              <Progress value={66} showValue />
              <Progress value={85} size="lg" showValue />
            </CardContent>
          </Card>
        </section> */}

        {/* Alerts */}
        {/* <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Alerts</h2>
          <Card>
            <CardHeader>
              <CardTitle>Alert Messages</CardTitle>
              <CardDescription>Information and warning messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section> */}

        {/* Toggle */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Toggle</h2>
          <Card>
            <CardHeader>
              <CardTitle>Toggle & Checkbox</CardTitle>
              <CardDescription>On/off state controls with different states and sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleDemo />
            </CardContent>
          </Card>
        </section>
        {/* Toast */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Toast</h2>
          <Card>
            <CardHeader>
              <CardTitle>Toast Component</CardTitle>
              <CardDescription>Toast messages for user feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ToastDemo />
            </CardContent>
          </Card>
        </section>

        {/* Accordion */}
        {/* <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Accordion</h2>
          <Card>
            <CardHeader>
              <CardTitle>Collapsible Content</CardTitle>
              <CardDescription>Expandable content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other components.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section> */}

        {/* Table */}
        {/* <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Table</h2>
          <Card>
            <CardHeader>
              <CardTitle>Data Tables</CardTitle>
              <CardDescription>Structured data display</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell><Badge variant="blue">Active</Badge></TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Button variant="secondary" size="md">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell><Badge variant="foundation">Inactive</Badge></TableCell>
                    <TableCell>User</TableCell>
                    <TableCell className="text-right">
                      <Button variant="secondary" size="md">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section> */}

        {/* Navigation */}
        {/* <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Navigation</h2>
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumbs & Pagination</CardTitle>
              <CardDescription>Navigation components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
        </section> */}
      </div>
    </div>
  );
};

export default Components;