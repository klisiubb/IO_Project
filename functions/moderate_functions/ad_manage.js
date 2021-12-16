const ad = require("../models/ad_schema");
function deleteAD(ad_id) {
    const query = { "_id": ad_id };
    ad.deleteOne(query)
      .then(result => console.log('Usunieto ogloszenie!'))
      .catch(err => console.error(`Podczas usuwania napodkano blad: ${err}`))
}