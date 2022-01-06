import { useEffect, useState } from 'react';
import { LocationModel } from '../../api/models/LocationModel';
import { Header } from '../../components/Header';
import { LocationCard } from '../../components/LocationCard';
import { LocationModal } from '../../components/LocationModal';
import { AllLocationsContainer, Container } from './Locations.styles';

export interface StateProps {
  locations?: LocationModel[];
}

export interface DispatchProps {
  getLocations: () => void;
}

type Props = StateProps & DispatchProps;

const Locations: React.FC<Props> = ({ locations, getLocations }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [locationModalInfo, setLocationModalInfo] = useState<
    LocationModel | undefined
  >(undefined);

  useEffect(() => {
    if (!locations) getLocations();
  }, [locations, getLocations]);

  return locations ? (
    <>
      <LocationModal
        isOpen={isModalOpen}
        location={locationModalInfo}
        onClose={() => setIsModalOpen(false)}
      />
      <Container>
        <Header
          ctaBackText="All Locations"
          locationName="ACME Locations"
        ></Header>
        <AllLocationsContainer>
          {locations.map((location) => (
            <LocationCard
              location={location}
              key={location.id}
              onClick={(location) => {
                setLocationModalInfo(location);
                setIsModalOpen(true);
              }}
            />
          ))}
        </AllLocationsContainer>
      </Container>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Locations;
