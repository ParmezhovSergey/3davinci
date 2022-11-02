import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import b from "../assets/b.png";
import user from "../assets/user.png";
import account from "../assets/account.png";
import basket from "../assets/basket.png";
import briefcase from "../assets/briefcase.png";
import cn from "../assets/cn.png";
import arrow from "../assets/arrow.png";

const Sidebar = () => {
  const [alignment, setAlignment] = React.useState("null");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={{
        color: "white",
        minHeight: "100vh",
        background: "linear-gradient(#301b70, #535da8)",
        position: "fixed",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
        padding: "0 30px",
      }}
    >
      <Box sx={{}}>
        <img src={b} width="50px" />
      </Box>

      <Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "start",
          }}
        >
          <ToggleButton value="user">
            <img src={user} width="30px" />
          </ToggleButton>
          <ToggleButton value="account">
            <img src={account} width="30px" />
          </ToggleButton>
          <ToggleButton value="basket">
            <img src={basket} width="30px" />
          </ToggleButton>
          <ToggleButton value="briefcase">
            <img src={briefcase} width="30px" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ToggleButton value="cn">
            <img src={cn} width="30px" />
          </ToggleButton>
          <ToggleButton value="arrow">
            <img src={arrow} width="30px" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
export default Sidebar;
