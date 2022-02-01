import { Container, Typography } from "@mui/material";
import {
  Home,
  Person,
  List,
  Camera,
  Apps,
  Collections,
  Storefront,
  Settings,
  Logout,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ItemDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.primary,
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  "& > *": {
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));

const Leftbar = () => {
  return (
    <Container
      sx={(theme) => ({
        border: "1px solid grey",
        height: "100vh",
        position: "sticky",
        top: 0,
        ml: 0,
        [theme.breakpoints.down("sm")]: {
          bgcolor: "primary.main",
          height: "100vh",
          color: "white",
        },
      })}
    >
      <ItemDiv>
        <StyledIcon>
          <Home />
        </StyledIcon>
        <StyledTypo>Home</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Person />
        </StyledIcon>
        <StyledTypo>Friends</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <List />
        </StyledIcon>
        <StyledTypo>Lists</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Camera />
        </StyledIcon>
        <StyledTypo>Camera</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Apps />
        </StyledIcon>
        <StyledTypo>Apps</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Collections />
        </StyledIcon>
        <StyledTypo>Collections</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Storefront />
        </StyledIcon>
        <StyledTypo>Market places</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Settings />
        </StyledIcon>
        <StyledTypo>Settings</StyledTypo>
      </ItemDiv>
      <ItemDiv>
        <StyledIcon>
          <Logout />
        </StyledIcon>
        <StyledTypo>Logout</StyledTypo>
      </ItemDiv>
    </Container>
  );
};

export default Leftbar;
