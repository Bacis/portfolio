import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    mainColor: string;
  }
}

export const defaultTheme: DefaultTheme = {
  backgroundColor: "#F2F2F2",
  mainColor: "#686868",
};
