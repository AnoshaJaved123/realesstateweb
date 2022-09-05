import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import theme from '../../src/theme/theme'
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import mongoose from "mongoose";
import Agents from '../../modules/Agents'
const Allorder = ({agent}) => {
  // console.log('orders',orders)
  return (
    <ThemeProvider theme={theme}>
    <style jsx global>{`
        Footer {
          display: none;
        }
       `}</style>
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductPerfomance agent={agent} />
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
  )
}
export const getServerSideProps = async () => {
  mongoose.connect(process.env.MONGO_URL)
  let agent = await Agents.find()
  return { 
    props: {agent: JSON.parse(JSON.stringify(agent))}
  };
  // try-catch removed for simplification
};
export default Allorder