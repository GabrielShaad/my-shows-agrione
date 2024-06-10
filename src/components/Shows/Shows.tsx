import { Grid } from "@mui/material";

function Shows() {
  return (
    <section>
      <Grid
        container
        padding={2}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{ height: "200px", width: "100%", backgroundColor: "red" }}
          ></div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{ height: "200px", width: "100%", backgroundColor: "red" }}
          ></div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{ height: "200px", width: "100%", backgroundColor: "red" }}
          ></div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{ height: "200px", width: "100%", backgroundColor: "red" }}
          ></div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{ height: "200px", width: "100%", backgroundColor: "red" }}
          ></div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Shows;
