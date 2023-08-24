import React, {useState} from "react";
import {AppBar, Box, Link, List, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Facebook, Instagram, Twitter,} from "@mui/icons-material/";
import {useAppSelector} from "../../redux/hooks";


const Navbar = () => {

  const user = useAppSelector(state => state.userInfo);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(List)({
    display: "flex",
    gap: 30,
  });
 
  const MenuItems = [
    { Name: "For Home", Link: "/" },
    { Name: "For Business", Link: "#" },
    { Name: "Services", Link: "#" },
    { Name: "Our Story", Link: "#" },
    { Name: "View Schedule", Link: user.id ? "/appointment" : "/login" },
    { Name: "My Account", Link: user.id ? "/dashboard" : "/login" },
    { Name: "Blog/News", Link: "#" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "#2c3e50" }} position={"static"}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>

          {MenuItems.map((item,index) => (

            <Typography
                key={index}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}

            >
              <Link href={item.Link} >
              {item.Name}
              </Link>
            </Typography>

          ))}

        </MenuBox>

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item,index) => (
            <MenuItem
                key={index}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

