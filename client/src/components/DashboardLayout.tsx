import { Activity, Beaker, Building2, FileCheck, FlaskConical, GitBranch, LayoutDashboard, Settings, Shield, ShieldCheck, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Workflow Overview", href: "/", icon: GitBranch },
  { name: "Dashboard", href: "/home", icon: LayoutDashboard },
  { name: "Patient Management", href: "/patients", icon: Users },
  { name: "Leukapheresis", href: "/leukapheresis", icon: Activity },
  { name: "Manufacturing", href: "/manufacturing", icon: Building2 },
  { name: "Quality Control", href: "/quality-control", icon: FileCheck },
  { name: "Quality Assurance", href: "/quality-assurance", icon: ShieldCheck },
  { name: "API Integration", href: "/api", icon: Beaker },
  { name: "Regulatory & Compliance", href: "/compliance", icon: Shield },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">CellGeniq</h1>
                <p className="text-xs text-muted-foreground">AI-Driven Platform</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Settings */}
        <div className="p-3 border-t border-border">
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Settings</span>
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
