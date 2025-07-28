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
import { Toggle } from "@/components/ui/toggle";
import { Logo } from "@/components/ui/logo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AlertTriangle, Check, Home, Star, Bold, Calendar } from "lucide-react";

const Components = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Design System Components</h1>
          <p className="text-xl text-muted-foreground">A showcase of all available components</p>
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
                        <th className="text-center p-3 font-medium">Secondary</th>
                        <th className="text-center p-3 font-medium">Outline</th>
                        <th className="text-center p-3 font-medium">Ghost</th>
                        <th className="text-center p-3 font-medium">Link</th>
                        <th className="text-center p-3 font-medium">Destructive</th>
                        <th className="text-center p-3 font-medium">Icon Only</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Large</td>
                        <td className="p-3 text-center">
                          <Button size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary" size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="outline" size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="ghost" size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="link" size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="destructive" size="lg">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button size="icon-lg"><Star className="h-5 w-5" /></Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Medium</td>
                        <td className="p-3 text-center">
                          <Button>+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="secondary">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="outline">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="ghost">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="link">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="destructive">+ Button +</Button>
                        </td>
                        <td className="p-3 text-center">
                          <Button size="icon"><Star className="h-4 w-4" /></Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Special Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Special Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button disabled>Disabled</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              {/* Button with Icons */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Buttons with Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button><Star className="mr-2 h-4 w-4" />Starred</Button>
                  <Button variant="outline"><Check className="mr-2 h-4 w-4" />Checked</Button>
                  <Button variant="secondary">Download<Star className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Form Components</h2>
          <Card>
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>Text inputs, checkboxes, and form controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
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
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
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
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>XY</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress */}
        <section className="space-y-6">
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
        </section>

        {/* Alerts */}
        <section className="space-y-6">
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
        </section>

        {/* Toggle */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Toggle</h2>
          <Card>
            <CardHeader>
              <CardTitle>Toggle Buttons</CardTitle>
              <CardDescription>On/off state controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Toggle aria-label="Toggle italic">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle calendar">
                  <Calendar className="h-4 w-4" />
                </Toggle>
              </div>
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
            <CardContent className="space-y-4">
              <div className="flex items-center gap-8">
                <Logo variant="curie" showText />
                <Logo variant="supreme" showText />
              </div>
              <div className="flex items-center gap-8">
                <Logo variant="curie" size="lg" />
                <Logo variant="supreme" size="lg" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accordion */}
        <section className="space-y-6">
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
        </section>

        {/* Table */}
        <section className="space-y-6">
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
                    <TableCell><Badge variant="success">Active</Badge></TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                    <TableCell>User</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="space-y-6">
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
        </section>
      </div>
    </div>
  );
};

export default Components;