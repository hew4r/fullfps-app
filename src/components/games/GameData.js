import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActionArea, CardContent, CardMedia, Typography, Button} from "@material-ui/core";
import GamesActions from "./GamesActions";

const GameData = ({name, platform, modelNumber, sku,
                    releaseDate, price, softwareFormat, genre,
                    developer, publisher, brand, edition, multiplayer,languages, urlLgImage, onBack}) => {
  
  
  return (
    <div className="game-data">
  
      <Card className="game-detail-card">
          <CardActionArea>
        
            <CardMedia
              className="media"
              component="img"
              alt={`${sku} ${name}`}
              image={urlLgImage}
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
                {`Model Number: ${modelNumber}`}
              </Typography>
              <Typography component="p">
                {`SKU: ${sku}`}
              </Typography>
              <Typography component="p">
                {`Release Date: ${releaseDate}`}
              </Typography>
              <Typography component="p">
                {`Price: ${price}`}
              </Typography>
              <Typography component="p">
                {`Software Format: ${softwareFormat}`}
              </Typography>
           
              <Typography component="p">
                {`Developer: ${developer}`}
              </Typography>
              <Typography component="p">
                {`Publisher: ${publisher}`}
              </Typography>
              <Typography component="p">
                {`Brand: ${brand}`}
              </Typography>
              <Typography component="p">
                {`Edition: ${edition}`}
              </Typography>
              <Typography component="p">
                {`Multiplayer: ${multiplayer}`}
              </Typography>
     
              
              
 
            </CardContent>
          </CardActionArea>
    
     
        
      </Card>
      
      <GamesActions>
        <Button onClick={onBack}>
          Volver
        </Button>
      </GamesActions>
      
      
    </div>
  );
};

GameData.propTypes = {

    name: PropTypes.string.isRequired,
    platform: PropTypes.object.isRequired,
    modelNumber: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    softwareFormat: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    edition: PropTypes.string.isRequired,
    multiplayer: PropTypes.string.isRequired,
    urlLgImage: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,

};

export default GameData;