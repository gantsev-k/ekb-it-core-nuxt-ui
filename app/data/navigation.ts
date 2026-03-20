import { icons } from "~/data/icons";

export interface NavItem {
  label: string;
  to: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { label: "Главная", to: "/", icon: icons.home.name },
  { label: "Услуги", to: "/services", icon: icons.wrench.name },
  { label: "Обо мне", to: "/about", icon: icons.person.name },
  { label: "Контакты", to: "/contacts", icon: icons.contact.name },
  { label: "Блог", to: "/blog", icon: icons.book.name },
];
