export interface User {
  _id: string;
  email: string;
  password?: string;
  roles?: string[];
}

export interface UsersInterface {
  email: string;
  password?: string;
  civility: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  birthplace: string;
  roles?: string[];
}
