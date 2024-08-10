import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/sidebar";
import { scrollbarStyles } from "../scrollbarStyles";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        padding: 3,
        paddingBottom: 0,
        gap: 3,
        overflowY: "hidden",
        overflowX: "hidden",
        height: "calc(100vh - 24px)",
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", overflowY: "scroll", ...scrollbarStyles }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
