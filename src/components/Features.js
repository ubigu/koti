import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
  }
})

const FeatureGrid = () => {

  const classes = useStyles()

  return (
    <Grid container justify='center' style={{height: 400}}>
      <Grid item xs={12} md={4} className={classes.gridItem}>
      </Grid>
      <Grid item xs={12} md={4}>Jaska</Grid>
      <Grid item xs={12} md={4}>Teppo</Grid>
    </Grid>
  )

}

export default FeatureGrid