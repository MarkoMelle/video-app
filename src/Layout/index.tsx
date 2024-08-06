import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Box sx={{ backgroundColor: "#10141F", 
    display: "flex",
    flexDirection : {
      xs: "column",
      lg: "row",
    },
    color: "white",
    padding: 3,
    gap: 3,
    overflowY: "hidden",
    height: "100vh"
  }}>{children}</Box>;
};

export default Layout;
