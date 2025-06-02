
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About Me",
    url: "/about",
    icon: User,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-purple-800/50 bg-slate-900/95 backdrop-blur">
      <SidebarHeader className="p-6 border-b border-purple-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
          <div>
            <h3 className="font-semibold text-white">Lebogang</h3>
            <p className="text-xs text-purple-300">Data Scientist</p>
          </div>
        </div>
        <SidebarTrigger className="ml-auto text-purple-300 hover:text-white" />
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild
                isActive={location.pathname === item.url}
                className="text-purple-200 hover:text-white hover:bg-purple-800/50 data-[active=true]:bg-purple-700/50 data-[active=true]:text-white"
              >
                <Link to={item.url} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
