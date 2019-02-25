import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button  } from '@material-ui/core'

const imgBase = "../../images/";

const GamesListItem = ({ sku, platform, title, img, editAction, delAction, urlPath }) => {

  return (
    <div className="games-list-item">
      <Card style={{maxWidth: 200}}>
        <CardActionArea>
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
    </div>
  );
};

GamesListItem.propTypes = {
  sku: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default GamesListItem;