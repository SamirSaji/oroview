import React from "react";

import AppErrorBoundary from "./App.errorBoundary";
import RouterApp from "./router";
import AppDrawer from "./App.drawer";
import AppTheme from "./App.theme";
import AuthContextProvider from "./App.auth";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <AppErrorBoundary>
      <AppTheme>
        <CssBaseline />
        <AppDrawer>
          <AuthContextProvider>
            <RouterApp />
          </AuthContextProvider>
        </AppDrawer>
      </AppTheme>
    </AppErrorBoundary>
  );
};
export default App;
