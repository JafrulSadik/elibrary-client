export type ApiSuccessfullResponse<TData, TPagination> = {
  code: number;
  message: string;
  data: TData[];
  pagination: TPagination;
};

export type AddReviewResponse<TData> = {
  code: number;
  message: string;
  data: TData;
};
