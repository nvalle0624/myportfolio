import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
  },
}));

function Navigation(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [selectPage, setSelectPage] = useState("/");

  const handleSelectPage = () => {
    setSelectPage(window.location.pathname);
    let choices = Array.from(document.getElementsByClassName("menuItem"));
    console.log(choices);
    for (let i of choices) {
      if (i.id === selectPage) {
        i.className += " current";
      } else {
        i.className = i.className.replace(" current", "");
      }
    }
  };

  useEffect(() => {
    handleSelectPage(window.location.pathname);
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    let choices = Array.from(document.getElementsByClassName("menuItem"));
    for (let i of choices) {
      i.className = i.className.replace(" current", "");
    }
    handleSelectPage();
    setSelectPage(pageURL);
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Home",
      pageURL: "/",
    },
    {
      title: "Projects",
      pageURL: "/projects",
    },
    {
      title: "About Me",
      pageURL: "/aboutme",
    },
    {
      title: "Contact",
      pageURL: "/contact",
    },
    {
      title: "Resumé",
      pageURL: "/resume",
    },
  ];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" className={classes.title}>
              {}
            </Typography>
            <div className="navBtnContainer">
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map((menuItem) => {
                      const { title, pageURL } = menuItem;
                      return (
                        <MenuItem className="menuItem" onClick={() => handleMenuClick(pageURL)} key={title}>
                          {title}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </>
              ) : (
                // <IconButton disableRipple edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <div className={classes.headerOptions}>
                  {menuItems.map((menuItem) => {
                    const { title, pageURL } = menuItem;
                    return (
                      <div
                        className="menuItem"
                        variant="contained"
                        disableRipple
                        onClick={() => handleMenuClick(pageURL)}
                        key={pageURL}
                        id={pageURL}
                      >
                        {title}
                      </div>
                    );
                  })}
                </div>
                // </IconButton>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Navigation);
