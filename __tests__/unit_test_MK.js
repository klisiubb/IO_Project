const dateFormater = require('../functions/dateFormater');
const {MongoClient} = require('mongodb');


test('Sprawdza czy data została sformatowana', () => {
  expect(dateFormater(1643813467547)).toBe(' 2 Lutego 2022 15:51');
});

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
    });
    db = await connection.db('test');
  });

  afterAll(async () => {
    await connection.close();

  });

  it('Powinien dodać użytkownika do bazy', async () => {
    const users = db.collection('users');

    const mockUser = {_id: '123456', email: 'test@test.pl'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: '123456'});
    expect(insertedUser).toEqual(mockUser);
  });

  it('Powinien dodać ogloszenie do bazy', async () => {
    const ads = db.collection('ads');

    const mockAdd = {_id: '123456', title: 'Sprzedam opla'};
    await ads.insertOne(mockAdd);

    const insertedAdd = await ads.findOne({_id: '123456'});
    expect(insertedAdd).toEqual(mockAdd);
  });
});