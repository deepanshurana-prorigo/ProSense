"use client";

import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  LayoutDashboard,
  LineChart,
  Radio,
  Search,
  FileText,
  Settings,
  LogOut,
  Briefcase,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/app/stores/useAuthStore";

const sections = [
  {
    label: null, // or "Menu" if you want a heading
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Charts", url: "/charts", icon: LineChart },
      { title: "Live Feed", url: "/live-feed", icon: Radio },
      { title: "Sensor Details", url: "/sensor-details", icon: Search },
      { title: "Reports", url: "/reports", icon: FileText },
      { title: "Sensor Management", url: "/sensor-management", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    toast.success("Logged out successfully");
    router.push("/login");
  };

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const isActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Header */}
        <SidebarGroup className="pb-2 border-b">
          <SidebarGroupContent>
            <div className="flex items-center justify-center gap-2 px-2 py-2">
              <div className="group-data-[state=expanded]/sidebar:flex flex-col items-center justify-center">
                <span className="text-sm font-semibold">ProSense</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Menu Sections */}
        {sections.map((section, sectionIndex) => (
          <SidebarGroup key={sectionIndex}>
            {section.label && (
              <SidebarGroupLabel className="hidden group-data-[state=expanded]/sidebar:block text-xs font-semibold uppercase tracking-wider">
                {section.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        isActive={isActive(item.url)}
                        onClick={() => handleNavigation(item.url)}
                        className="cursor-pointer"
                        tooltip={item.title}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col gap-2 w-full">
              <div className="px-2 py-2 text-sm hidden group-data-[state=expanded]/sidebar:block border-t pt-3">
                <p className="font-medium text-foreground truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
              <SidebarMenuButton
                onClick={handleLogout}
                className="cursor-pointer w-full justify-start"
                tooltip="Logout"
              >
                <LogOut className="h-5 w-5" />
                <span className="hidden group-data-[state=expanded]/sidebar:inline">Logout</span>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
