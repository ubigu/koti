import React, { useRef } from "react";
import Layout from "../components/Layout";
import Some from "../components/Some";
import Partners from "../components/Partners";
import Features from "../components/Features";
import { useIntl } from "gatsby-plugin-intl";

import "./../components/ring1.scss";
import Ring1b from "./../img/ring1b.inline.svg";
import Ring1a from "./../img/ring1a.inline.png";

import logo from "./../img/logo.svg";

/** MUI */
import {
  Fab,
  Hidden,
  Typography,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    fab: {
      color: "#FFF",
      marginTop: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 16,
        marginBottom: 32,
      },
    },
    fab4: {
      color: "#FFF",
      position: "absolute",
      bottom: 48,
    },
    fabHolder: {
      display: "flex",
      justifyContent: "center",
    },
    section: {
      padding: "3rem 1.5rem",
    },
    jumbotron: {
      position: "relative",
      display: "flex",
      height: "calc(100vh - 52px)",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
      [theme.breakpoints.only("sm")]: {
        justifyContent: "flex-start",
        paddingTop: 8,
      },
    },
    ring: {
      position: "absolute",
      [theme.breakpoints.down("xs")]: {
        height: 350,
      },
      [theme.breakpoints.only("sm")]: {
        height: 600,
      },
      [theme.breakpoints.up("md")]: {
        height: 800,
      },
      transition: "filter 2s",
      maxWidth: "none",
      maxHeight: "none",
    },
    span: {
      position: "absolute",
      paddingTop: 92,
      [theme.breakpoints.down("xs")]: {
        height: 350,
      },
      [theme.breakpoints.only("sm")]: {
        height: 600,
        paddingTop: 0,
      },
      [theme.breakpoints.up("md")]: {
        height: 800,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: 0,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    typography: {
      color: "#3c3c3c",
      marginTop: 0,
      padding: "0.25em",
      fontFamily: "titillium web !important",
      lineHeight: 1.5,
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        bottom: 92,
      },
      [theme.breakpoints.only("sm")]: {
        position: "absolute",
        bottom: 132,
        fontSize: "1.25em",
      },
      [theme.breakpoints.up("md")]: {
        position: "relative",
        maxWidth: 200,
      },
    },
    logo: {
      [theme.breakpoints.down("xs")]: {
        height: 50,
      },
      [theme.breakpoints.only("sm")]: {
        height: 60,
      },
      [theme.breakpoints.up("md")]: {
        height: 70,
      },

      userSelect: "none",
    },
    logoXS: {
      position: "absolute",
      top: 72,
      zIndex: 2,
      height: 60,
    },
    divider: {
      marginLeft: 64,
      marginRight: 64
    }
  };
});

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
};

const IndexPage = () => {
  const intl = useIntl();
  const featureRef = useRef(null);
  const descRef = useRef(null);
  const classes = useStyles();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  const motto = (
    <Typography
      variant="subtitle1"
      className={classes.typography}
      align="center"
    >
      {intl.formatMessage({
        id: "motto",
        defaultMessage: "Builders of a spatial information society",
      })}
    </Typography>
  );

  const ringArrow = (
    <Fab
      color="primary"
      className={classes.fab}
      onClick={() => scrollToRef(descRef)}
    >
      <ArrowDownward />
    </Fab>
  );

  return (
    <Layout>
      <div>
        <div className={classes.jumbotron}>
          <Hidden smUp>
            <img src={logo} alt="Ubigu" className={classes.logoXS} />
          </Hidden>
          <img src={Ring1a} id="countryObjects" alt='main visual' className={classes.ring}></img>
          <Ring1b className={classes.ring} />
          <span className={classes.span}>
            <Hidden xsDown>
              <img src={logo} alt="Main visual animation" className={classes.logo} />
              <Hidden smDown>{motto}</Hidden>
            </Hidden>
            <Hidden only="sm">{ringArrow}</Hidden>
          </span>
          <Hidden mdUp>{motto}</Hidden>
          {sm && (
            <Fab
              color="primary"
              className={classes.fab4}
              onClick={() => scrollToRef(descRef)}
            >
              <ArrowDownward />
            </Fab>
          )}
        </div>
        <Divider variant="middle" className={classes.divider}/>
        <section className={classes.section} ref={descRef}>
          <div className="container">
            <div className="section" style={{ paddingBottom: 0 }}>
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">
                          {intl.formatMessage({
                            id: "short_description",
                          })}
                        </h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">
                          {intl.formatMessage({
                            id: "long_description",
                          })}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div ref={featureRef}>
        <Features />
      </div>
      <Divider variant="middle" className={classes.divider} />
      <Some />
      <Divider variant="middle" className={classes.divider}/>
      <Partners />
    </Layout>
  );
};

export default IndexPage;
