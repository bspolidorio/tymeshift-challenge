import { LocationDTO } from '../dtos/Location';
import { mapLocationDTOtoModel } from '../mappers/LocationMapper';
import { LocationModel } from '../models/LocationModel';

export const fetchLocationList = (): Promise<LocationModel[]> =>
  new Promise<LocationModel[]>((resolve) => {
    fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
      .then((res) => res.json())
      .then((location: LocationDTO[]) =>
        resolve(mapLocationDTOtoModel(location)),
      )
      .catch((e) => console.error('Error in Location Service', e));
  });
