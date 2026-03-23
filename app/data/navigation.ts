import { icons } from "~/data/icons";

export interface NavItem {
  label: string;
  to: string;
  icon?: string;
  cta?: string;
}

export const navItems: NavItem[] = [
  {
    label: "Главная",
    to: "/",
    icon: icons.home.name,
    cta: "На главную",
  },
  {
    label: "Услуги",
    to: "/services",
    icon: icons.wrench.name,
    cta: "Мои услуги",
  },
  {
    label: "Обо мне",
    to: "/about",
    icon: icons.person.name,
    cta: "Обо мне",
  },
  {
    label: "Контакты",
    to: "/contacts",
    icon: icons.contact.name,
    cta: "Связаться со мной",
  },
  {
    label: "Блог",
    to: "/blog",
    icon: icons.book.name,
    cta: "Читать блог",
  },
];
