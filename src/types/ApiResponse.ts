export type ApiSuccessfullResponse<TData, TPagination> = {
  code: number;
  message: string;
  data: TData[];
  pagination: TPagination;
};

export type ApiResponseArryData<TData> = {
  code: number;
  message: string;
  data: TData[];
};

export type ApiResponseSingleData<TData> = {
  code: number;
  message: string;
  data: TData;
};

export type AddReviewResponse<TData> = {
  code: number;
  message: string;
  data: TData;
};
