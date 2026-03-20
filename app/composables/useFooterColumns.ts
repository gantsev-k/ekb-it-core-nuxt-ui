import { shallowRef } from "vue";
import type { FooterColumn } from "@nuxt/ui";
import { navItems } from "~/data/navigation";
import { contacts } from "~/data/contacts";

export function useFooterColumns() {
  const footerColumns = shallowRef<FooterColumn[]>([
    {
      label: "Навигация",
      children: navItems.map((item) => ({ ...item })),
    },
    {
      label: "Контакты",
      children: contacts.map((item) => ({ ...item })),
    },
  ]);

  return {
    footerColumns,
  };
}
