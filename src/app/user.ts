export class User {
  id: number;
  name: string = '';
  surname: string = '';
  birthdate: Date;
  address: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
