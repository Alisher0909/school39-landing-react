import "@mui/material";
import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
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
