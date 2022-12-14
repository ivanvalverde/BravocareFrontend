export type Shifts = {
  facility_name: string;
  facility_id: number;
  shift_id: number;
  shift_date: string;
  start_time: string;
  end_time: string;
};

export type APIResponse<T> = {
  statusCode: number;
  error: boolean;
  message: string;
  data: T;
};

export type OverlapShifts = {
  maxOverlapthreshold: number;
  overlapTime: number;
  exceedsOverlapThreshold: boolean;
};

export type RemainingSpots = {
  facility_id: number;
  nurse_type: string;
  nurses_needed: string;
};

export type CoWorkers = {
  'co-workers': string;
}

export type Button = {
  text: string;
  action: () => void;
}
