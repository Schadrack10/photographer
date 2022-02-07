import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          border: "1px solid  white",
          padding: "20px",
          dipslay: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" align="center" sx={{ color: "white" }}>
          JANE DOE
        </Typography>
        <Typography
          variant="p"
          sx={{ color: "white", margin: "0 50px", fontSize: "25px" }}
        >
          PHOTOGRAPHER
        </Typography>
      </Box>

      <Box
        sx={{
          height: "100px",
          width: "100%",
          position: "absolute",
          marginTop: "500px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"

        }}
      >
        <ButtonGroup
        sx={{border:"none"}}
          variant="contained"
        >
          <Button sx={{background:"green",border:"none",'&:hover':{
            background:"darkgreen"
          }}}>Home</Button>
          <Button sx={{background:"green",border:"none",'&:hover':{
            background:"green"
          }}}>Portfolio</Button>
          <Button sx={{background:"green",border:"none",'&:hover':{
            background:"darkgreen"
          }}}>Contact</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Banner;
