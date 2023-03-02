import {ChangeEvent} from 'react';

export type InputProps = {
  label?: string,
  name: string,
  type: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  required?: boolean
};