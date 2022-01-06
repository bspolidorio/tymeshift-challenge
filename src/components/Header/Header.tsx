import {
  Container,
  CTABackContainer,
  LocationNameContainer,
} from './Header.styles';

export interface OwnProps {
  ctaBackText: string;
  locationName: string;
}

type Props = OwnProps;

const Header: React.FC<Props> = ({ locationName, ctaBackText }) => {
  return (
    <Container>
      <CTABackContainer onClick={() => alert('Going back to All locations')}>
        {ctaBackText}
      </CTABackContainer>
      <LocationNameContainer>{locationName}</LocationNameContainer>
    </Container>
  );
};

export default Header;
