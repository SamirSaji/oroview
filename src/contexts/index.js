import React from "react";
import { Themes, DrawerProps } from "../utils";

/**
 * ThemeContext store the current theme of the app,which is provided
 * at the /src/App.js using the /src/App.theme.js.
 */
export let ThemeContext = React.createContext({
  name: Themes.default,
  setTheme: () => null,
});

/**
 * DrawerContext store the props of the Drawer component, which is provided at the /src/App.js using
 * the /src/App.drawer.js
 */
export const DrawerContext = React.createContext({
  open: true,
  direction: DrawerProps.direction.right,
  variant: DrawerProps.variant.temporary,
  onClose: () => null,
  setDrawer: () => null,
});
