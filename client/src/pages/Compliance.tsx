import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, FileText, Shield } from "lucide-react";

export default function Compliance() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Regulatory & Compliance</h1>
          <p className="text-muted-foreground mt-1">Comprehensive regulatory management and quality assurance</p>
        </div>

        {/* Compliance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Compliance Score</p>
                  <p className="text-3xl font-bold text-chart-1">97/100</p>
                </div>
                <Shield className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Submissions</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-3xl font-bold">2</p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regulatory Submissions */}
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Submission Tracking</CardTitle>
            <CardDescription>FDA/EMA approval status and timeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "FDA-2024-001", type: "IND Application", status: "Under Review", progress: 85, agency: "FDA", date: "Phase 2" },
                { id: "EMA-2024-002", type: "CTA Submission", status: "Under Review", progress: 60, agency: "EMA", date: "Phase 1" },
                { id: "FDA-2023-045", type: "BLA Approval", status: "Approved", progress: 100, agency: "FDA", date: "Approved" },
              ].map((submission) => (
                <div key={submission.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{submission.id}</h4>
                        <Badge variant="secondary">{submission.agency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{submission.type} • {submission.date}</p>
                    </div>
                    <Badge variant={submission.status === "Approved" ? "default" : "secondary"}>
                      {submission.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{submission.progress}%</span>
                    </div>
                    <Progress value={submission.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blockchain Tracking & Reporting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Data Integrity</CardTitle>
              <CardDescription>Blockchain-based verification and tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-chart-1/10 border border-chart-1/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-chart-1/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-chart-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Verification</h4>
                    <p className="text-sm text-muted-foreground">Block #2345 (Verified 10:03 AM)</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Immutable Record:</span>
                    <span className="font-medium">Patient ID 12345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Audit Trail:</span>
                    <span className="font-medium">Confirmed by Node B</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Total Blocks</p>
                  <p className="text-2xl font-bold">2,345</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Verified Records</p>
                  <p className="text-2xl font-bold">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regulatory Reporting Automation</CardTitle>
              <CardDescription>Standardized templates and submission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { template: "510(k) Submission (Ready)", status: "Ready" },
                { template: "EMA Post Market Report (In Progress)", status: "In Progress" },
              ].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{report.template}</span>
                  </div>
                  <Badge variant={report.status === "Ready" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                Generate New Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Training & Compliance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Training Management</CardTitle>
              <CardDescription>Regulatory requirements and certifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 text-muted-foreground font-medium">Module</th>
                        <th className="text-center p-2 text-muted-foreground font-medium">Completed</th>
                        <th className="text-center p-2 text-muted-foreground font-medium">Due Date</th>
                        <th className="text-center p-2 text-muted-foreground font-medium">Employee ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { module: "Regulatory Requirements Training", completed: "90%", date: "05/01/24", id: "E-567" },
                        { module: "GMP Compliance", completed: "85%", date: "05/15/24", id: "E-568" },
                        { module: "Data Integrity", completed: "95%", date: "04/30/24", id: "E-569" },
                      ].map((training, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-2">{training.module}</td>
                          <td className="p-2 text-center font-medium">{training.completed}</td>
                          <td className="p-2 text-center text-muted-foreground">{training.date}</td>
                          <td className="p-2 text-center text-muted-foreground">{training.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Metrics Dashboard</CardTitle>
              <CardDescription>Real-time compliance monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">GMP Compliance</span>
                  <span className="text-sm font-semibold text-chart-1">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">FDA Requirements</span>
                  <span className="text-sm font-semibold text-chart-1">98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">ISO 13485</span>
                  <span className="text-sm font-semibold text-chart-1">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">EMA Guidelines</span>
                  <span className="text-sm font-semibold text-chart-1">97%</span>
                </div>
                <Progress value={97} className="h-2" />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                  <CheckCircle2 className="w-5 h-5 text-chart-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">All Systems Compliant</p>
                    <p className="text-xs text-muted-foreground">Last audit: 2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspection Readiness */}
        <Card>
          <CardHeader>
            <CardTitle>Inspection Readiness Dashboard</CardTitle>
            <CardDescription>Comprehensive compliance scores and readiness metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-5xl font-bold text-chart-1 mb-2">97/100</div>
                <p className="text-sm text-muted-foreground">Overall Compliance Score</p>
                <Badge className="mt-3">Ready for Inspection</Badge>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Readiness Metrics</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <span className="text-sm">Documentation</span>
                    <span className="text-sm font-semibold text-chart-1">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <span className="text-sm">Facilities</span>
                    <span className="text-sm font-semibold text-chart-1">88%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <span className="text-sm">Training</span>
                    <span className="text-sm font-semibold text-chart-1">92%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Action Items</h4>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <p className="text-sm font-medium">2 Minor Deviations</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Requires attention before inspection</p>
                  <Button size="sm" className="w-full">View Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
