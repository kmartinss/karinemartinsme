export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--bg-body-color": "linear-gradient(90deg, #ffffff 0%, #dedede 100%)",
    "--bg-header-color": "#ffffff",
    "--main-color": "#de3132",
    "--border-color": "#de3132",
    "--menu-btn-hover": "#000",
    "--page-header": "linear-gradient(to bottom, #181818, #ffffff)",
    "--bg-card": "#ffffff",
    "--logo-text-color": "#000000",
    "--text-color": "#000000",
    "--negative-color": "#000000"
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--bg-body-color":
      "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(12, 12, 12) 35%, rgb(32, 32, 32) 100%)",
    "--bg-header-color": "#000000",
    "--main-color": "#de3132",
    "--border-color": "#de3132",
    "--menu-btn-hover": "#ffffff",
    "--page-header": "linear-gradient(to bottom, #000, #1e1e1e)",
    "--bg-card": "#000000cc",
    "--logo-text-color": "#ffffff",
    "--text-color": "#cccccc",
    "--negative-color": "#ffffff"
  },
};
