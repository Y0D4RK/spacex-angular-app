export interface Launchpad {
  'id'?: string;
  'full_name'?: string;
  'status'?: string;
  'location'?: {
    'name'?: string,
    'region'?: string,
    'latitude'?: number,
    'longitude'?: number
  };
  'vehicles_launched'?: string[];
  'details'?: string;
}
