import "@mui/material";

declare module "@mui/material" {
  interface Palette {
    surface: {
      main: string;
      variant: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      main: string;
      variant: string;
    };
  }
}
