export interface WantedResultSet {
  total: number;
  page: number;
  items: WantedPerson[];
}

export interface GetWantedParams {
  page?: number;
  pageSize?: number;
  title?: string;
}

interface WantedFile {
  url: string | null;
  name: string | null;
}

interface WantedImage {
  caption: string | null;
  original: string | null;
  large: string | null;
  thumb: string | null;
}

interface WantedPerson {
  pathId: string | null;
  uid: string | null;
  title: string | null;
  description: string | null;
  images: WantedImage[] | null;
  files: WantedFile[] | null;
  warning_message: string | null;
  remarks: string | null;
  details: string | null;
  additional_information: string | null;
  caution: string | null;
  reward_text: string | null;
  reward_min: number | null;
  reward_max: number | null;
  dates_of_birth_used: string[] | null;
  place_of_birth: string | null;
  locations: string[] | null;
  field_offices: string[] | null;
  legat_names: string[] | null;
  status: string | null;
  person_classification: string | null;
  poster_classification: string | null;
  ncic: string | null;
  age_min: number | null;
  age_max: number | null;
  weight_min: number | null;
  weight_max: number | null;
  height_min: number | null;
  height_max: number | null;
  eyes: string | null;
  hair: string | null;
  build: string | null;
  sex: string | null;
  race: string | null;
  nationality: string | null;
  scars_and_marks: string | null;
  complexion: string | null;
  occupations: string[] | null;
  possible_countries: string[] | null;
  possible_states: string[] | null;
  modified: string | null;
  publication: string | null;
  path: string | null;
}
