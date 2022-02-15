import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/Bands';
import { connect } from 'react-redux';
import BandName from '../components/BandName';

class BandsContainer extends Component {

  renderBandNames = () => this.props.bands.map((obj) => <BandName key={obj.name} name={obj.name} />)
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBandNames()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);
