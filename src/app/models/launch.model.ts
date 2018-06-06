import { Rocket } from './rocket.model';

export interface Launch {
  'flight_number'?: number;
  'mission_name'?: string;
  'launch_year'?: string;
  'launch_date_unix'?: number;
  'launch_date_utc'?: string;
  'launch_date_local'?: string;
  'rocket'?: Rocket;
  'telemetry'?: {
      'flight_club'?: string
  };
  'reuse'?: {
    'core'?: boolean,
    'side_core1'?: boolean,
    'side_core2'?: boolean,
    'fairings'?: boolean,
    'capsule'?: boolean
  };
  'launch_site'?: {
    'site_id'?: string,
    'site_name'?: string,
    'site_name_long'?: string
  };
  'launch_success'?: boolean;
  'links'?: {
    'mission_patch'?: string,
    'mission_patch_small'?: string,
    'article_link'?: string,
    'wikipedia'?: string,
    'video_link'?: string
  };
  'details'?: string;
}
