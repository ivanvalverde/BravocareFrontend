export type Shifts = {
  facility_name: string;
  facility_id: number;
  shift_id: number;
  shift_date: string;
  start_time: string;
  end_time: string;
};

export type ShiftsResponse<T> = {
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
