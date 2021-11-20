import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding button component={Link} to="/cliente">
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Cliente" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding button component={Link} to="/vendedor">
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Vendedor" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding button component={Link} to="/habitacion">
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Habitación" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default MenuList;
