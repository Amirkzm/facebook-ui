import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar></Leftbar>
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
