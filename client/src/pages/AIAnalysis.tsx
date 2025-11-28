import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, Brain, CheckCircle2, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const cellTypeData = [
  { month: "Jan", confidence: 95 },
  { month: "Feb", confidence: 92 },
  { month: "Mar", confidence: 94 },
  { month: "Apr", confidence: 96 },
  { month: "May", confidence: 97 },
  { month: "Jun", confidence: 97 },
];

const growthRateData = [
  { month: "Jan", confidence: 88 },
  { month: "Feb", confidence: 90 },
  { month: "Mar", confidence: 89 },
  { month: "Apr", confidence: 92 },
  { month: "May", confidence: 91 },
  { month: "Jun", confidence: 91 },
];

export default function AIAnalysis() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI-Powered Cell Analysis</h1>
          <p className="text-muted-foreground mt-1">Advanced artificial intelligence tools for cell therapy optimization</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cell Viability</p>
                  <p className="text-2xl font-bold text-chart-1">95.2%</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cell Count</p>
                  <p className="text-2xl font-bold">1.5×10⁶</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Morphology Score</p>
                  <p className="text-2xl font-bold text-chart-2">8.9</p>
                </div>
                <Brain className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Temerology</p>
                  <p className="text-2xl font-bold">1.5×10⁴⁶</p>
                </div>
                <AlertCircle className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Cell Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Cell Analysis</CardTitle>
              <CardDescription>Automated microscopic cell image processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-muted/30 border border-border flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-1/10" />
                    <div className="relative text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Sample {i}</p>
                      <Badge variant="secondary" className="mt-1">Analyzed</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Viability:</span>
                  <span className="font-semibold text-chart-1">95.2%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Cell Count:</span>
                  <span className="font-semibold">1.5×10⁶</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Morphology Score:</span>
                  <span className="font-semibold text-chart-2">8.9</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Methogy Score:</span>
                  <span className="font-semibold">8.7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ML Prediction Models */}
          <Card>
            <CardHeader>
              <CardTitle>ML Prediction Models</CardTitle>
              <CardDescription>Machine learning confidence scores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Cell Type Classifier</span>
                  <span className="text-sm font-semibold text-primary">97% Confidence</span>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={cellTypeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar dataKey="confidence" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Growth Rate Predictor</span>
                  <span className="text-sm font-semibold text-chart-1">91% Confidence</span>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={growthRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar dataKey="confidence" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Optimization */}
        <Card>
          <CardHeader>
            <CardTitle>Treatment Optimization Algorithms</CardTitle>
            <CardDescription>AI-powered parameter adjustment for optimal outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium">Media Concentration</label>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium">Temperature (°C)</label>
                    <span className="text-sm text-muted-foreground">37.0</span>
                  </div>
                  <Slider defaultValue={[37]} min={35} max={39} step={0.1} className="w-full" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium">pH Level</label>
                    <span className="text-sm text-muted-foreground">7.4</span>
                  </div>
                  <Slider defaultValue={[7.4]} min={6.8} max={7.8} step={0.1} className="w-full" />
                </div>
                <Button className="w-full bg-chart-1 hover:bg-chart-1/90">Run Optimization</Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-3">Real-Time Culture Monitoring</h4>
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center border border-border">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-chart-2/20 flex items-center justify-center">
                        <Brain className="w-10 h-10 text-chart-2" />
                      </div>
                      <Badge variant="secondary" className="mb-2">LIVE</Badge>
                      <p className="text-sm text-muted-foreground">Cell Culture Feed</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-muted/30 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">pH</p>
                    <p className="text-lg font-semibold">7.6</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">O₂</p>
                    <p className="text-lg font-semibold">0.9</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predictive Analytics & Neural Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics</CardTitle>
              <CardDescription>Treatment success probability over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={[
                  { time: 0, probability: 0 },
                  { time: 20, probability: 45 },
                  { time: 40, probability: 70 },
                  { time: 60, probability: 85 },
                  { time: 80, probability: 92 },
                  { time: 100, probability: 96 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" label={{ value: 'Time', position: 'insideBottom', offset: -5 }} />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Success Probability (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Line type="monotone" dataKey="probability" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={{ fill: "hsl(var(--chart-2))" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Neural Network Visualization</CardTitle>
              <CardDescription>AI decision-making process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[250px]">
                <div className="relative w-full max-w-md">
                  {/* Input Layer */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <span className="text-xs font-semibold">I{i}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hidden Layer */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-chart-1/20 border-2 border-chart-1 flex items-center justify-center">
                        <span className="text-xs font-semibold">H{i}</span>
                      </div>
                    ))}
                  </div>

                  {/* Output Layer */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-chart-2/20 border-2 border-chart-2 flex items-center justify-center">
                      <span className="text-xs font-semibold">Out</span>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                    <line x1="60" y1="50%" x2="50%" y2="30%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                    <line x1="60" y1="50%" x2="50%" y2="50%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                    <line x1="60" y1="50%" x2="50%" y2="70%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                  </svg>

                  <div className="absolute -bottom-8 left-0 right-0 text-center">
                    <p className="text-xs text-muted-foreground">AI Decision-Making</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* QA Metrics & Research Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>QA Metrics & Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Temp Deviation (Resolved)</p>
                    <p className="text-xs text-muted-foreground">Detected 2 hours ago</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">QA Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">QA Metric 1</p>
                      <p className="text-lg font-semibold">10.1</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cell Count %</p>
                      <p className="text-lg font-semibold">1.5x</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Growth Rate</p>
                      <p className="text-lg font-semibold">8.96</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold text-sm mb-2">Pattern Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    Identified novel biomarker correlations in subset.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                    <p className="text-lg font-semibold text-primary">97.2%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                    <p className="text-xs text-muted-foreground mb-1">Precision</p>
                    <p className="text-lg font-semibold text-chart-1">95.8%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
