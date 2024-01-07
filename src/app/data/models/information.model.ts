export interface InformationModel {
  introduce: string;
  yearOfBirth: number;
  email: string;
  skype: string;
  startYears: number;
  address: string;
  workplace: string;
  contact: ContactModel;
}

export interface ContactModel {
  facebook: string;
  email: string;
  skype: string;
  github: string;
}
