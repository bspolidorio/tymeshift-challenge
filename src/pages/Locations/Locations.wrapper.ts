import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { fetchLocations } from '../../redux/locations/actions';
import { getLocationsSelector } from '../../redux/locations/selectors';
import { RootState } from '../../redux/types';
import Locations, { DispatchProps, StateProps } from './Locations';

const mapStateToProps = (state: RootState): StateProps => ({
  locations: getLocationsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getLocations: () => dispatch(fetchLocations.request({})),
});

const LocationWrapper: React.FC = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Locations);

export default LocationWrapper as React.FC;
