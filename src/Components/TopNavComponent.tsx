import React from "react";
import "./css/TopNavCSS.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";


function TopNavComponent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  return (
    <>
    <AppBar position="static">
      <div id="Main">
          <IconButton onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
        <h1 id="Title">Grocery List Manager</h1>
        <div></div>
      </div>
    </AppBar>  
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <br />
        <Button onClick={() => navigate("/current-list", {replace: true})}>Current List</Button>
        <br />
        <Button onClick={() => navigate("/all-lists", {replace: true})}>All Lists</Button>
        <br />
      </Drawer>
    </>
  );
}

export default TopNavComponent;
