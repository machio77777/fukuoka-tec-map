import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Kosugi Maru",
    ].join(","),
  },
  palette: {
    primary: { main: colors.red[400] },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    pageTitle: {
      marginBottom: theme.spacing(1),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  })
);

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        TaNA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const GenericTemplate = ({ children, title }) => {

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Fukuoka Tec Map
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              noWrap
              className={classes.pageTitle}
            >
              {title}
            </Typography>
            {children}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default GenericTemplate;