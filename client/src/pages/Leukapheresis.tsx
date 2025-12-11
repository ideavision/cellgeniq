import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle2, Clock, MapPin, Package, Syringe, Thermometer, TrendingUp, Truck, User } from "lucide-react";

export default function Leukapheresis() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leukapheresis Process</h1>
          <p className="text-muted-foreground mt-1">Cell collection and transport management</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <p className="text-3xl font-bold text-primary">2</p>
                </div>
                <Syringe className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Transit</p>
                  <p className="text-3xl font-bold text-blue-600">3</p>
                </div>
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold text-chart-1">28</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Collections */}
        <Card>
          <CardHeader>
            <CardTitle>Active Collections</CardTitle>
            <CardDescription>Current and scheduled leukapheresis procedures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "LEUKA-2024-015",
                  patient: "Patient-3",
                  status: "scheduled",
                  scheduledDate: "Dec 14, 2024 09:00 AM",
                  location: "Boston Medical Center - Apheresis Unit",
                  technician: "Doctor-2",
                },
                {
                  id: "LEUKA-2024-014",
                  patient: "Patient-5",
                  status: "in_progress",
                  scheduledDate: "Dec 11, 2024 10:30 AM",
                  location: "Boston Medical Center - Apheresis Unit",
                  technician: "Doctor-2",
                  progress: 65,
                },
                {
                  id: "LEUKA-2024-013",
                  patient: "Patient-1",
                  status: "completed",
                  scheduledDate: "Dec 10, 2024 08:00 AM",
                  completedDate: "Dec 10, 2024 11:45 AM",
                  location: "Boston Medical Center - Apheresis Unit",
                  technician: "Doctor-2",
                  volume: 250,
                  cellCount: 2.5e9,
                  viability: 98.5,
                },
              ].map((collection, i) => (
                <div key={i} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        collection.status === "completed" ? "bg-chart-1/10" :
                        collection.status === "in_progress" ? "bg-primary/10" :
                        "bg-yellow-500/10"
                      }`}>
                        {collection.status === "completed" && <CheckCircle2 className="w-6 h-6 text-chart-1" />}
                        {collection.status === "in_progress" && <Syringe className="w-6 h-6 text-primary" />}
                        {collection.status === "scheduled" && <Calendar className="w-6 h-6 text-yellow-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold">{collection.id}</h4>
                        <p className="text-sm text-muted-foreground">Patient: {collection.patient}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{collection.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={
                      collection.status === "completed" ? "default" :
                      collection.status === "in_progress" ? "outline" :
                      "secondary"
                    }>
                      {collection.status === "completed" ? "Completed" :
                       collection.status === "in_progress" ? "In Progress" :
                       "Scheduled"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Scheduled</p>
                      <p className="font-medium text-xs">{collection.scheduledDate}</p>
                    </div>
                    {collection.completedDate && (
                      <div className="p-2 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground text-xs mb-1">Completed</p>
                        <p className="font-medium text-xs">{collection.completedDate}</p>
                      </div>
                    )}
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Technician</p>
                      <p className="font-medium text-xs">{collection.technician}</p>
                    </div>
                    {collection.volume && (
                      <div className="p-2 rounded-lg bg-muted/30 text-sm">
                        <p className="text-muted-foreground text-xs mb-1">Volume</p>
                        <p className="font-medium text-xs">{collection.volume} mL</p>
                      </div>
                    )}
                  </div>

                  {collection.status === "in_progress" && collection.progress && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-muted-foreground">Collection Progress</span>
                        <span className="font-medium">{collection.progress}%</span>
                      </div>
                      <Progress value={collection.progress} className="h-2" />
                    </div>
                  )}

                  {collection.status === "completed" && (
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-chart-1/10 border border-chart-1/30 text-sm">
                        <p className="text-muted-foreground text-xs mb-1">Cell Count</p>
                        <p className="font-semibold text-xs">{collection.cellCount?.toExponential(1)}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-chart-1/10 border border-chart-1/30 text-sm">
                        <p className="text-muted-foreground text-xs mb-1">Viability</p>
                        <p className="font-semibold text-xs">{collection.viability}%</p>
                      </div>
                      <div className="p-2 rounded-lg bg-chart-1/10 border border-chart-1/30 text-sm">
                        <p className="text-muted-foreground text-xs mb-1">Status</p>
                        <p className="font-semibold text-xs text-chart-1">Ready for Transport</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t border-border">
                    <Button size="sm" variant="outline">View Details</Button>
                    {collection.status === "completed" && (
                      <Button size="sm">Arrange Transport</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transport Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>Transport & Logistics</CardTitle>
            <CardDescription>Real-time tracking of samples in transit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "LEUKA-2024-012",
                  patient: "Patient-2",
                  carrier: "MedEx Logistics",
                  trackingNumber: "MEX-2024-002",
                  status: "in_transit",
                  departureTime: "Dec 10, 2024 12:30 PM",
                  estimatedArrival: "Dec 11, 2024 08:00 AM",
                  currentTemp: 4.2,
                  location: "En route to Manufacturing Facility",
                },
                {
                  id: "LEUKA-2024-011",
                  patient: "Patient-8",
                  carrier: "MedEx Logistics",
                  trackingNumber: "MEX-2024-001",
                  status: "delivered",
                  departureTime: "Dec 9, 2024 02:00 PM",
                  arrivalTime: "Dec 10, 2024 09:15 AM",
                  currentTemp: 4.0,
                  location: "Manufacturing Facility",
                },
              ].map((transport, i) => (
                <div key={i} className="p-4 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transport.status === "delivered" ? "bg-chart-1/10" : "bg-blue-500/10"
                      }`}>
                        {transport.status === "delivered" ? (
                          <CheckCircle2 className="w-5 h-5 text-chart-1" />
                        ) : (
                          <Truck className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{transport.id}</h4>
                        <p className="text-xs text-muted-foreground">Patient: {transport.patient}</p>
                      </div>
                    </div>
                    <Badge variant={transport.status === "delivered" ? "default" : "outline"}>
                      {transport.status === "delivered" ? "Delivered" : "In Transit"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Carrier</p>
                      <p className="font-medium text-xs">{transport.carrier}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Tracking #</p>
                      <p className="font-medium text-xs">{transport.trackingNumber}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Temperature</p>
                      <div className="flex items-center gap-1">
                        <Thermometer className="w-3 h-3 text-blue-600" />
                        <p className="font-medium text-xs">{transport.currentTemp}°C</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Location</p>
                      <p className="font-medium text-xs">{transport.location}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-muted-foreground mb-1">Departure</p>
                        <p className="font-medium">{transport.departureTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">
                          {transport.status === "delivered" ? "Arrival" : "Est. Arrival"}
                        </p>
                        <p className="font-medium">
                          {transport.status === "delivered" ? transport.arrivalTime : transport.estimatedArrival}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Collection Schedule</CardTitle>
            <CardDescription>Upcoming leukapheresis appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Dec 14, 2024", time: "09:00 AM", patient: "Patient-3", location: "Apheresis Unit A" },
                { date: "Dec 15, 2024", time: "10:30 AM", patient: "Patient-9", location: "Apheresis Unit B" },
                { date: "Dec 16, 2024", time: "08:00 AM", patient: "Patient-10", location: "Apheresis Unit A" },
                { date: "Dec 17, 2024", time: "11:00 AM", patient: "Patient-11", location: "Apheresis Unit A" },
              ].map((appointment, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{appointment.patient}</p>
                      <p className="text-xs text-muted-foreground">{appointment.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{appointment.date}</p>
                    <p className="text-xs text-muted-foreground">{appointment.time}</p>
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
