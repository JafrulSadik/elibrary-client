export type ApiSuccessfullResponse<TData, TPagination> = {
  code: number;
  message: string;
  data: TData[];
  pagination: TPagination;
};
