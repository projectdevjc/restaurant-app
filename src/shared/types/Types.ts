export type STR_UND = string | undefined;
export type NUM_UND = number | undefined;
export type DocumentType = {
  name: string;
  type: string;
};
export type AppEnvironment =
  | 'local'
  | 'develop'
  | 'qa'
  | 'staging'
  | 'production';
