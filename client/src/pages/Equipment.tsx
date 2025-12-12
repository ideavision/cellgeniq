import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Beaker,
  Box,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Dna,
  Filter,
  FlaskConical,
  Microscope,
  Package,
  Search,
  Settings2,
  Snowflake,
  TestTube,
  Thermometer,
  Truck,
  Waves,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface Equipment {
  name: string;
  manufacturer: string;
  description?: string;
}

interface EquipmentCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
  equipment: Equipment[];
}

const equipmentCategories: EquipmentCategory[] = [
  {
    id: "apheresis",
    name: "Apheresis Systems",
    icon: Activity,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Blood component separation systems for collecting specific cell populations",
    equipment: [
      { name: "Spectra Optia", manufacturer: "Terumo BCT", description: "Automated apheresis platform with continuous flow technology" },
      { name: "COBE Spectra", manufacturer: "Terumo BCT", description: "Versatile apheresis system for therapeutic procedures" },
      { name: "Fenwal Amicus", manufacturer: "Fresenius Kabi", description: "Automated blood component collection system" },
    ],
  },
  {
    id: "cell-separation",
    name: "Cell Separation / Selection Systems",
    icon: Filter,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Magnetic and density-based cell isolation technologies",
    equipment: [
      { name: "CliniMACS Plus", manufacturer: "Miltenyi Biotec", description: "Clinical-scale magnetic cell separation" },
      { name: "CliniMACS Prodigy", manufacturer: "Miltenyi Biotec", description: "Automated closed-system cell processing" },
      { name: "Sepax C-Pro", manufacturer: "Cytiva", description: "Automated cell processing system" },
      { name: "Ficoll Gradient Systems", manufacturer: "Various Vendors", description: "Density gradient separation for mononuclear cells" },
    ],
  },
  {
    id: "cell-washing",
    name: "Cell Washing / Volume Reduction",
    icon: Waves,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    description: "Systems for washing, concentrating, and volume reduction of cell products",
    equipment: [
      { name: "Cytiva Sepax 2", manufacturer: "Cytiva", description: "Automated cell washing and volume reduction" },
      { name: "LOVO Cell Processing System", manufacturer: "Fresenius Kabi", description: "High-throughput cell washing platform" },
      { name: "COBRA Cell Washer", manufacturer: "Various", description: "Automated cell washing system" },
    ],
  },
  {
    id: "t-cell-activation",
    name: "T-Cell Activation Systems",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Platforms for activating and stimulating T-cells for expansion",
    equipment: [
      { name: "CTS Dynabeads & DynaCellector Platform", manufacturer: "Thermo Fisher", description: "Magnetic bead-based T-cell activation" },
      { name: "Miltenyi T-Cell Activation Beads", manufacturer: "Miltenyi Biotec", description: "Anti-CD3/CD28 activation beads" },
      { name: "G-Rex Culture System", manufacturer: "Wilson Wolf", description: "Gas-permeable rapid expansion system" },
    ],
  },
  {
    id: "gene-modification",
    name: "Gene Modification Systems",
    icon: Dna,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Viral transduction and electroporation platforms for genetic engineering",
    equipment: [
      { name: "MaxCyte ExPERT GTx", manufacturer: "MaxCyte", description: "Clinical-scale electroporation platform" },
      { name: "Lonza 4D-Nucleofector LV Unit", manufacturer: "Lonza", description: "Large-volume nucleofection system" },
      { name: "Viral Transduction Bags / Chambers", manufacturer: "Miltenyi, Cytiva", description: "Closed-system viral vector delivery" },
    ],
  },
  {
    id: "bioreactors",
    name: "Cell Expansion Bioreactors",
    icon: FlaskConical,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Scalable systems for large-scale cell culture and expansion",
    equipment: [
      { name: "G-Rex Bioreactors", manufacturer: "Wilson Wolf", description: "Gas-permeable bioreactors for cell expansion" },
      { name: "Xuri Cell Expansion System", manufacturer: "Cytiva", description: "Rocking motion bioreactor platform" },
      { name: "Wave Bioreactor 2/10/20", manufacturer: "Cytiva / GE", description: "Wave-induced agitation bioreactors" },
      { name: "Stirred-Tank Bioreactors (AppliFlex ST)", manufacturer: "Applikon", description: "Traditional stirred-tank cell culture" },
    ],
  },
  {
    id: "closed-automated",
    name: "Closed Automated Processing Systems",
    icon: Cpu,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    description: "End-to-end automated platforms for CAR-T manufacturing",
    equipment: [
      { name: "CliniMACS Prodigy", manufacturer: "Miltenyi Biotec", description: "End-to-end automated CAR-T manufacturing" },
      { name: "Lonza Cocoon Platform", manufacturer: "Lonza", description: "Personalized cell therapy manufacturing" },
      { name: "Cellares Cell Shuttle", manufacturer: "Cellares", description: "High-throughput automated cell therapy" },
      { name: "Terumo Quantum Cell Expansion System", manufacturer: "Terumo BCT", description: "Hollow-fiber bioreactor system" },
      { name: "Kiyatec 3D Cell Processing System", manufacturer: "Kiyatec", description: "3D cell culture processing platform" },
    ],
  },
  {
    id: "harvesting",
    name: "Harvesting / Concentration Systems",
    icon: Package,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Systems for final cell harvest and concentration",
    equipment: [
      { name: "LOVO Cell Processing System", manufacturer: "Fresenius Kabi", description: "Automated cell harvesting and washing" },
      { name: "KrosFlo Tangential Flow Filtration (TFF)", manufacturer: "Repligen", description: "Scalable TFF for cell concentration" },
      { name: "Sepax C-Pro Harvest Module", manufacturer: "Cytiva", description: "Automated harvest processing" },
    ],
  },
  {
    id: "fill-finish",
    name: "Fill & Finish Systems",
    icon: Box,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    description: "Aseptic filling and final product preparation systems",
    equipment: [
      { name: "Vanrx SA25 Aseptic Filling Workcell", manufacturer: "Cytiva", description: "Robotic aseptic filling system" },
      { name: "Automated Cryo-Fill Systems", manufacturer: "Various", description: "Automated cryobag filling" },
      { name: "Flexicon FPC50", manufacturer: "Cytiva", description: "Flexible filling and closing platform" },
    ],
  },
  {
    id: "quality-control",
    name: "Quality Control / Analytical Systems",
    icon: Microscope,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    description: "Analytical instruments for product characterization and release testing",
    equipment: [
      { name: "Attune NxT Flow Cytometer", manufacturer: "Thermo Fisher", description: "High-throughput flow cytometry" },
      { name: "BD FACSMelody / FACSCanto", manufacturer: "BD Biosciences", description: "Clinical flow cytometry platforms" },
      { name: "Vi-Cell XR / BLU", manufacturer: "Beckman Coulter", description: "Automated cell viability analysis" },
      { name: "Kaluza Analysis Software", manufacturer: "Beckman Coulter", description: "Flow cytometry data analysis" },
      { name: "Endosafe Endotoxin System", manufacturer: "Charles River", description: "Rapid endotoxin detection" },
      { name: "BioFire Mycoplasma System", manufacturer: "bioMérieux", description: "Rapid mycoplasma detection" },
    ],
  },
  {
    id: "cryopreservation",
    name: "Cryopreservation Systems",
    icon: Snowflake,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    description: "Controlled-rate freezing and long-term storage systems",
    equipment: [
      { name: "CryoMed Controlled-Rate Freezer", manufacturer: "Thermo Fisher", description: "Programmable controlled-rate freezing" },
      { name: "Planer Kryo Series Freezers", manufacturer: "Planer", description: "Precision controlled-rate freezers" },
      { name: "VaporShipper Cryogenic Containers", manufacturer: "Various", description: "Dry vapor LN₂ storage" },
      { name: "LN₂ Freezers", manufacturer: "Taylor-Wharton, Worthington", description: "Liquid nitrogen storage systems" },
    ],
  },
  {
    id: "cryogenic-transport",
    name: "Cryogenic Transport Systems",
    icon: Truck,
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
    description: "Temperature-controlled shipping and logistics solutions",
    equipment: [
      { name: "Cryoport ELITE™ Shipping System", manufacturer: "Cryoport", description: "Premium cryogenic shipping solution" },
      { name: "Cryoport Dry Vapor Shippers", manufacturer: "Cryoport", description: "Dry vapor nitrogen shippers" },
      { name: "SICCO CryoCarriers", manufacturer: "SICCO", description: "Cryogenic transport containers" },
    ],
  },
];

export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = equipmentCategories.filter((category) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        category.name.toLowerCase().includes(query) ||
        category.equipment.some(
          (eq) =>
            eq.name.toLowerCase().includes(query) ||
            eq.manufacturer.toLowerCase().includes(query)
        )
      );
    }
    return true;
  });

  const totalEquipment = equipmentCategories.reduce(
    (acc, cat) => acc + cat.equipment.length,
    0
  );

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              CAR-T Manufacturing Equipment
            </h1>
            <p className="text-muted-foreground mt-1">
              Comprehensive catalog of cell therapy manufacturing equipment
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search equipment..."
                className="pl-9 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Categories</p>
                  <p className="text-3xl font-bold">{equipmentCategories.length}</p>
                </div>
                <Settings2 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Equipment</p>
                  <p className="text-3xl font-bold">{totalEquipment}</p>
                </div>
                <Beaker className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Manufacturers</p>
                  <p className="text-3xl font-bold">15+</p>
                </div>
                <CircuitBoard className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">GMP Compliant</p>
                  <p className="text-3xl font-bold text-chart-1">100%</p>
                </div>
                <TestTube className="w-8 h-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="workflow">Workflow View</TabsTrigger>
            </TabsList>
            <Badge variant="secondary" className="text-sm">
              {filteredCategories.length} categories found
            </Badge>
          </div>

          {/* Grid View */}
          <TabsContent value="grid" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={category.id}
                    className="hover:border-primary/50 transition-all cursor-pointer group"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      )
                    }
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.equipment.length} items
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.equipment.slice(0, 3).map((eq, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-sm p-2 rounded-lg bg-muted/30"
                          >
                            <span className="font-medium truncate flex-1">
                              {eq.name}
                            </span>
                            <span className="text-xs text-muted-foreground ml-2">
                              {eq.manufacturer}
                            </span>
                          </div>
                        ))}
                        {category.equipment.length > 3 && (
                          <p className="text-xs text-muted-foreground text-center pt-2">
                            +{category.equipment.length - 3} more items
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* List View */}
          <TabsContent value="list" className="space-y-4">
            <ScrollArea className="h-[calc(100vh-350px)]">
              <div className="space-y-4 pr-4">
                {filteredCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}
                          >
                            <Icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">
                              {category.name}
                            </CardTitle>
                            <CardDescription>
                              {category.description}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary">
                            {category.equipment.length} items
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {category.equipment.map((eq, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-sm">
                                  {eq.name}
                                </h4>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <p className="text-xs text-primary font-medium mb-1">
                                {eq.manufacturer}
                              </p>
                              {eq.description && (
                                <p className="text-xs text-muted-foreground">
                                  {eq.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Workflow View */}
          <TabsContent value="workflow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CAR-T Manufacturing Workflow</CardTitle>
                <CardDescription>
                  Equipment organized by manufacturing process stages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Workflow Timeline */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                  <div className="space-y-8">
                    {[
                      {
                        stage: "1. Cell Collection",
                        categories: ["apheresis"],
                        color: "bg-red-500",
                      },
                      {
                        stage: "2. Cell Isolation & Selection",
                        categories: ["cell-separation", "cell-washing"],
                        color: "bg-blue-500",
                      },
                      {
                        stage: "3. T-Cell Activation",
                        categories: ["t-cell-activation"],
                        color: "bg-yellow-500",
                      },
                      {
                        stage: "4. Genetic Modification",
                        categories: ["gene-modification"],
                        color: "bg-purple-500",
                      },
                      {
                        stage: "5. Cell Expansion",
                        categories: ["bioreactors", "closed-automated"],
                        color: "bg-green-500",
                      },
                      {
                        stage: "6. Harvest & Formulation",
                        categories: ["harvesting", "fill-finish"],
                        color: "bg-orange-500",
                      },
                      {
                        stage: "7. Quality Testing",
                        categories: ["quality-control"],
                        color: "bg-teal-500",
                      },
                      {
                        stage: "8. Cryopreservation & Shipping",
                        categories: ["cryopreservation", "cryogenic-transport"],
                        color: "bg-sky-500",
                      },
                    ].map((workflow, idx) => {
                      const relatedCategories = equipmentCategories.filter(
                        (cat) => workflow.categories.includes(cat.id)
                      );
                      return (
                        <div key={idx} className="relative pl-16">
                          {/* Timeline Node */}
                          <div
                            className={`absolute left-6 w-5 h-5 rounded-full ${workflow.color} border-4 border-background`}
                          />

                          <div className="space-y-3">
                            <h3 className="font-bold text-lg">
                              {workflow.stage}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {relatedCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                  <div
                                    key={category.id}
                                    className="p-4 rounded-lg border border-border bg-card"
                                  >
                                    <div className="flex items-center gap-3 mb-3">
                                      <div
                                        className={`w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center`}
                                      >
                                        <Icon
                                          className={`w-4 h-4 ${category.color}`}
                                        />
                                      </div>
                                      <h4 className="font-semibold text-sm">
                                        {category.name}
                                      </h4>
                                    </div>
                                    <div className="space-y-1">
                                      {category.equipment.map((eq, eqIdx) => (
                                        <div
                                          key={eqIdx}
                                          className="flex items-center gap-2 text-xs"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                                          <span>{eq.name}</span>
                                          <span className="text-muted-foreground">
                                            ({eq.manufacturer})
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Featured Equipment Section */}
        <Card>
          <CardHeader>
            <CardTitle>Featured: Closed Automated Processing Systems</CardTitle>
            <CardDescription>
              The most important category for modern CAR-T manufacturing - end-to-end automated platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipmentCategories
                .find((c) => c.id === "closed-automated")
                ?.equipment.map((eq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 border-indigo-500/30 bg-indigo-500/5 hover:border-indigo-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{eq.name}</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">
                          {eq.manufacturer}
                        </p>
                      </div>
                    </div>
                    {eq.description && (
                      <p className="text-sm text-muted-foreground">
                        {eq.description}
                      </p>
                    )}
                    <div className="mt-3 flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        GMP
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Automated
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Closed System
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Manufacturer Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Key Manufacturers</CardTitle>
            <CardDescription>
              Leading companies in CAR-T manufacturing equipment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Miltenyi Biotec",
                "Cytiva",
                "Thermo Fisher",
                "Lonza",
                "Terumo BCT",
                "Fresenius Kabi",
                "BD Biosciences",
                "Beckman Coulter",
                "Wilson Wolf",
                "MaxCyte",
                "Repligen",
                "Cryoport",
              ].map((manufacturer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <p className="font-medium text-sm">{manufacturer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
