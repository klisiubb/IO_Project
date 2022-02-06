const { request } = require('express');
const {MongoClient} = require('mongodb');
const { deleteOne } = require('../models/user_schema.js');
beforeAll(async () => {
  connection = await MongoClient.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
  });
  db = await connection.db('test');
});
afterAll(async () => {
await connection.close();
});

const User = require ( '../routes/users.js' )

describe('registration password testing', () => {
  it("pole na haslo nie powinno byc puste", async () => {
    try {
      await new User({
        login: "User",
        email: "user@user.user",
        password: "",
        password2: ""
      }).save()
    } catch (err) {
      expect(err.message).toEqual("Wypełnij wszystkie pola.") 
    }
  });
  it("hasla powinny byc takie same", async () => {
    try {
      await new User({
        login: "User",
        email: "user@user.user",
        password: "Qwerty123456789",
        password2: "987654321ytrewQ"
      }).save()
    } catch (err) {
      expect(err.message).toEqual("Hasła nie są takie same")
    }
  });
  it("haslo nie powinno byc krotsze niz 6 znakow", async () => {
    try {
      await new User({
        login: "User",
        email: "user@user.user",
        password: "Qwe12",
        password2: "Qwe12"
      }).save()
    } catch (err) {
      expect(err.message).toEqual('Hasło musi mieć więcej niż 6 znaków.')
    }
  });

});