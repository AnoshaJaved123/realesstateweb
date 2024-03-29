import { Grid } from "@mui/material";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import FullLayout from '../../src/layouts/FullLayout'
import theme from '../../src/theme/theme'
import { ThemeProvider } from "@mui/material/styles";

export default function Index() {
  return (<>
    <ThemeProvider theme={theme}>
   
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <DailyActivity />
      </Grid>
   
      <Grid item xs={12} lg={12}>
        {/* <BlogCard /> */}
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
    </>
  );
}
