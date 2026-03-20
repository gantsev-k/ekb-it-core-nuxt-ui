import { icons } from "~/data/icons";

export interface ContactItem {
  icon: string;
  to: string;
  label: string;
  target?: string;
}

export const contacts: ContactItem[] = [
  {
    icon: icons.telegram.name,
    to: "https://t.me/gantsev_k",
    label: "Telegram",
    target: "_blank",
  },
  {
    icon: icons.phone.name,
    to: "tel:+79931074700",
    label: "Позвонить",
    target: "_self",
  },
  {
    icon: icons.mail.name,
    to: "mailto:gantsev.k.service@gmail.com",
    label: "Написать",
    target: "_self",
  },
];
