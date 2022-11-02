import { Box, Grid } from "@mui/material";
import Content from "./Content";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={1.5}>
          <Sidebar />
        </Grid>
        <Grid item xs={10.5}>
          <Content />
        </Grid>
      </Grid>
    </Box>
  );
};
export default MainPage;
