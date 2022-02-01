import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: "#555",
  fontSize: 16,
}));

const Rightbar = () => {
  return (
    <Container sx={{ ml: 0, position: "sticky", top: 0, right: 0 }}>
      <Box>
        <Typography>Online Friends</Typography>
        <AvatarGroup max={5} sx={{ display: "flex", justifyContent: "start" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/6.jpg"
          />
        </AvatarGroup>
      </Box>

      <Box sx={{ mt: 10 }}>
        <Typography>Gallery</Typography>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          cols={3}
          rowHeight={180}
        >
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2"
              alt="sixth"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format&dpr=2"
              alt="fifth"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format&dpr=2"
              alt="forth"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2"
              alt="third"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format&dpr=2"
              alt="second"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format&dpr=2"
              alt="first"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>
      <Box>
        <Typography>Categories</Typography>
        <StyledLink href="#" underline="none">
          Sport
        </StyledLink>
        <StyledLink href="#" underline="none">
          Food
        </StyledLink>
        <StyledLink href="#" underline="none">
          Science
        </StyledLink>
        <Divider flexItem sx={{ width: "50%" }} />
        <StyledLink href="#" underline="none">
          Activities
        </StyledLink>
        <StyledLink href="#" underline="none">
          Life
        </StyledLink>
        <StyledLink href="#" underline="none">
          Others
        </StyledLink>
      </Box>
    </Container>
  );
};

export default Rightbar;
