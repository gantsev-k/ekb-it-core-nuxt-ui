import { icons } from "~/data/icons";

export interface ContactItem {
  icon: string;
  to: string;
  label: string;
  ariaLabel: string;
  target?: string;
}

export const contacts: ContactItem[] = [
  {
    icon: icons.telegram.name,
    to: "https://t.me/gantsev_k",
    label: "Telegram",
    ariaLabel: "Написать в Telegram",
    target: "_blank",
  },
  {
    icon: icons.phone.name,
    to: "tel:+79931074700",
    label: "Позвонить",
    ariaLabel: "Позвонить по телефону",
  },
  {
    icon: icons.mail.name,
    to: "mailto:gantsev.k.service@gmail.com",
    label: "Написать",
    ariaLabel: "Написать на почту",
  },
];
