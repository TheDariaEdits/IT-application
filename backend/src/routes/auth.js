const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/getuser", (req, res) => {
  res.send(req.user);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('http://localhost:3000');
  });


module.exports = router;