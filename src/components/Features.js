import React from 'react'
import { Link } from 'gatsby'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl' //eslint-disable-line
import { Grid } from '@material-ui/core';
import { List, ListItem, ListItemText, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import support from "./../img/support.svg";
import plan from "./../img/plan.svg";
import design from "./../img/design.svg";

const useStyles = makeStyles(theme => {
  return {
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
    list: {
      justifyContent: 'center'
    },
    typography: {
      textAlign: 'center'
    },
    listItem: {
      justifyContent: 'center'
    },
    imgContainer: {
      height: 150,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    buttonRoot: {
      borderRadius: "2em",
      textTransform: 'none',
      width: 250,
      fontWeight: 400,
      margin: theme.spacing(2),
      transition: "background-color 0.75s, color 0.5s",
      "&:hover": {
        backgroundColor: "#00b4a2",
        color: '#FFF',
        transition: "background-color 0.75s, color 0.5s"
      }
    },
  }
})

const FeatureGrid = () => {

  const intl = useIntl();
  const classes = useStyles()
  const c = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
  const s = ['s1', 's2', 's3', 's4', 's5', 's6']
  const d = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <Grid container justify='center' spacing={4} style={{ marginBottom: 32 }}>
          <Grid item xs={12}>

            <Typography variant='h5' align='center'>
              {intl.formatMessage({
                id: "what_we_do",
              })}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} direction='column'>
            <div className={classes.imgContainer}>
              <img src={plan} style={{ height: 150 }} alt='planning'/>
            </div>
            <Typography variant='h5' align='center'>
              {intl.formatMessage({ id: 'consulting' })}
            </Typography>
            <List dense classes={{ root: classes.list }}>
              {c.map(item => (
                <ListItem classes={{ root: classes.listItem }}>
                  <ListItemText classes={{ root: classes.typography }}
                    primary={intl.formatMessage({ id: item })}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4} direction='column'>
            <div className={classes.imgContainer}>
              <img src={support} style={{ height: 150 }} alt='supporting'/>
            </div>
            <Typography variant='h5' align='center'>
              {intl.formatMessage({ id: 'supporting' })}
            </Typography>
            <List dense classes={{ root: classes.list }}>
              {s.map(item => {
                return <ListItem classes={{ root: classes.listItem }}>
                  <ListItemText classes={{ root: classes.typography }}
                    primary={intl.formatMessage({ id: item })}
                  />
                </ListItem>
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={4} direction='column'>
            <div className={classes.imgContainer}>
              <img src={design} style={{ height: 150 }} alt='developing'/>
            </div>
            <Typography variant='h5' align='center'>
              {intl.formatMessage({ id: 'developing' })}
            </Typography>
            <List dense classes={{ root: classes.list }}>
              {d.map(item => {
                return <ListItem classes={{ root: classes.listItem }}>
                  <ListItemText classes={{ root: classes.typography }}
                    primary={intl.formatMessage({ id: item })}
                  />
                </ListItem>
              })}
            </List>
          </Grid>
          <Link to={`/${currentLocale}/products`}>
            <Button
              variant='outlined'
              classes={{ root: classes.buttonRoot }}
            >
              {intl.formatMessage({ id: "read_more", defaultMessage: "read_more" })}
            </Button>
          </Link>

        </Grid>
      }
    </IntlContextConsumer>
  )

}

export default FeatureGrid