import { icons } from "~/data/icons";

export interface ContactItem {
  icon: string;
  to: string;
  label: string;
  ariaLabel: string;
  target?: string;
  value: string;
  description: string;
  name: string;
}

export const contacts: ContactItem[] = [
  {
    icon: icons.telegram.name,
    to: "https://t.me/gantsev_k",
    label: "Telegram",
    ariaLabel: "Написать в Telegram",
    target: "_blank",
    value: "@gantsev_k",
    description:
      "Быстро опишите задачу — отвечу в течение дня. Удобно для фото, скриншотов и голосовых.",
    name: "Telegram",
  },
  {
    icon: icons.phone.name,
    to: "tel:+79931074700",
    label: "Позвонить",
    ariaLabel: "Позвонить по телефону",
    target: "_self",
    value: "+7 (993) 107-47-00",
    description:
      "Если нужно срочно или проще объяснить голосом. Звоните с 9 до 21.",
    name: "Телефон",
  },
  {
    icon: icons.mail.name,
    to: "mailto:gantsev.k.service@gmail.com",
    label: "Написать",
    ariaLabel: "Написать на почту",
    target: "_self",
    value: "gantsev.k.service@gmail.com",
    description:
      "Если нужно подробно описать проблему или отправить файлы. Отвечу в течение 1–2 дней.",
    name: "E-mail",
  },
];
