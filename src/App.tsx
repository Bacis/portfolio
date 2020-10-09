import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </ThemeProvider>
  );
};

export default App;
