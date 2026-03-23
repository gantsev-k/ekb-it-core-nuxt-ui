export interface Icon {
  name: string;
  label?: string;
}

export const icons = {
  computer: { name: "material-symbols:computer-outline", label: "Computer" },
  home: { name: "material-symbols:home-outline", label: "Home" },
  wrench: { name: "material-symbols:tools-wrench-outline", label: "Wrench" },
  person: { name: "material-symbols:person-outline", label: "Person" },
  contact: { name: "material-symbols:contact-page-outline", label: "Contact" },
  book: { name: "material-symbols:book-outline", label: "Book" },
  telegram: { name: "ri:telegram-line", label: "Telegram" },
  phone: { name: "material-symbols:call-outline", label: "Phone" },
  mail: { name: "material-symbols:mail-outline", label: "Mail" },
  verified: { name: "material-symbols:verified-outline", label: "Verified" },
  info: { name: "material-symbols:info-outline", label: "Info" },
  currencyRuble: {
    name: "material-symbols:currency-ruble",
    label: "CurrencyRuble",
  },
  lightbulb: { name: "material-symbols:lightbulb-outline", label: "Lightbulb" },
  arrowForward: {
    name: "material-symbols:arrow-forward",
    label: "ArrowForward",
  },
} as const;
