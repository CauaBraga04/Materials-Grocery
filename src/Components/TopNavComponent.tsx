import React from "react";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";


function TopNavComponent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div id="Main">
        <h1>Grocery List Manager</h1>
      </div>
      <button onClick={toggleDrawer(true)}>Open drawer</button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        Hello, this is the drawer content!
        <br />
        <Button>Primary</Button>
        <br />
        <Button>Secondary</Button>
      </Drawer>
    </>
  );
}

export default TopNavComponent;
