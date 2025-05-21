import { Building, FileText, Heart, Home, Settings } from "lucide-react";

const navManagerLinks = [
  { icon: Building, label: "Properties", href: "/managers/properties" },
  {
    icon: FileText,
    label: "Applications",
    href: "/managers/applications",
  },
  { icon: Settings, label: "Settings", href: "/managers/settings" },
];

const NavTenantLinks = [
  { icon: Heart, label: "Favorites", href: "/tenants/favorites" },
  {
    icon: FileText,
    label: "Applications",
    href: "/tenants/applications",
  },
  { icon: Home, label: "Residences", href: "/tenants/residences" },
  { icon: Settings, label: "Settings", href: "/tenants/settings" },
];

export { navManagerLinks, NavTenantLinks };
