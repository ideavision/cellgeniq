import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, ArrowRight, User, Package, Beaker, ShieldCheck, Syringe } from "lucide-react";

export default function Workflow() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Workflow Overview</h1>
          <p className="text-muted-foreground mt-1">End-to-end cell therapy manufacturing process</p>
        </div>

        {/* Workflow Stages */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Workflow Pipeline</CardTitle>
            <CardDescription>From patient intake to infusion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {/* Stage 1: Patient Intake */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-chart-1 flex items-center justify-center z-10 ring-4 ring-background">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">1. Patient Intake</h3>
                      <Badge variant="default">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Doctor contacts patient and enters necessary information into the system
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Patient Info</p>
                        <p className="font-medium">Patient-1</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Diagnosis</p>
                        <p className="font-medium">Multiple Myeloma</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Physician</p>
                        <p className="font-medium">Doctor-1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 2: Leukapheresis */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-chart-1 flex items-center justify-center z-10 ring-4 ring-background">
                    <Syringe className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">2. Leukapheresis Process</h3>
                      <Badge variant="default">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Cells are collected from patient and prepared for transport to manufacturing facility
                    </p>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Collection Date</p>
                        <p className="font-medium">Mar 15, 2024</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Volume</p>
                        <p className="font-medium">250 mL</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Cell Count</p>
                        <p className="font-medium">2.5 × 10⁹</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Viability</p>
                        <p className="font-medium">98.5%</p>
                      </div>
                    </div>
                    <div className="mt-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                      <div className="flex items-center gap-2 text-sm">
                        <Package className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Transport:</span>
                        <span className="text-muted-foreground">MedEx Logistics • Tracking: MEX-2024-001 • Temp: 4.2°C</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Manufacturing */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10 ring-4 ring-primary/20 ring-offset-4 ring-offset-background animate-pulse">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">3. Manufacturing (EBR)</h3>
                      <Badge>In Progress - Expansion</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Batch is processed, expanded, and monitored with real-time data tracking
                    </p>
                    
                    {/* Sub-stages */}
                    <div className="space-y-3 mb-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                        <CheckCircle2 className="w-5 h-5 text-chart-1" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">Reception</p>
                          <p className="text-xs text-muted-foreground">Received Mar 16 • Initial viability: 98.5%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                        <CheckCircle2 className="w-5 h-5 text-chart-1" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">Processing</p>
                          <p className="text-xs text-muted-foreground">T-cell isolation completed • Method: Magnetic bead selection</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <Clock className="w-5 h-5 text-primary animate-pulse" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">Expansion (Current)</p>
                          <p className="text-xs text-muted-foreground">Cell count: 3.8 × 10⁹ / Target: 5.0 × 10⁹ • Passage 3</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium text-sm text-muted-foreground">Harvesting</p>
                          <p className="text-xs text-muted-foreground">Pending</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium text-sm text-muted-foreground">Formulation</p>
                          <p className="text-xs text-muted-foreground">Pending</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Batch Number</p>
                        <p className="font-medium">BATCH-202403001</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Product Type</p>
                        <p className="font-medium">CAR-T</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Equipment</p>
                        <p className="font-medium">BR-001, INC-003</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4: Quality Control */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center z-10 ring-4 ring-background">
                    <Beaker className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-muted-foreground">4. Quality Control (QC)</h3>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Required testing performed and results documented
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Sterility Test</p>
                        <p className="font-medium text-muted-foreground">Scheduled</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Viability Assay</p>
                        <p className="font-medium text-muted-foreground">Scheduled</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Potency Test</p>
                        <p className="font-medium text-muted-foreground">Scheduled</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 5: Quality Assurance */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center z-10 ring-4 ring-background">
                    <ShieldCheck className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-muted-foreground">5. Quality Assurance (QA)</h3>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Final review and release decision
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Batch Record Review</p>
                        <p className="font-medium text-muted-foreground">Awaiting completion</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground mb-1">Release Decision</p>
                        <p className="font-medium text-muted-foreground">Pending QC results</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 6: Infusion */}
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center z-10 ring-4 ring-background">
                    <Syringe className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-muted-foreground">6. Patient Infusion</h3>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Product administered to patient
                    </p>
                    <div className="p-3 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground mb-1">Estimated Infusion Date</p>
                      <p className="font-medium text-muted-foreground">Pending QA approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Batches Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Patient Intake</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-chart-1">3</p>
                <p className="text-sm text-muted-foreground mt-1">Active patients</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground mt-1">Batches in production</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">QC/QA Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-600">1</p>
                <p className="text-sm text-muted-foreground mt-1">Pending review</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Navigate to key workflow stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <User className="w-6 h-6" />
                <span className="text-sm">Patient Management</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Package className="w-6 h-6" />
                <span className="text-sm">Manufacturing</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Beaker className="w-6 h-6" />
                <span className="text-sm">Quality Control</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-sm">Quality Assurance</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
