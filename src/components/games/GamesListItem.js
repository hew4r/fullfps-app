import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button  } from '@material-ui/core'

const GamesListItem = ({ sku, name, urlImg, platform ,releaseDate, price, editAction, delAction, urlPath }) => {
  
  return (
    <div>
      <Card className="game-card">
        
        <NavLink to={`${urlPath}${sku}`}>
          <CardActionArea>
     
            <CardMedia
              className="media"
              component="img"
              alt={`${sku} ${name}`}
              image={urlImg}
              title={name}
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography component="p">
                {platform.descPlatform}
              </Typography>
              <Typography component="p">
                {`Release Date: ${releaseDate}`}
              </Typography>
              <Typography component="p" variant="h4">
                {price}
              </Typography>
            </CardContent>
          </CardActionArea>

        </NavLink>
        <CardActions>
          
          <NavLink to={`${urlPath}${sku}/edit`}>
            <Button size="small" color="primary">
              {editAction}
            </Button>
          </NavLink>
          
          <NavLink to={`${urlPath}${sku}/del`}>
            <Button size="small" color="primary">
              {delAction}
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
};

GamesListItem.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  platform: PropTypes.object.isRequired,
  releaseDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default GamesListItem;