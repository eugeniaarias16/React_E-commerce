import { colorTheme } from "./colors";
import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";


const customConfig = defineConfig({
  globalCss: {
    colors: {
      ...colorTheme, // Añade los colores personalizados
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: colorTheme.darkBlue,
      color: colorTheme.platinum,
    },
    "h1, h2, h3, h4, h5, h6": {
      margin: 0,
    },
    p: {
      margin: 0,
    },
  },
});

export const myNewTheme = createSystem(defaultBaseConfig, customConfig);
