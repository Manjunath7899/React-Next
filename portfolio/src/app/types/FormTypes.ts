export interface Controle {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}

export interface FormDataValue {
  [key: string]: string | number | undefined;
}