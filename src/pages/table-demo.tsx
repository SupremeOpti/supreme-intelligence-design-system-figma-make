import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Filter, Globe } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCheckbox,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const TableDemo = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectedAuditRows, setSelectedAuditRows] = useState<Set<number>>(
    new Set()
  );

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

  // Sample data that matches the image
  const tableData = [
    {
      id: 1,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 2,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 3,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 4,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 5,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 6,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 7,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 8,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 9,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
    {
      id: 10,
      title: "Tempor suspendisse amet",
      subtitle: "At enim nisi commodo",
      column2: "Tempor suspendisse amet",
      column3: "Tempor suspendisse amet",
      badge: "Badge",
    },
  ];

  // Company audit data
  const auditData = [
    {
      id: 1,
      companyName: "Becton, Dickinson and Company (BD)",
      auditScore: "40",
      homepage: "0-10",
      about: "21-30",
      contact: "31-50",
      valueProp: "21-30",
      socialProof: "11-20",
      ctas: "0-10",
      revenue: "$100M-$250M",
      employeeSize: "10K-50K",
      market: "Consultants/Contract Research",
    },
    {
      id: 2,
      companyName: "Becton, Dickinson and Company (BD)",
      auditScore: "40",
      homepage: "11-20",
      about: "0-10",
      contact: "11-20",
      valueProp: "0-10",
      socialProof: "31-50",
      ctas: "21-30",
      revenue: "$100M-$250M",
      employeeSize: "10K-50K",
      market: "Consultants/Contract Research",
    },
    {
      id: 3,
      companyName: "Becton, Dickinson and Company (BD)",
      auditScore: "40",
      homepage: "0-10",
      about: "31-50",
      contact: "0-10",
      valueProp: "0-10",
      socialProof: "0-10",
      ctas: "31-50",
      revenue: "$100M-$250M",
      employeeSize: "10K-50K",
      market: "Consultants/Contract Research",
    },
  ];

  // Handle header checkbox for main table
  const handleHeaderCheckbox = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  // Handle individual row checkbox for main table
  const handleRowCheckbox = (rowId: number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
  };

  // Handle header checkbox for audit table
  const handleAuditHeaderCheckbox = (checked: boolean) => {
    if (checked) {
      setSelectedAuditRows(new Set(auditData.map((row) => row.id)));
    } else {
      setSelectedAuditRows(new Set());
    }
  };

  // Handle individual row checkbox for audit table
  const handleAuditRowCheckbox = (rowId: number, checked: boolean) => {
    const newSelected = new Set(selectedAuditRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedAuditRows(newSelected);
  };

  // Get color for score ranges using design system colors
  const getScoreColor = (score: string) => {
    const range = score.split("-");
    const min = parseInt(range[0]);
    const max = parseInt(range[1]);
    const avg = (min + max) / 2;

    if (avg <= 15) return "bg-red-500/20 text-red-900 border-red-500/20";
    if (avg <= 25)
      return "bg-yellow-500/20 text-yellow-900 border-yellow-500/20";
    return "bg-green-500/20 text-green-900 border-green-500/20";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/components"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Components
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold">Table Component</h1>
            <p className="text-muted-foreground mt-2">
              Table component matching the design specification
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Original Table Demo */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Basic Table Demo</h2>

            {/* Top Controls/Filters */}
            <div className="flex items-center justify-between bg-white">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-2 w-full">
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    Link Action
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="md">
                    Link Action
                  </Button>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Link Action
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    Link Action
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>99</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="w-12 px-4 py-3 text-left font-medium text-gray-900">
                      <TableCheckbox
                        checked={
                          selectedRows.size === tableData.length &&
                          tableData.length > 0
                        }
                        onChange={(e) => handleHeaderCheckbox(e.target.checked)}
                      />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900">
                      Title of the Table
                      <ChevronDown className="h-4 w-4 inline ml-1" />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900">
                      Title of the Table
                      <ChevronDown className="h-4 w-4 inline ml-1" />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900">
                      Title of the Table
                      <ChevronDown className="h-4 w-4 inline ml-1" />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900">
                      Title of the Table
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow
                      key={row.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <TableCell className="px-4 py-3">
                        <TableCheckbox
                          checked={selectedRows.has(row.id)}
                          onChange={(e) =>
                            handleRowCheckbox(row.id, e.target.checked)
                          }
                        />
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <div>
                          <div className="font-medium text-gray-900">
                            {row.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {row.subtitle}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-900">
                        {row.column2}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-900">
                        {row.column3}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Badge
                          variant="default"
                          className="bg-gray-100 text-gray-800 border-gray-200"
                        >
                          {row.badge}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="secondary"
                            size="md"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Link Action
                          </Button>
                          <Button
                            variant="primary"
                            size="md"
                            className="bg-gray-900 text-white hover:bg-gray-800"
                          >
                            Link Action
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing 41 to 50 of 100 results
              </div>
              <div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
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
                      <PaginationLink href="#" isActive>
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
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
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>

          {/* Company Audit Table */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Company Audit Table</h2>
            <p className="text-muted-foreground">
              Website audit scores and company information with color-coded
              scoring system
            </p>

            {/* Table */}
            <div className="border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      COMPANY NAME
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      AUDIT SCORE
                      <ChevronDown className="h-4 w-4 inline ml-1" />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      HOMEPAGE
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      ABOUT
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      CONTACT
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      VALUE PROP
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      SOCIAL PROOF
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      CTAS
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      REVENUE
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      EMPLOYEE SIZE
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                      MARKET
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditData.map((row) => (
                    <TableRow
                      key={row.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <TableCell className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-900" />
                          <span className="text-blue-600 font-medium">
                            {row.companyName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 whitespace-nowrap text-center">
                        <div className="inline-block px-3 py-1 rounded-md border text-sm font-medium bg-green-500/20 text-green-900 border-green-500/20">
                          {row.auditScore}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.homepage
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.homepage}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.about
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.about}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.contact
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.contact}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.valueProp
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.valueProp}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.socialProof
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.socialProof}
                        </div>
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 whitespace-nowrap text-center ${getScoreColor(
                          row.ctas
                        )}`}
                      >
                        <div className="inline-block px-3 py-1 text-sm font-medium">
                          {row.ctas}
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-900 whitespace-nowrap">
                        {row.revenue}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-900 whitespace-nowrap">
                        {row.employeeSize}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-900 whitespace-nowrap">
                        {row.market}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDemo;
