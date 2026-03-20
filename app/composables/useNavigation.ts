import { shallowRef } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";
import { navItems } from "~/data/navigation";
import { contacts } from "~/data/contacts";

export function useNavigation() {
  const linkItems = shallowRef<NavigationMenuItem[]>(
    navItems.map((item) => ({ ...item })),
  );

  const contactItems = shallowRef<NavigationMenuItem[]>(
    contacts.map((item) => ({ ...item })),
  );

  const groupedItems = shallowRef<NavigationMenuItem[][]>([
    [...linkItems.value],
    [...contactItems.value],
  ]);

  return {
    linkItems,
    contactItems,
    groupedItems,
  };
}
