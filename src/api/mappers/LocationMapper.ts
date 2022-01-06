import { DateTime } from 'luxon';
import { LocationDTO } from '../dtos/Location';
import { LocationModel } from '../models/LocationModel';

export const mapLocationDTOtoModel = (dto: LocationDTO[]): LocationModel[] =>
  dto.map((location) => ({
    ...location,
    createdAt: DateTime.fromISO(location.createdAt),
    views: 0,
  }));
