import { LocationModel } from '../../api/models/LocationModel';

import {
  Card,
  EditIconContainer,
  LocationDetails,
  LocationDetailsContainer,
  LocationTitle,
} from './LocationCard.styles';
import Users from '../../assets/Users.svg';
import Timezone from '../../assets/Timezone.svg';
import Views from '../../assets/Views.svg';
import Edit from '../../assets/Edit.svg';

export interface OwnProps {
  location: LocationModel;
  onClick: (location: LocationModel) => void;
}

type Props = OwnProps;

const LocationCard: React.FC<Props> = ({ location, onClick }) => {
  const handleCardClick = () => {
    location.views++;
    onClick(location);
  };

  const DateFormat = "h:ma ('GMT'ZZ)";

  return (
    <Card onClick={() => handleCardClick()}>
      <EditIconContainer>
        <img src={Edit} alt="Edit icon" />
      </EditIconContainer>
      <LocationTitle>{location.name}</LocationTitle>
      <LocationDetailsContainer>
        <LocationDetails>
          <img src={Users} alt="Users icon" />
          {location.userCount} Users
        </LocationDetails>
        <LocationDetails>
          <img src={Timezone} alt="Timezone icon" />
          {location && location.createdAt.toFormat(DateFormat)}
        </LocationDetails>
        <LocationDetails>
          <img src={Views} alt="Views icon" />
          {location.views} Views
        </LocationDetails>
      </LocationDetailsContainer>
    </Card>
  );
};

export default LocationCard;
