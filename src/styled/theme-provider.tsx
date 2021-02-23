import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "@styled/theme";

const ThemeProviderContainer: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderContainer;
