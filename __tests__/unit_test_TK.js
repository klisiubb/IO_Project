const {MongoClient} = require('mongodb');

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
  it('Powinien być przynajmniej jeden przycisk na stronie',()=>{
   const buttons= fixture.debugElement
   .queryAll(by.ejs('button'));
   expect(buttons.lenght >=1).toBeTruthy();
  });
  it('Powinien dodać użytkownika do bazy', async () => {
    const uzytkownik = db.collection('uzytkownik');

    const daneuzytkownika = {_id: '21312', email: 'testowy@testowy'};
    await uzytkownik.insertOne(daneuzytkownika);

    const doduzytkownik = await uzytkownik.findOne({_id: '21312'});
    expect(doduzytkownik).toEqual(daneuzytkownika);
  });
});
