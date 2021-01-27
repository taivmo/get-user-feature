export interface IClassNameProp {
  className?: string;
}

export type MayBe<T> = T | null;

export interface IResponse<T> {
  data: T | null;
  errors?: {
    code: string;
    message: string;
    extends: { field: string; message: string }[];
  };
}
