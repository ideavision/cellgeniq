import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, CheckCircle2, Clock, Package, Thermometer, TrendingUp } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const temperatureData = [
  { time: "00:00", temp: 37.0 },
  { time: "04:00", temp: 37.1 },
  { time: "08:00", temp: 36.9 },
  { time: "12:00", temp: 37.0 },
  { time: "16:00", temp: 37.2 },
  { time: "20:00", temp: 37.0 },
];

const batches = [
  { id: "BATCH-2401", status: "Processing", progress: 75, type: "CAR-T", startDate: "2024-03-15" },
  { id: "BATCH-2402", status: "Quality Check", progress: 90, type: "TCR-T", startDate: "2024-03-14" },
  { id: "BATCH-2403", status: "Processing", progress: 45, type: "NK Cell", startDate: "2024-03-16" },
  { id: "BATCH-2404", status: "Complete", progress: 100, type: "CAR-T", startDate: "2024-03-12" },
];

export default function Manufacturing() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manufacturing Platform</h1>
          <p className="text-muted-foreground mt-1">Industrial-grade production monitoring and control</p>
        </div>

        {/* Production Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Batches</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="text-3xl font-bold">75%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-3xl font-bold">5.2d</p>
                </div>
                <Clock className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-3xl font-bold text-chart-1">98%</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Production Pipeline */}
        <Card>
          <CardHeader>
            <CardTitle>Production Pipeline Overview</CardTitle>
            <CardDescription>Automated workflow stages with real-time status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {[
                { stage: "Collection", count: 3, color: "bg-blue-500" },
                { stage: "Processing", count: 5, color: "bg-purple-500" },
                { stage: "Expansion", count: 2, color: "bg-yellow-500" },
                { stage: "QC Testing", count: 1, color: "bg-orange-500" },
                { stage: "Ready", count: 1, color: "bg-green-500" },
              ].map((stage, i) => (
                <div key={i} className="relative">
                  <div className="text-center mb-3">
                    <div className={`w-16 h-16 mx-auto rounded-full ${stage.color} flex items-center justify-center text-white font-bold text-xl mb-2`}>
                      {stage.count}
                    </div>
                    <p className="text-sm font-medium">{stage.stage}</p>
                  </div>
                  {i < 4 && (
                    <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Batch Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>Batch Tracking & Traceability</CardTitle>
            <CardDescription>Real-time monitoring of production batches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {batches.map((batch) => (
                <div key={batch.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{batch.id}</h4>
                        <p className="text-sm text-muted-foreground">Type: {batch.type} | Started: {batch.startDate}</p>
                      </div>
                    </div>
                    <Badge variant={batch.status === "Complete" ? "default" : "secondary"}>
                      {batch.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{batch.progress}%</span>
                    </div>
                    <Progress value={batch.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Equipment Monitoring & Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Monitoring</CardTitle>
              <CardDescription>IoT sensor integration and real-time data</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="bioreactor" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="bioreactor">Bioreactor</TabsTrigger>
                  <TabsTrigger value="incubator">Incubator</TabsTrigger>
                  <TabsTrigger value="centrifuge">Centrifuge</TabsTrigger>
                </TabsList>

                <TabsContent value="bioreactor" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Temperature</span>
                      </div>
                      <p className="text-2xl font-bold">37.0°C</p>
                      <Badge variant="secondary" className="mt-2">Normal</Badge>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">pH Level</span>
                      </div>
                      <p className="text-2xl font-bold">7.4</p>
                      <Badge variant="secondary" className="mt-2">Optimal</Badge>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={temperatureData}>
                      <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} domain={[36.5, 37.5]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <Line type="monotone" dataKey="temp" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="incubator" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">Temperature</span>
                      <p className="text-2xl font-bold">37.2°C</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">CO₂ Level</span>
                      <p className="text-2xl font-bold">5.0%</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="centrifuge" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">RPM</span>
                      <p className="text-2xl font-bold">3000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <p className="text-2xl font-bold">Active</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality Control Dashboard</CardTitle>
              <CardDescription>Automated testing and compliance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                  <CheckCircle2 className="w-5 h-5 text-chart-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sterility Test - Passed</p>
                    <p className="text-xs text-muted-foreground">BATCH-2402 | 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-chart-1/10 border border-chart-1/30">
                  <CheckCircle2 className="w-5 h-5 text-chart-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Viability Test - Passed</p>
                    <p className="text-xs text-muted-foreground">BATCH-2401 | 4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Endotoxin Test - Pending</p>
                    <p className="text-xs text-muted-foreground">BATCH-2403 | In progress</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-sm mb-3">QC Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground mb-1">Pass Rate</p>
                    <p className="text-2xl font-bold text-chart-1">98%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground mb-1">Avg. Test Time</p>
                    <p className="text-2xl font-bold">4.2h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supply Chain Optimization */}
        <Card>
          <CardHeader>
            <CardTitle>Supply Chain Optimization</CardTitle>
            <CardDescription>Predictive analytics for inventory and logistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Raw Materials</h4>
                <div className="space-y-2">
                  {[
                    { name: "Culture Media", stock: 85, status: "Good" },
                    { name: "Growth Factors", stock: 45, status: "Low" },
                    { name: "Reagents", stock: 92, status: "Good" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                      <span className="text-sm">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.stock}%</span>
                        <Badge variant={item.status === "Good" ? "secondary" : "destructive"} className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Upcoming Deliveries</h4>
                <div className="space-y-2">
                  {[
                    { item: "Culture Media", date: "Mar 20" },
                    { item: "Cryopreservation", date: "Mar 22" },
                    { item: "Disposables", date: "Mar 25" },
                  ].map((delivery, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                      <span className="text-sm">{delivery.item}</span>
                      <span className="text-xs text-muted-foreground">{delivery.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">AI Recommendations</h4>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm mb-2">
                    <strong>Reorder Alert:</strong> Growth Factors inventory below threshold
                  </p>
                  <Button size="sm" className="w-full">Place Order</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
