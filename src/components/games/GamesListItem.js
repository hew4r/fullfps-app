import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'
import { Paper, Grid, ButtonBase, Typography } from '@material-ui/core';

/*import {
  Card,
    CardHeader,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button  } from '@material-ui/core'*/

const imgBase = "../../images/";

const GamesListItem = ({ sku, platform, title, img, price, editAction, delAction, urlPath }) => {

  return (

      <div className="games-list-item">

        <Paper className="paper">

          <Grid container spacing={24}>
            <Grid item>
                <NavLink to={`${urlPath}${sku}`} className="link">
                  <ButtonBase className="image">
                      <img className="img" src={img} alt={`${sku} ${title}`} title={title}/>
                  </ButtonBase>
                </NavLink>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                        {title}
                    </Typography>
                    <Typography gutterBottom>{platform}</Typography>
                    <Typography color="textSecondary"> {`SKU: ${sku}`} </Typography>
                </Grid>
                <Grid item>
                    <Typography className="action">{ editAction }</Typography>
                    <Typography className="action">{ delAction }</Typography>
                </Grid>
              </Grid>

              <Grid item>
                  <Typography variant="subtitle1">{ price }</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

      </div>

    /*



    <div className="games-list-item">
    <Card style={{maxWidth: 200}}>
        <CardActionArea>

            <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                className={classes.cardHeader}
            />




            <Link to={`${urlPath}${sku}`}>
            <CardMedia
              component="img"
              alt={`${sku} ${title}`}
              style={{maxHeight: 200}}
              src={img}
              title={title}
            />
          </Link>
          
          <CardContent>
            <Typography>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`${urlPath}${sku}/edit`}>
            <Button variant="contained" size="small" color="primary">{editAction}</Button>
          </Link>
  
          <Link to={`${urlPath}${sku}/del`}>
            <Button variant="contained" size="small" color="primary" >
              {delAction}
            </Button>
          </Link>
         
        </CardActions>
      </Card>
    </div>*/
  );
};

GamesListItem.propTypes = {
  sku: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default GamesListItem;