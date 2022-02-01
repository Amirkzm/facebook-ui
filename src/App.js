import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Addpost from "./components/AddPost";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar></Leftbar>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid
          item
          sm={3}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        >
          <Rightbar />
        </Grid>
      </Grid>
      <Addpost />
    </div>
  );
}

export default App;
