var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('respond with ACK!');
});

// GET home page using redirect.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/about', function (req, res) {
  res.send('About the About');
})

router.get('/info', function (req, res) {
  res.send('This shows info');
})

// module.exports = function (passport) {
  
//   router.get('/', function (req, res, next) {
//     res.render('index', { message: req.flash('info') });
//   })

//   router.post('/signin', passport.authenticate('login', {
//     successRedirect: '/home',
//     failureRedirect: '/',
//     failureFlash: true
//   }));

//   router.get('/signup', function (req, res, next) {
//     res.render('signup', { message: req.flash('info') });
//   });

//   router.post('/signup', passport.authenticate('signup', {
//     successRedirect: '/home',
//     failureRedirect: '/signup',
//     failureFlash: true
//   }));

//   return router;
// }

router.get('/', function (req, res, next) {
  res.render('index', { message: req.flash('info') });
})

router.post('/signin', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/signup', function (req, res, next) {
  res.render('signup', { message: req.flash('info') });
});

router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash: true
}));


module.exports = router;
