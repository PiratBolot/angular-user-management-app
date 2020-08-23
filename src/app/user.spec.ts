import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const user = new User({
      name: 'Roman',
      surname: 'Kapustin',
      birthdate: new Date(1995, 11, 17),
      address: 'Saint-Petersburg, Novoizmaylovsky prospect'
    });
    expect(user.name).toEqual('Roman');
    expect(user.surname).toEqual('Kapustin');
    expect(user.birthdate.getFullYear()).toEqual(1995);
    expect(user.birthdate.getMonth()).toEqual(11);
    // Sunday
    expect(user.birthdate.getDay()).toEqual(0);
    expect(user.address).toEqual('Saint-Petersburg, Novoizmaylovsky prospect');
  });
});
