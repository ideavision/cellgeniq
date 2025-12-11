import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, FileText, Heart, MessageSquare, ThermometerIcon, User } from "lucide-react";
import { useState } from "react";

const patients = [
  { id: 1, name: "Patient-1", age: 68, condition: "Osteoarthritis", status: "Active", progress: 75 },
  { id: 2, name: "Patient-2", age: 54, condition: "Multiple Myeloma", status: "Monitoring", progress: 90 },
  { id: 3, name: "Patient-3", age: 42, condition: "Lymphoma", status: "Active", progress: 60 },
  { id: 4, name: "Patient-4", age: 61, condition: "Leukemia", status: "Active", progress: 45 },
];

export default function Patients() {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patient Management</h1>
          <p className="text-muted-foreground mt-1">Comprehensive patient care coordination and monitoring</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Patient List</CardTitle>
              <CardDescription>Active treatments and monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedPatient.id === patient.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{patient.name}</h4>
                        <p className="text-xs text-muted-foreground">Age: {patient.age}</p>
                      </div>
                    </div>
                    <Badge variant={patient.status === "Active" ? "default" : "secondary"}>
                      {patient.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{patient.condition}</p>
                  <Progress value={patient.progress} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Patient Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{selectedPatient.name}</CardTitle>
                      <CardDescription className="text-base">
                        Age: {selectedPatient.age} | ID: CG-{selectedPatient.id.toString().padStart(4, '0')}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">Condition: {selectedPatient.condition}</p>
                    </div>
                  </div>
                  <Badge className="text-sm px-3 py-1">{selectedPatient.status}</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* AI Recommendations */}
            <Card className="border-chart-1/30 bg-chart-1/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-chart-1" />
                  AI-Powered Treatment Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Progress value={92} className="w-32 h-2 mt-2" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">AI Confidence: 92%</p>
                      <p className="text-sm text-muted-foreground">
                        Suggests: Personalized Mesenchymal Stem Cell Therapy - Phase 2
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-xs text-muted-foreground">Targeted Injection</p>
                      <p className="font-medium text-sm">Knee Joint</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-xs text-muted-foreground">Expected Recovery</p>
                      <p className="font-medium text-sm">8-12 Weeks</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-chart-1 hover:bg-chart-1/90">Review Protocol</Button>
                    <Button size="sm" variant="outline">Adjust Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for detailed info */}
            <Tabs defaultValue="progress" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="vitals">Vitals</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>

              <TabsContent value="progress" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Cell Therapy Progress & Real-Time Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Timeline */}
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                        <div className="space-y-6">
                          <div className="relative flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center z-10">
                              <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                            <div className="flex-1 pb-6">
                              <p className="font-medium">Collection</p>
                              <p className="text-sm text-muted-foreground">Completed - Mar 2024</p>
                            </div>
                          </div>
                          <div className="relative flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center z-10">
                              <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                            <div className="flex-1 pb-6">
                              <p className="font-medium">Processing</p>
                              <p className="text-sm text-muted-foreground">Completed - Mar 2024</p>
                            </div>
                          </div>
                          <div className="relative flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 ring-4 ring-primary/20">
                              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                            </div>
                            <div className="flex-1 pb-6">
                              <p className="font-medium">Culturing</p>
                              <p className="text-sm text-muted-foreground">In Progress</p>
                              <div className="mt-3 p-3 rounded-lg bg-muted/50">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Cell Count</p>
                                    <p className="font-semibold">1.2 × 10⁸</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Viability</p>
                                    <p className="font-semibold">98%</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Temp</p>
                                    <p className="font-semibold">37.0°C</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center z-10">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-muted-foreground">Administration</p>
                              <p className="text-sm text-muted-foreground">Scheduled</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vitals" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-Time Vitals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">Heart Rate</span>
                        </div>
                        <p className="text-3xl font-bold">72 <span className="text-lg text-muted-foreground">bpm</span></p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Activity className="w-4 h-4" />
                          <span className="text-sm">Blood Pressure</span>
                        </div>
                        <p className="text-3xl font-bold">120<span className="text-lg">/80</span></p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <ThermometerIcon className="w-4 h-4" />
                          <span className="text-sm">O2 Saturation</span>
                        </div>
                        <p className="text-3xl font-bold">99<span className="text-lg text-muted-foreground">%</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Document Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {["Consent Form.pdf", "Lab Results_040124.pdf", "Consent Usaus.pdf"].map((doc) => (
                        <div key={doc} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm font-medium">{doc}</span>
                          </div>
                          <Button size="sm" variant="ghost">View</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                  {[
                    { name: "Doctor-1", role: "Lead Physician", message: "Hi, I completed the initial assessment for patient care plan." },
                    { name: "Doctor-2", role: "Care Coordinator", message: "Patient care coordination completed successfully." },
                  ].map((member, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium text-sm">{member.name}</p>
                              <span className="text-xs text-muted-foreground">• {member.role}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{member.message}</p>
                          </div>
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Interactive Treatment Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 2;
                    const isToday = day === 10;
                    const hasEvent = [10, 15, 22].includes(day);
                    
                    return (
                      <div
                        key={i}
                        className={`aspect-square p-2 text-center text-sm rounded-lg ${
                          day < 1 ? "text-muted-foreground/30" :
                          isToday ? "bg-primary text-primary-foreground font-semibold" :
                          hasEvent ? "bg-chart-1/20 text-chart-1 font-medium" :
                          "hover:bg-muted/50"
                        }`}
                      >
                        {day > 0 && day}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
