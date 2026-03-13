export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Admission", href: "/admission" },
  { title: "Contact", href: "/contact" },
];
