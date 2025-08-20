import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = (
    <List>
      <ListItem>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" component={Link} to="/customers">
          Customers
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" component={Link} to="/shopping-history">
          Shopping History
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" component={Link} to="/due-system">
          Due System
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" component={Link} to="/revenue">
          Revenue
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rice Shop
        </Typography>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>{navLinks}</Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          {navLinks}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
