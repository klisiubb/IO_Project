const user = require("../models/user_schema");
function deleteUser(ad_id) {
    const query = { "_id": ad_id };
    user.deleteOne(query)
      .then(result => console.log('Usunieto uzytkownika!'))
      .catch(err => console.error(`Podczas usuwania napodkano blad: ${err}`))
}