import React from 'react';
import clsx from 'clsx';
import Leaflet from 'leaflet'
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import 'leaflet/dist/leaflet.css';
import LeafletMap from '../atoms/map/LeafletMap';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const useStyles = makeStyles((theme) => ({
  mapPaper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  campanyPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightWide: {
    height: 700,
  },
  //fixedHeightNarrow: {
  //  height: 310,
  //},
}));

const HomePage = () => {

  const classes = useStyles();  
  const fixedHeightPaperWide = clsx(classes.mapPaper, classes.fixedHeightWide);
  //const fixedHeightPaperNarrow = clsx(classes.campanyPaper, classes.fixedHeightNarrow);

  return (
    <GenericTemplate title="">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperWide}>
              <LeafletMap />
            </Paper>
          </Grid>
          {/*
          <Grid item xs={12} md={4} lg={4}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaperNarrow}>
                <div>準備中</div>
              </Paper>
            </Grid>
            <br/>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaperNarrow}>
                <div>準備中</div>
              </Paper>
            </Grid>
          </Grid>
          */}
        </Grid>
      </Container>
    </GenericTemplate>
  )
};

export default HomePage;

