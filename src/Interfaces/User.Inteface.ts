export interface GeoInterface {
  lat: string;
  lng: string;
}
export interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInterface;
}

export interface CompanyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface DataInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
  phone: string;
  website: string;
  company: CompanyInterface;
}

export interface CredentialInterface {
  email: string;
  password: string;
  role:"admin"|"user"
}

export interface StoredDataInterface {
  username: string;
  email: string;
  password: string;
}
