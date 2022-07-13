export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--bg-body-color": "#ffffff",
    "--bg-header-color": "#ffffff",
    "--main-color": "#de3132",
    "--border-color": "#de3132",
    "--menu-btn-hover": "#000",
    "--page-header": "linear-gradient(to bottom, #181818, #ffffff)",
    "--bg-card": "#ffffff",
    "--text-color": "#000",
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--bg-body-color": "#1e1e1e",
    "--bg-header-color": "#000000",
    "--main-color": "#de3132",
    "--border-color": "#de3132",
    "--menu-btn-hover": "#ffffff",
    "--page-header": "linear-gradient(to bottom, #000, #1e1e1e)",
    "--bg-card": "#000000cc",
    "--text-color": "#ffffff",
  },
};
