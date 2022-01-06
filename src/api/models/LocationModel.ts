import { DateTime } from 'luxon';

export interface LocationModel {
  id: string;
  createdAt: DateTime;
  name: string;
  userCount: number;
  description: string;
  views: number;
}
