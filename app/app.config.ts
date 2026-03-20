export default defineAppConfig({
  ui: {
    colors: {
      primary: "indigo",
    },

    footer: {
      slots: {
        root: "bg-gray-900",
      },
    },

    footerColumns: {
      slots: {
        root: "xl:grid-cols-4",
        label: "text-gray-300",
      },
      variants: {
        active: {
          true: {
            link: "text-primary-400 font-medium",
          },
          false: {
            link: ["text-gray-400 hover:text-primary-300"],
          },
        },
      },
    },
  },
});
