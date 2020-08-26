import React, { useState } from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import bg from './../../static/img/teambg.jpg'
import {
  Grid, Typography, Button, Collapse, Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Products from './../components/Products';
import support from "./../img/support.svg";
import plan from "./../img/plan.svg";
import design from "./../img/design.svg";

const useStyles = makeStyles(theme => ({
  jumbotron: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    objectFit: 'cover',
    display: 'flex',
    filter: 'hue-rotate(90deg)',
    opacity: 0.9,
    height: 300,
    width: '100vw',
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    userSelect: 'none',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      height: 200
    }
  },
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 250,
    margin: theme.spacing(2),
    minHeight: 150,
    [theme.breakpoints.up('md')]: {
      width: 300
    },
  },
  typography: {
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    }
  },
  holder: {
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(4)
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'center'
  },
  titleHolder: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleimg: {
    height: 200,
    marginBottom: 16
  },
  media: {
    borderRadius: 25,
    height: 150,
    maxWidth: 250,
    [theme.breakpoints.up('md')]: {
      maxWidth: 300
    },
  },
  imgCropper: {
    width: 150,
    height: 175,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10
  },
  cardHeader: {
    height: 72,
    minWidth: 250,
    userSelect: 'none'
  },
  cardTitle: {
    fontSize: 18,
  },
  typo: {
    margin: theme.spacing(4),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      fontSize: 14
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      fontSize: 14
    },
    userSelect: 'none'
  }
}));

const ProductPage = () => {

  const intl = useIntl();
  const classes = useStyles();
  const [expanded, setExpanded] = useState('planning');

  const createProduct = (item, locale) => {

    const { label, description, img } = item;

    return (
      <Card className={classes.cardRoot} elevation={0}>
        <div style={{ height: '100%' }}>
          <CardHeader
            classes={{ root: classes.cardHeader, title: classes.cardTitle }}
            title={label[locale]}
            titleTypographyProps={{
              align: 'center',
              variant: 'subtitle2',
              style: {fontSize: 14}
            }}
          />

          <CardActionArea style={{ top: 0 }}>
            <CardMedia
              className={classes.media}
              image={img}
              title={label[locale]}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" align='center'>
                {description[locale]}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
      </Card>
    )
  }

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <Layout>
          <div className={classes.jumbotron}>
            <Typography variant="h2" className={classes.typography}>
              {intl.formatMessage({ id: "ourservices", defaultMessage: "Our services" })}
            </Typography>
          </div>
          <div className={classes.holder}>
            <Grid container spacing={2}
              justify={'center'}>

              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='body1' align='center' className={classes.typo}>
                  {intl.formatMessage({ id: 'product_title' })}
                </Typography>
              </Grid>


              <Grid item xs={12} className={classes.flexGrid} >
                <div className={classes.titleHolder}>
                  {expanded === 'planning' &&
                    <img src={plan} className={classes.titleimg} alt='planning' />
                  }
                  <Button onClick={() => setExpanded('planning')} color='primary' style={{ textTransform: 'none' }}>
                    <Typography variant='h5' align='center' >
                      {intl.formatMessage({ id: 'consulting' })}
                    </Typography>
                  </Button>
                </div>
              </Grid>

              <Collapse in={expanded === 'planning'}>
                <Grid container spacing={2}>
                  {Products.filter(product => product.category === 'planning')
                    .map((product, index) => {
                      return (
                        <Grid key={`planning_${index}`} item xs={12} sm={6} md={4} className={classes.flexGrid}>
                          {createProduct(product, currentLocale)}
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Collapse>

              <Grid item xs={12} className={classes.flexGrid} >
                <div className={classes.titleHolder}>
                  {expanded === 'developing' &&
                    <img src={design} className={classes.titleimg} alt='developing' />
                  }
                  <Button onClick={() => setExpanded('developing')} color='primary' style={{ textTransform: 'none' }}>
                    <Typography variant='h5' align='center' >
                      {intl.formatMessage({ id: 'developing' })}
                    </Typography>
                  </Button>
                </div>
              </Grid>

              <Collapse in={expanded === 'developing'}>
                <Grid container spacing={2}>
                  {Products.filter(product => product.category === 'developing')
                    .map((product, index) => {
                      return (
                        <Grid key={`developing_${index}`} item xs={12} sm={6} md={4} className={classes.flexGrid}>
                          {createProduct(product, currentLocale)}
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Collapse>

              <Grid item xs={12} className={classes.flexGrid} >
                <div className={classes.titleHolder}>
                  {expanded === 'supporting' &&
                    <img src={support} className={classes.titleimg} alt='supporting' />
                  }
                  <Button onClick={() => setExpanded('supporting')} color='primary' style={{ textTransform: 'none' }}>
                    <Typography variant='h5' align='center' >
                      {intl.formatMessage({ id: 'supporting' })}
                    </Typography>
                  </Button>
                </div>
              </Grid>

              <Collapse in={expanded === 'supporting'}>
                <Grid container spacing={2}>
                  {Products.filter(product => product.category === 'supporting')
                    .map((product, index) => {
                      return (
                        <Grid key={`supporting_${index}`} item xs={12} sm={6} md={4} className={classes.flexGrid}>
                          {createProduct(product, currentLocale)}
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Collapse>

            </Grid>
          </div>
        </Layout>
      }
    </IntlContextConsumer >
  )
}

export default ProductPage