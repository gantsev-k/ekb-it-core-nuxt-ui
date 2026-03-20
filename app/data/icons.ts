export interface Icon {
  name: string;
  label?: string;
}

export const icons = {
  computer: { name: "material-symbols:computer-outline", label: "Computer" },
} as const;
