export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  {
    title: "Admission",
    href: "/admission",
    children: [
      { title: "Engineering", href: "/admission/engineering" },
      { title: "Medical", href: "/admission/medical" },
      { title: "Management", href: "/admission/management" }
    ]
  },
  { title: "Contact", href: "/contact" }
];

