import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import CameraIcon from "@mui/icons-material/Camera";
import AppsIcon from "@mui/icons-material/Apps";
import CollectionsIcon from "@mui/icons-material/Collections";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";

import { Typography } from "@mui/material";

const ItemDiv = styled("Div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2),
  alignItems: "center",
}));

const Leftbar = () => {
  return (
    <Container>
      <ItemDiv>
        <HomeIcon />
        <Typography>Home</Typography>
      </ItemDiv>
      <ItemDiv>
        <PersonIcon />
        <Typography>Friends</Typography>
      </ItemDiv>
      <ItemDiv>
        <ListIcon />
        <Typography>Lists</Typography>
      </ItemDiv>
      <ItemDiv>
        <CameraIcon />
        <Typography>Camera</Typography>
      </ItemDiv>
      <ItemDiv>
        <AppsIcon />
        <Typography>Apps</Typography>
      </ItemDiv>
      <ItemDiv>
        <CollectionsIcon />
        <Typography>Collections</Typography>
      </ItemDiv>
      <ItemDiv>
        <StorefrontIcon />
        <Typography>Market places</Typography>
      </ItemDiv>
      <ItemDiv>
        <SettingsIcon />
        <Typography>Settings</Typography>
      </ItemDiv>
      <ItemDiv>
        <LogoutIcon />
        <Typography>Logout</Typography>
      </ItemDiv>
    </Container>
  );
};

export default Leftbar;
