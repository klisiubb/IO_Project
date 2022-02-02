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

  it('Powinien dodać zgloszenie do bazy', async () => {
    const report = db.collection('reports');

    const mockReport = {reporter_id: '00000000', description: 'Test zgloszenia'};
    await report.insertOne(mockReport);

    const insertedReport = await report.findOne({reporter_id: '00000000'});
    expect(insertedReport).toEqual(mockReport);
  });

  it('Powinien dodać wiadomosc uzytkownikowi', async () => {
    const messages = db.collection('messages');

    const mockMsg = {_id: '000', buyer_id: '000'};
    await messages.insertOne(mockMsg);

    const insertedMsg = await messages.findOne({_id: '000'});
    expect(insertedMsg).toEqual(mockMsg);
  });

  it('Powinien dodać zgloszenie do supportu', async () => {
    const supp = db.collection('support');

    const mockSupp = {_id: '000', topic: 'Potrzebuje pomocy!'};
    await supp.insertOne(mockSupp);

    const insertedSupp = await supp.findOne({_id: '000'});
    expect(insertedSupp).toEqual(mockSupp);
  });
});