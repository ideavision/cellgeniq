import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, FileCheck, Shield, AlertTriangle, XCircle, User } from "lucide-react";

export default function QualityAssurance() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quality Assurance (QA)</h1>
          <p className="text-muted-foreground mt-1">Final review and release decision management</p>
        </div>

        {/* QA Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-3xl font-bold text-chart-1">24</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approval Rate</p>
                  <p className="text-3xl font-bold">96%</p>
                </div>
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Review Time</p>
                  <p className="text-3xl font-bold">2.3h</p>
                </div>
                <FileCheck className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Batch Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Batch Release Reviews</CardTitle>
            <CardDescription>Final quality assurance review and release decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  batch: "BATCH-202403003", 
                  patient: "Patient-4", 
                  status: "pending", 
                  reviewer: "Unassigned",
                  qcStatus: "All tests passed",
                  priority: "High"
                },
                { 
                  batch: "BATCH-202403002", 
                  patient: "Patient-2", 
                  status: "approved", 
                  reviewer: "Doctor-5",
                  qcStatus: "All tests passed",
                  approvalDate: "2 days ago"
                },
                { 
                  batch: "BATCH-202403001", 
                  patient: "Patient-1", 
                  status: "in_review", 
                  reviewer: "Doctor-5",
                  qcStatus: "All tests passed",
                  priority: "Medium"
                },
                { 
                  batch: "BATCH-202402028", 
                  patient: "Patient-6", 
                  status: "on_hold", 
                  reviewer: "Doctor-5",
                  qcStatus: "Minor deviation found",
                  priority: "High"
                },
              ].map((review, i) => (
                <div key={i} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        review.status === "approved" ? "bg-chart-1/10" :
                        review.status === "pending" ? "bg-yellow-500/10" :
                        review.status === "on_hold" ? "bg-destructive/10" :
                        "bg-primary/10"
                      }`}>
                        {review.status === "approved" && <CheckCircle2 className="w-6 h-6 text-chart-1" />}
                        {review.status === "pending" && <Clock className="w-6 h-6 text-yellow-500" />}
                        {review.status === "on_hold" && <AlertTriangle className="w-6 h-6 text-destructive" />}
                        {review.status === "in_review" && <FileCheck className="w-6 h-6 text-primary" />}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.batch}</h4>
                        <p className="text-sm text-muted-foreground">Patient: {review.patient}</p>
                        <p className="text-xs text-muted-foreground mt-1">QC: {review.qcStatus}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge variant={
                        review.status === "approved" ? "default" :
                        review.status === "pending" ? "secondary" :
                        review.status === "on_hold" ? "destructive" :
                        "outline"
                      }>
                        {review.status === "approved" ? "Approved" :
                         review.status === "pending" ? "Pending" :
                         review.status === "on_hold" ? "On Hold" :
                         "In Review"}
                      </Badge>
                      {review.priority && (
                        <Badge variant={review.priority === "High" ? "destructive" : "secondary"} className="ml-2">
                          {review.priority} Priority
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>Reviewer: {review.reviewer}</span>
                      {review.approvalDate && <span>• {review.approvalDate}</span>}
                    </div>
                    <Button size="sm" variant={review.status === "pending" ? "default" : "outline"}>
                      {review.status === "pending" ? "Start Review" : "View Details"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Review - BATCH-202403001 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Batch Review: BATCH-202403001</CardTitle>
                <CardDescription>Patient: Patient-1 | Product: CAR-T</CardDescription>
              </div>
              <Badge>In Review</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="checklist" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="checklist">Review Checklist</TabsTrigger>
                <TabsTrigger value="qc">QC Results</TabsTrigger>
                <TabsTrigger value="deviations">Deviations</TabsTrigger>
                <TabsTrigger value="decision">Decision</TabsTrigger>
              </TabsList>

              <TabsContent value="checklist" className="space-y-4">
                <div className="space-y-3">
                  {[
                    { item: "Batch record complete and accurate", status: "verified" },
                    { item: "All QC tests passed", status: "verified" },
                    { item: "Equipment calibration current", status: "verified" },
                    { item: "Environmental monitoring acceptable", status: "verified" },
                    { item: "Personnel training current", status: "verified" },
                    { item: "Deviations reviewed and closed", status: "pending" },
                    { item: "Chain of custody documented", status: "verified" },
                    { item: "Label review completed", status: "pending" },
                  ].map((check, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${
                      check.status === "verified" ? "border-chart-1/30 bg-chart-1/5" :
                      check.status === "failed" ? "border-destructive/30 bg-destructive/5" :
                      "border-border bg-muted/30"
                    }`}>
                      <div className="flex items-center gap-3">
                        {check.status === "verified" && <CheckCircle2 className="w-5 h-5 text-chart-1" />}
                        {check.status === "failed" && <XCircle className="w-5 h-5 text-destructive" />}
                        {check.status === "pending" && <Clock className="w-5 h-5 text-yellow-500" />}
                        <span className="text-sm font-medium">{check.item}</span>
                      </div>
                      <Badge variant={
                        check.status === "verified" ? "default" :
                        check.status === "failed" ? "destructive" :
                        "secondary"
                      }>
                        {check.status === "verified" ? "Verified" :
                         check.status === "failed" ? "Failed" :
                         "Pending"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="qc" className="space-y-4">
                <div className="space-y-3">
                  {[
                    { test: "Sterility Test", result: "Passed", value: "No growth detected", criteria: "No growth after 14 days" },
                    { test: "Viability Assay", result: "Passed", value: "96.5%", criteria: "≥ 70%" },
                    { test: "Endotoxin Test", result: "Passed", value: "0.25 EU/mL", criteria: "< 5 EU/mL" },
                    { test: "Potency Assay", result: "Passed", value: "85% cytotoxicity", criteria: "≥ 20%" },
                    { test: "Identity Test", result: "Passed", value: "CD3+ CD19-CAR+", criteria: "Positive for CAR expression" },
                    { test: "Mycoplasma Test", result: "Passed", value: "Negative", criteria: "Negative" },
                  ].map((test, i) => (
                    <div key={i} className="p-3 rounded-lg border border-chart-1/30 bg-chart-1/5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-chart-1" />
                          <span className="font-medium text-sm">{test.test}</span>
                        </div>
                        <Badge variant="default">{test.result}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground ml-7">
                        <div>
                          <p className="font-medium">Result:</p>
                          <p>{test.value}</p>
                        </div>
                        <div>
                          <p className="font-medium">Acceptance Criteria:</p>
                          <p>{test.criteria}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="deviations" className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">DEV-2024-015: Temperature Excursion</h4>
                          <p className="text-xs text-muted-foreground mt-1">Reported: 3 days ago</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Minor</Badge>
                    </div>
                    <div className="ml-8 space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-muted-foreground">Description:</p>
                        <p>Incubator temperature briefly exceeded 37.5°C for 15 minutes during expansion phase.</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Root Cause:</p>
                        <p>Temporary HVAC malfunction in manufacturing suite.</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Corrective Action:</p>
                        <p>HVAC system repaired. Additional temperature monitoring implemented. Cell viability assessed and found acceptable (98.2%).</p>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Badge variant="default">Resolved</Badge>
                        <span className="text-xs text-muted-foreground">Reviewed by: QA Manager</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-border bg-muted/30 text-center text-sm text-muted-foreground">
                    No other deviations reported for this batch
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="decision" className="space-y-4">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Release Decision</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-muted/30">
                          <p className="text-sm text-muted-foreground mb-1">Checklist Completion</p>
                          <div className="flex items-center gap-2">
                            <Progress value={75} className="h-2 flex-1" />
                            <span className="text-sm font-semibold">6/8</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/30">
                          <p className="text-sm text-muted-foreground mb-1">QC Tests</p>
                          <div className="flex items-center gap-2">
                            <Progress value={100} className="h-2 flex-1" />
                            <span className="text-sm font-semibold text-chart-1">6/6</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-border">
                        <label className="text-sm font-medium mb-2 block">QA Comments</label>
                        <textarea 
                          className="w-full p-3 rounded-lg border border-border bg-background resize-none"
                          rows={4}
                          placeholder="Enter review comments and justification for release decision..."
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-chart-1 hover:bg-chart-1/90">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Approve for Release
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Place on Hold
                        </Button>
                        <Button variant="destructive" className="flex-1">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject Batch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Release History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Release History</CardTitle>
            <CardDescription>Approved batches ready for patient administration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { batch: "BATCH-202403002", patient: "Patient-2", releaseDate: "2 days ago", reviewer: "Doctor-5" },
                { batch: "BATCH-202402028", patient: "Patient-6", releaseDate: "5 days ago", reviewer: "Doctor-5" },
                { batch: "BATCH-202402025", patient: "Patient-7", releaseDate: "1 week ago", reviewer: "Doctor-6" },
              ].map((release, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-chart-1/30 bg-chart-1/5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-1" />
                    <div>
                      <p className="font-medium text-sm">{release.batch}</p>
                      <p className="text-xs text-muted-foreground">Patient: {release.patient} • Released: {release.releaseDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">Released</Badge>
                    <p className="text-xs text-muted-foreground mt-1">By: {release.reviewer}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
