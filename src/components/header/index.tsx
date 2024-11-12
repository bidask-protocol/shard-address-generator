import { FC, useEffect, useState } from "react";
import { AppBar } from "@mui/material";
import { LogoIcon } from "@src/icons";
import { Toolbar } from "./styles";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      sx={{
        background: "transparent",
        transition: "background 0.3s ease",
        backdropFilter: isScrolled ? "blur(50px)" : null,
        boxShadow: "none",
        zIndex: 9,
      }}
    >
      <Toolbar disableGutters>
        <LogoIcon />
      </Toolbar>
    </AppBar>
  );
};
