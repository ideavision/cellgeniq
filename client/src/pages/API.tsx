import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Code, Database, Zap } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const apiUsageData = [
  { month: "Jan", requests: 12000 },
  { month: "Feb", requests: 15000 },
  { month: "Mar", requests: 18000 },
  { month: "Apr", requests: 22000 },
  { month: "May", requests: 25000 },
  { month: "Jun", requests: 28000 },
];

export default function API() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">API Integration Platform</h1>
          <p className="text-muted-foreground mt-1">Developer portal for seamless system integration</p>
        </div>

        {/* API Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">API Calls (Month)</p>
                  <p className="text-3xl font-bold">28K</p>
                </div>
                <Activity className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                  <p className="text-3xl font-bold text-chart-1">99.9%</p>
                </div>
                <Zap className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Integrations</p>
                  <p className="text-3xl font-bold">15</p>
                </div>
                <Database className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Response</p>
                  <p className="text-3xl font-bold">45ms</p>
                </div>
                <Code className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Usage Chart */}
        <Card>
          <CardHeader>
            <CardTitle>API Usage Analytics</CardTitle>
            <CardDescription>Monthly request volume and performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={apiUsageData}>
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* API Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>API Documentation & Examples</CardTitle>
            <CardDescription>Interactive documentation with code samples</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="predictions" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="predictions">Predictions</TabsTrigger>
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="batches">Batches</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="predictions" className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">POST /v1/predictions/create</h4>
                    <Badge>REST API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate AI-powered treatment predictions based on patient data
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "prediction": "92",
  "noise": "Cellgeniq",
  "totestSave": [],
  "example": {},
  "scoene": "coast"
}`}</pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="patients" className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">GET /v1/patients/:id</h4>
                    <Badge>REST API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Retrieve comprehensive patient information and treatment history
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "id": "CG-0001",
  "name": "Eleanor Vance",
  "age": 68,
  "condition": "Osteoarthritis",
  "status": "Active"
}`}</pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="batches" className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">GET /v1/batches/status</h4>
                    <Badge>REST API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Monitor manufacturing batch status and quality metrics
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "batch_id": "BATCH-2401",
  "status": "Processing",
  "progress": 75,
  "type": "CAR-T"
}`}</pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">GET /v1/analytics/outcomes</h4>
                    <Badge>REST API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access treatment outcome analytics and success metrics
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`{
  "success_rate": 0.92,
  "total_treatments": 1250,
  "avg_recovery_time": "8-12 weeks"
}`}</pre>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Integration Partners & Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Integration Partners</CardTitle>
              <CardDescription>Connected systems and platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "EHR Systems", type: "Epic, Cerner", status: "Connected" },
                { name: "Lab Equipment", type: "IoT Sensors", status: "Connected" },
                { name: "Analytics Providers", type: "Data Warehouse", status: "Connected" },
                { name: "Pharma Companies", type: "Enterprise", status: "Active" },
              ].map((partner, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-sm">{partner.name}</p>
                    <p className="text-xs text-muted-foreground">{partner.type}</p>
                  </div>
                  <Badge variant="default">{partner.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Applications</CardTitle>
              <CardDescription>Marketplace and app ecosystem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { app: "Patient Monitoring", category: "Mobile App" },
                { app: "Treatment Planning", category: "Desktop" },
                { app: "Quality Control", category: "Web App" },
                { app: "Supply Chain Tracking", category: "Integration" },
              ].map((app, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{app.app}</p>
                      <p className="text-xs text-muted-foreground">{app.category}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* API Keys & Webhooks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>API Key Management</CardTitle>
              <CardDescription>Secure authentication and access control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Production Key</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-x-auto">
                  cg_prod_3fa9b2e4c8d7a1f6...
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div>Created: Mar 1, 2024</div>
                  <div>Last used: 2 hours ago</div>
                </div>
              </div>
              <Button className="w-full" variant="outline">Generate New Key</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook Configuration</CardTitle>
              <CardDescription>Event notifications and real-time updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { event: "prediction.created", url: "https://api.example.com/webhook" },
                { event: "batch.completed", url: "https://api.example.com/webhook" },
                { event: "qc.failed", url: "https://api.example.com/alerts" },
              ].map((webhook, i) => (
                <div key={i} className="p-3 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium font-mono">{webhook.event}</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{webhook.url}</p>
                </div>
              ))}
              <Button className="w-full" variant="outline">Add Webhook</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
