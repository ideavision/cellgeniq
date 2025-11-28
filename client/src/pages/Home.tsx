import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, AlertTriangle, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const treatmentData = [
  { month: "Jan", successful: 85, aiPredicted: 88 },
  { month: "Feb", successful: 78, aiPredicted: 82 },
  { month: "Mar", successful: 82, aiPredicted: 85 },
  { month: "Apr", successful: 88, aiPredicted: 90 },
  { month: "May", successful: 92, aiPredicted: 94 },
  { month: "Jun", successful: 95, aiPredicted: 96 },
];

const treatmentTypes = [
  { name: "CAR-T", value: 45, color: "#1E3A8A" },
  { name: "TCR-T", value: 30, color: "#10B981" },
  { name: "NK Cell", value: 15, color: "#06B6D4" },
  { name: "Other", value: 10, color: "#6B7280" },
];

const expansionData = [
  { type: "Actual", mark: 12, tcrt: 15, nk: 8 },
  { type: "AI Target", mark: 18, tcrt: 20, nk: 14 },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Real-time Analytics</h1>
          <p className="text-muted-foreground mt-1">Comprehensive overview of cell therapy operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Patient Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">1,250</div>
                  <p className="text-xs text-muted-foreground mt-1">Total Patients</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active: 320</span>
                  <span className="text-muted-foreground">Upcoming: 85</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">AI Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">92%</div>
                  <p className="text-xs text-muted-foreground mt-1">Success Probability</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-chart-1/20 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-chart-1" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">3 Critical Risk Alerts</span>
                </div>
                <div className="text-sm text-muted-foreground">15 Suggested Protocols</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Treatment Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">Expansion Phase</span>
                    <span className="font-medium text-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">Infusion</span>
                    <span className="font-medium text-foreground">25%</span>
                  </div>
                  <Progress value={25} className="h-2 [&>div]:bg-chart-1" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">Monitoring</span>
                    <span className="font-medium text-foreground">15%</span>
                  </div>
                  <Progress value={15} className="h-2 [&>div]:bg-chart-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Manufacturing Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">75%</div>
                  <p className="text-xs text-muted-foreground mt-1">Capacity</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-chart-2/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-chart-2" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-chart-1" />
                  <span className="text-sm text-muted-foreground">12 Batches in Production</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Treatment Outcomes Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Cell Therapy Outcomes Over Time</CardTitle>
              <CardDescription>Successful Treatments vs AI-Predicted Success</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={treatmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
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
                    dataKey="successful"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.2)"
                    strokeWidth={2}
                    name="Successful Treatments"
                  />
                  <Area
                    type="monotone"
                    dataKey="aiPredicted"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1) / 0.2)"
                    strokeWidth={2}
                    name="AI-Predicted Success"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Treatment Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Treatment Types & Success Rates</CardTitle>
              <CardDescription>Distribution of cell therapy modalities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-8">
                <ResponsiveContainer width="50%" height={250}>
                  <PieChart>
                    <Pie
                      data={treatmentTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {treatmentTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-3">
                  {treatmentTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                        <span className="text-sm font-medium">{type.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{type.value}%</div>
                        <div className="text-xs text-muted-foreground">
                          {type.name === "CAR-T" && "90% Success"}
                          {type.name === "TCR-T" && "85% Success"}
                          {type.name === "NK Cell" && "88% Success"}
                          {type.name === "Other" && "80% Success"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cell Expansion Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Cell Expansion Growth Analysis</CardTitle>
            <CardDescription>Actual growth vs AI-optimized targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expansionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="mark" fill="hsl(var(--primary))" name="CAR-T" radius={[4, 4, 0, 0]} />
                <Bar dataKey="tcrt" fill="hsl(var(--chart-1))" name="TCR-T" radius={[4, 4, 0, 0]} />
                <Bar dataKey="nk" fill="hsl(var(--chart-2))" name="NK Cell" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
