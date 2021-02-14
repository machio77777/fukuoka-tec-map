import React from 'react';
import clsx from 'clsx';
import Leaflet from 'leaflet'
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SiteInfo from '../atoms/utility/SiteInfo';
import Filter from '../atoms/utility/Filter';
import Company from '../atoms/utility/Company';
import LeafletMap from '../atoms/map/LeafletMap';

import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const useStyles = makeStyles((theme) => ({
  mapPaper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  companyPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paper: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeightHead: {
    height: 135,
  },
  fixedHeightMap: {
    height: 700,
  },
}));

const HomePage = () => {

  const classes = useStyles();
  const fixedHeightPaperHead = clsx(classes.paper, classes.fixedHeightHead);
  const fixedHeightPaperCompany = clsx(classes.companyPaper, classes.fixedHeightMap);
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
            <Paper className={fixedHeightPaperHead}>
              <Filter />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaperCompany}>
              <Company />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
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

