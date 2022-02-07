import React from "react";
import Box from "@mui/material/Box";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        background: `url(photographer.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
    >
      <Box
        style={{ border: "1px solid  white", height: "100px", width: "300px" }}
      >
        save from there
      </Box>
    </Box>
  );
};

export default Banner;
