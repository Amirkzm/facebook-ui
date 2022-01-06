import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={7}></Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
