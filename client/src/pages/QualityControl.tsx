import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, FileCheck, Shield, XCircle } from "lucide-react";

export default function QualityControl() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quality Control & Assurance</h1>
          <p className="text-muted-foreground mt-1">Comprehensive quality management and regulatory compliance</p>
        </div>

        {/* QC Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Tests Passed</p>
                  <p className="text-3xl font-bold text-chart-1">156</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                  <p className="text-3xl font-bold">98.2%</p>
                </div>
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Failed</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Results */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Results</CardTitle>
            <CardDescription>Automated quality control testing outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { test: "Sterility Test", batch: "BATCH-2402", result: "Passed", time: "2 hours ago", color: "chart-1" },
                { test: "Viability Assay", batch: "BATCH-2401", result: "Passed", time: "4 hours ago", color: "chart-1" },
                { test: "Endotoxin Test", batch: "BATCH-2403", result: "Pending", time: "In progress", color: "yellow" },
                { test: "Potency Assay", batch: "BATCH-2400", result: "Passed", time: "1 day ago", color: "chart-1" },
                { test: "Identity Test", batch: "BATCH-2399", result: "Passed", time: "1 day ago", color: "chart-1" },
                { test: "Mycoplasma Test", batch: "BATCH-2398", result: "Failed", time: "2 days ago", color: "destructive" },
              ].map((test, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      test.result === "Passed" ? "bg-chart-1/10" :
                      test.result === "Pending" ? "bg-yellow-500/10" :
                      "bg-destructive/10"
                    }`}>
                      {test.result === "Passed" && <CheckCircle2 className="w-5 h-5 text-chart-1" />}
                      {test.result === "Pending" && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                      {test.result === "Failed" && <XCircle className="w-5 h-5 text-destructive" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{test.test}</h4>
                      <p className="text-xs text-muted-foreground">{test.batch} • {test.time}</p>
                    </div>
                  </div>
                  <Badge variant={
                    test.result === "Passed" ? "default" :
                    test.result === "Pending" ? "secondary" :
                    "destructive"
                  }>
                    {test.result}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Compliance Monitoring
              </CardTitle>
              <CardDescription>Automated regulatory checks and validation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
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
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                  <CheckCircle2 className="w-5 h-5 text-chart-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">24/24 Automated Checks Passed</p>
                    <p className="text-xs text-muted-foreground">Last audit: 2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Control</CardTitle>
              <CardDescription>Quality management system documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { doc: "SOP-101 v3.2 - Cell Processing", status: "Approved", date: "04/15/24" },
                { doc: "SOP-102 v2.1 - Quality Control", status: "Approved", date: "04/15/24" },
                { doc: "SOP-103 v1.5 - Equipment Maintenance", status: "Under Review", date: "04/14/24" },
                { doc: "Batch Record Template v4.0", status: "Approved", date: "04/12/24" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{doc.doc}</p>
                      <p className="text-xs text-muted-foreground">Updated: {doc.date}</p>
                    </div>
                  </div>
                  <Badge variant={doc.status === "Approved" ? "default" : "secondary"}>
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Audit Trail & Risk Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Complete traceability and change history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { action: "QC Test Completed", user: "User MJ", time: "2 hours ago", details: "BATCH-2402 Sterility Test" },
                  { action: "Document Updated", user: "User SK", time: "4 hours ago", details: "SOP-101 v3.2 approved" },
                  { action: "Equipment Calibrated", user: "Tech JL", time: "1 day ago", details: "Bioreactor BR-01" },
                  { action: "Batch Released", user: "QA Manager", time: "1 day ago", details: "BATCH-2400 approved for release" },
                ].map((entry, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">{entry.action}</p>
                        <span className="text-xs text-muted-foreground">{entry.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{entry.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">By: {entry.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Management (FMEA)</CardTitle>
              <CardDescription>Failure mode and effects analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 text-muted-foreground font-medium">Risk</th>
                        <th className="text-center p-2 text-muted-foreground font-medium">Severity</th>
                        <th className="text-center p-2 text-muted-foreground font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { risk: "Contamination", severity: "High", status: "Mitigated" },
                        { risk: "Equipment Failure", severity: "Medium", status: "Monitored" },
                        { risk: "Temperature Deviation", severity: "Low", status: "Controlled" },
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-2">{item.risk}</td>
                          <td className="p-2 text-center">
                            <Badge variant={
                              item.severity === "High" ? "destructive" :
                              item.severity === "Medium" ? "secondary" :
                              "default"
                            } className="text-xs">
                              {item.severity}
                            </Badge>
                          </td>
                          <td className="p-2 text-center">
                            <Badge variant="secondary" className="text-xs">{item.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-4">
                  <Button className="w-full" variant="outline">
                    View Full FMEA Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspection Readiness */}
        <Card>
          <CardHeader>
            <CardTitle>Inspection Readiness Dashboard</CardTitle>
            <CardDescription>Compliance scores and readiness metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Compliance Score</h4>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-5xl font-bold text-chart-1 mb-2">97/100</div>
                  <p className="text-sm text-muted-foreground">Ready for Inspection</p>
                </div>
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
                <h4 className="font-semibold text-sm">Next Steps</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-sm font-medium">2 Minor Deviations</p>
                    <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
                  </div>
                  <Button className="w-full" size="sm">
                    View Action Items
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
