export interface CompanyEvent {
  'title'?: string;
  'dateTimeFormat'?: Date;
  'event_date_utc'?: string;
  'flight_number'?: number;
  'details'?: string;
  'links'?: {
    'reddit'?: string,
    'article'?: string,
    'wikipedia'?: string
  };
}
