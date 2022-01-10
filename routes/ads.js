const express = require("express");
const router = express.Router();
const fs = require("fs");
const { ensureAuthenticated } = require("../config/auth");
const ad = require("../models/ad_schema");
const report = require("../models/report");
const message = require("../models/messages");
const multer = require("multer");
const path = require("path");
const dateFormater = require("../functions/dateFormater");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (request, file, callback) {
    callback(null, new Date().getTime() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

//PROMOTE
router.post("/promote"),((req, res) => {
    const id = req.body.id;
    const user = req.user;
    console.log(id);
    if (user.moderator == true) {
        console.log('to dziala!')
      ad.findByIdAndUpdate(id,{$set: {is_premium: true}}, (err) => {
        if (err) return res.send(500, err);
        res.redirect("/");
      });
    } else {
      res.send("Nie jesteś adminem cwaniaczku :)");
    }
  });
  

// DELETE ADD IF U ARE ADMIN
router.route("/delete/:id").get((req, res) => {
  const id = req.params.id;
  const user = req.user;
  if (user.moderator == true) {
    ad.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  } else {
    res.send("Nie jesteś adminem cwaniaczku :)");
  }
});

router.post("/search", (req, res) => {
  const text = req.body.text;
  console.log(text);
  if (text == null) {
    ad.find({}, (err, ads) => {
      res.render("showall", { useradd: ads, user: req.user });
    }).sort({ date: -1 });
  }
  //console.log(category);
  ad.find(
    {
      $or: [
        { title: { $regex: text, $options: "i" } },
        { description: { $regex: text, $options: "i" } },
        { location: { $regex: text, $options: "i" } },
      ],
    },
    function (err, result) {
      if (err) {
        console.log(err);
        //res.send(err);
      } else {
        //console.log(result);
        //viewsTrick =result.views+1;
        res.render("showall", { useradd: result, user: req.user });
      }
    }
  );
});

router.route("/category/:category").get((req, res) => {
  const category = req.params.category;
  console.log(category);
  ad.find({ category: category }, function (err, result) {
    if (err) {
      console.log(err);
      //res.send(err);
    } else {
      //console.log(result);
      //viewsTrick =result.views+1;
      res.render("showall", { useradd: result, user: req.user });
    }
  });
});

router.post("/report_user", (req, res) => {
  date = new Date();
  report.findOne({ buyer_id: req.body.idusera }, (err, find) => {
    if (!find) {
      insertDate = dateFormater(date);
      const msgTask = new report({
        reporter_id: req.body.idusera,
        description: req.body.message,
        date: insertDate,
      });
      try {
        msgTask.save(); //dodac async
        res.redirect("back");
      } catch (error) {
        // console.log(error);
      }
    } else {
      res.redirect("/");
    }
  });
});

router.post("/report_add", (req, res) => {
  date = new Date();
  report.findOne(
    { ad_id: req.body.idogloszenia, buyer_id: req.body.idusera },
    (err, find) => {
      if (!find) {
        insertDate = dateFormater(date);
        const msgTask = new report({
          reporter_id: req.body.idusera,
          ad_id: req.body.idogloszenia,
          description: req.body.message,
          date: insertDate,
        });
        try {
          msgTask.save(); //dodac async
          res.redirect("back");
        } catch (error) {
          // console.log(error);
        }
      } else {
        res.send("Nie możesz zgłosić drugi raz tego ogłoszenia!");
      }
    }
  );
});

router.post("/sendmsg", (req, res) => {
  date = new Date();

  // const find = message.findOne({ad_id: req.body.idogloszenia, buyer_id: req.body.idusera});
  // if(!find){
  //     console.log('Chuj mi w dupe');
  // }else{
  //     console.log(find);
  // }
  message.findOne(
    { ad_id: req.body.idogloszenia, buyer_id: req.body.idusera },
    (err, find) => {
      if (!find) {
        insertDate = dateFormater(date);
        const msgTask = new message({
          ad_id: req.body.idogloszenia,
          buyer_id: req.body.idusera,
          buyer_messages: req.body.message,
          date: insertDate,
        });
        try {
          // To sie wyjebuje user undefined wtf ? XD

          msgTask.save(); //dodac async
          res.redirect("back");
        } catch (error) {
          // console.log(error);
        }
      } else {
        res.send(
          "Nie możesz wysłać drugiej wiadomości dotyczącej tego ogłoszenia!"
        );
      }
    }
  );
});

//<!--- Add an ad ---!>
router.get("/new", ensureAuthenticated, (req, res) => {
  res.render("add", {
    user: req.user,
  });
});
//<!---POST an ad ---!>
router.post(
  "/new",
  upload.single("image"),
  ensureAuthenticated,
  async (req, res) => {
    const { title, description, phone } = req.body;
    //console.log( req.file.filename);
    let errors = [];
    if (!title || !description || !phone) {
      errors.push({ msg: "Wypełnij wszystkie pola." });
    }
    if (description.length < 40) {
      errors.push({ msg: "Opis ogłoszenia musi miec więcej niż 40 znaków" });
    }
    if (title.length < 10) {
      errors.push({ msg: "Tytul ogłoszenia musi miec więcej niż 10 znaków" });
    }
    if (errors.length > 0) {
      res.render("add", {
        user: req.user,
        errors: errors,
        title: title,
        description: description,
        phone: phone,
      });
    } else {
      date = new Date();
      insertDate = dateFormater(date);
      //let title= req.body.title_.toUpperCase(); // usunac jak naprawie wyszukiwanie
      const TodoTask = new ad({
        category: req.body.category,
        userid: req.user._id,
        title: req.body.title,
        description: req.body.description,
        phone: req.body.phone,
        price: req.body.price,
        location: req.body.location,
        img: req.file.filename,
        date: insertDate,
      });
      try {
        await TodoTask.save();
        res.redirect("/");
      } catch (error) {
        console.log(error);
        res.redirect("/");
      }
    }
  }
);
// router.get("/show", ensureAuthenticated, (req, res) => {
//   ad.find({}, (err, ads) => {
//     res.render("showall", { useradd: ads, user: req.user });
//   }).sort({ date: -1 }); // sortowanie od najnowszych
// });
router.route("/show/:id").get((req, res) => {
  const id = req.params.id;

  ad.updateOne({ _id: id }, { $inc: { views: +1 } }, function (err, callback) {
    if (err) {
      res.send(err);
    } else {
      ad.findById(id, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          viewsTrick = result.views + 1;
          res.render("show", { ad: result, user: req.user });
        }
      });
    }
  });
});
//<!--- report  an ad POST ---!>
router.post("/report", (req, res) => {
  const description = req.body;
  let errors = [];
  if (!description) {
    errors.push({ msg: "Wypełnij wszystkie pola." });
  }
  if (description.length < 40) {
    errors.push({ msg: "Opis zgłoszenia musi miec więcej niż 40 znaków" });
  }
  if (errors.length > 0) {
    res.render("report", {
      errors: errors,
      description: description,
    });
  } else {
    //todo funkcja wysylajaca report do bazy
    res.redirect("/dashboard");
  }
});
//<!--- edit an ad ---!>
router.get("/edit", (req, res) => {
  res.render("edit");
});

//<!--- edit POST ---!>
router.post("/edit", (req, res) => {
  const { title, description, category_id, phone, photo } = req.body;
  let errors = [];
  if (!title || !description || !phone || !photo1 || !category_id) {
    errors.push({ msg: "Wypełnij wszystkie pola." });
  }
  if (description.length < 40) {
    errors.push({ msg: "Opis ogłoszenia musi miec więcej niż 40 znaków" });
  }
  if (title.length < 10) {
    errors.push({ msg: "Tytul ogłoszenia musi miec więcej niż 10 znaków" });
  }
  if (errors.length > 0) {
    res.render("add", {
      errors: errors,
      title: title,
      description: description,
      phone: phone,
      category_id: category_id,
      photo1: photo1,
    });
  } else {
    //todo funkcja updateujaca w bazie danych
    res.redirect("/dashboard");
  }
});
module.exports = router;
