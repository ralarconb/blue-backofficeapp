// export interface Registration {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }
export class Registration {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) { }
}