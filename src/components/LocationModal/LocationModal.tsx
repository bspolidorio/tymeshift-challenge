import { LocationModel } from '../../api/models/LocationModel';

import {
  Modal,
  CloseIconContainer,
  LocationDetails,
  LocationDetailsContainer,
  LocationTitle,
  ModalContainer,
  DescriptionTitle,
  DescriptionText,
  DoneBtn,
  DoneBtnContainer,
} from './LocationModal.styles';
import Users from '../../assets/Users.svg';
import Timezone from '../../assets/Timezone.svg';
import Views from '../../assets/Views.svg';
import Close from '../../assets/Close.svg';

export interface LocationModalProps {
  location?: LocationModel;
  isOpen: boolean;
  onClose: () => void;
}

export type OwnProps = LocationModalProps;

type Props = OwnProps;

const LocationModal: React.FC<Props> = ({ location, isOpen, onClose }) => {
  const DateFormat = "h:ma ('GMT'ZZ)";
  return (
    <ModalContainer isOpen={isOpen}>
      <Modal>
        <CloseIconContainer onClick={onClose}>
          <img src={Close} alt="Close icon" />
        </CloseIconContainer>
        <LocationTitle>{location && location.name}</LocationTitle>
        <LocationDetailsContainer>
          <LocationDetails>
            <img src={Users} alt="Users icon" />
            {location && location.userCount} Users
          </LocationDetails>
          <LocationDetails>
            <img src={Timezone} alt="Timezone icon" />
            {location && location.createdAt.toFormat(DateFormat)}
          </LocationDetails>
          <LocationDetails>
            <img src={Views} alt="Views icon" />
            {location?.views} Views
          </LocationDetails>
          <DescriptionTitle>Description</DescriptionTitle>
          <DescriptionText>{location?.description}</DescriptionText>
        </LocationDetailsContainer>
        <DoneBtnContainer>
          <DoneBtn onClick={onClose}>Done</DoneBtn>
        </DoneBtnContainer>
      </Modal>
    </ModalContainer>
  );
};

export default LocationModal;
