import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "50%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const Search = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return !isSmall || props.show ? <SearchDiv {...props} /> : null;
};

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(["width", "background-color"]),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "100%",
        backgroundColor: alpha(theme.palette.common.white, 0.35),
      },
    },
  },
}));

const IconsWrapper = (props) => {
  return !props.show ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {props.children}
    </Box>
  ) : null;
};

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  // const theme = useTheme();
  // const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Trial Facebook-UI
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {" "}
            FB-UI
          </Typography>
        </Box>

        <Search show={showSearch}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <CloseIcon
              onClick={() => {
                setShowSearch(false);
              }}
              sx={{ display: !showSearch ? "none" : "flex" }}
            />
          </Box>
        </Search>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconsWrapper show={showSearch}>
            <SearchIcon
              onClick={() => setShowSearch(true)}
              sx={{
                display: !showSearch ? { xs: "flex", sm: "none" } : "flex",
              }}
            />
            <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
              <MailOutlineIcon />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
              <NotificationsIcon />
            </Badge>
            <Avatar
              alt="main-avatar"
              src="/static/images/avatar/main-avatar.png"
            />
          </IconsWrapper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
