import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography align="center" variant="body2">
        Reddit Client &copy; {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
