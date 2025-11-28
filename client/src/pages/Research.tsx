import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, FlaskConical, TrendingUp, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const enrollmentData = [
  { study: "CGQ-ONC-2401", enrolled: 45, target: 50 },
  { study: "CGQ-ONC-2402", enrolled: 38, target: 50 },
  { study: "CGQ-ONC-2404", enrolled: 22, target: 50 },
];

export default function Research() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Research Laboratory</h1>
          <p className="text-muted-foreground mt-1">Academic and clinical research management platform</p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Studies</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <FlaskConical className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Enrollment</p>
                  <p className="text-3xl font-bold">245</p>
                </div>
                <Users className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Publications</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <FileText className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-3xl font-bold text-chart-1">78%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ongoing Studies */}
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Clinical Studies</CardTitle>
            <CardDescription>Research project management and tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "CGQ-ONC-2401", title: "CAR-T Therapy for B-cell Lymphoma", phase: "Phase 2", progress: 85, status: "Active" },
                { id: "CGQ-ONC-2402", title: "TCR-T Therapy for Solid Tumors", phase: "Phase 1", progress: 60, status: "Active" },
                { id: "CGQ-ONC-2404", title: "NK Cell Therapy for Leukemia", phase: "Phase 2", progress: 40, status: "Recruiting" },
              ].map((study) => (
                <div key={study.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{study.id}</h4>
                        <Badge variant="secondary">{study.phase}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.title}</p>
                    </div>
                    <Badge variant={study.status === "Active" ? "default" : "secondary"}>
                      {study.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{study.progress}%</span>
                    </div>
                    <Progress value={study.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patient Enrollment & Data Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Enrollment Tracking</CardTitle>
              <CardDescription>Clinical trial enrollment progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="study" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar dataKey="enrolled" fill="hsl(var(--primary))" name="Enrolled" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" fill="hsl(var(--muted))" name="Target" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Analysis Workspace</CardTitle>
              <CardDescription>Statistical tools and visualizations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["Regression Analysis", "PCA", "SET", "Target Analysis"].map((tool) => (
                  <Button key={tool} variant="outline" className="h-20">
                    <div className="text-center">
                      <FlaskConical className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-xs">{tool}</p>
                    </div>
                  </Button>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <h4 className="font-semibold text-sm mb-2">Recent Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Survival analysis for CGQ-ONC-2401 showing 78% response rate at 6 months
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collaboration & Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Collaboration Hub</CardTitle>
              <CardDescription>Multi-institutional research teams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Institute for Cancer Research", role: "Primary Site", members: 7 },
                { name: "City General Hospital", role: "Collaborating Site", members: 5 },
                { name: "University Medical Center", role: "Data Analysis", members: 3 },
              ].map((inst, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-sm">{inst.name}</p>
                    <p className="text-xs text-muted-foreground">{inst.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{inst.members}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publication Management</CardTitle>
              <CardDescription>Manuscripts and regulatory submissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "Manuscript 31", status: "Regulatory", journal: "Nature Medicine" },
                { title: "Manuscript 12", status: "Regulatory", journal: "Cell Therapy Journal" },
                { title: "Manuscript 33", status: "Regulatory", journal: "Journal of Immunotherapy" },
              ].map((pub, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{pub.title}</p>
                      <p className="text-xs text-muted-foreground">{pub.journal}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{pub.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Genomic Data & Protocol Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Genomic Data Visualization</CardTitle>
              <CardDescription>Biomarker discovery and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-chart-1/10 flex items-center justify-center border border-border mb-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <FlaskConical className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Genomic Heatmap Visualization</p>
                  <Badge variant="secondary" className="mt-2">Interactive</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Genes Analyzed</p>
                  <p className="text-lg font-semibold">2,847</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Biomarkers Found</p>
                  <p className="text-lg font-semibold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Protocol Builder</CardTitle>
              <CardDescription>AI-optimized protocol flowchart</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { step: "Screening", status: "Complete" },
                  { step: "Randomization", status: "Complete" },
                  { step: "AI-optimized protocol", status: "In Progress" },
                  { step: "Follow-up", status: "Pending" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "Complete" ? "bg-chart-1" :
                      step.status === "In Progress" ? "bg-primary" :
                      "bg-muted"
                    }`}>
                      <span className="text-white text-xs font-semibold">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{step.step}</p>
                      <p className="text-xs text-muted-foreground">{step.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Full Protocol
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
