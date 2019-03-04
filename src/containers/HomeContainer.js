import React, {Component} from 'react';
import AppFrame from "../components/layout/AppFrame";

class HomeContainer extends Component {


  render() {
    return (
      <div>
        <AppFrame
          header={'Home'}
          body={
            <div>
              Initial Display
            </div>

          } />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;