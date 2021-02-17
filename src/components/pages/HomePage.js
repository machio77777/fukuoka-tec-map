import React from 'react';
import clsx from 'clsx';
import Leaflet from 'leaflet'
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SiteInfo from '../atoms/map/SiteInfo';
import Filter from '../atoms/map/Filter';
import LeafletMap from '../atoms/map/LeafletMap';

import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  mapPaper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  searchPaper: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightHead: {
    height: 140,
  },
  fixedHeightMap: {
    height: 700,
  },
}));

const HomePage = () =>  {
  
    const classes = useStyles();
    const fixedHeightPaperHead = clsx(classes.paper, classes.fixedHeightHead);
    const fixedHeightPaperSearch = clsx(classes.searchPaper, classes.fixedHeightHead);
    const fixedHeightPaperMap = clsx(classes.mapPaper, classes.fixedHeightMap);

    return (
      <GenericTemplate title="">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaperHead}>
                <SiteInfo />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaperSearch}>
                <Filter />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaperMap}>
                <LeafletMap />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </GenericTemplate>
    )
};

export default HomePage;