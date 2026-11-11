const router = require('express').Router();
const { info } = require('../../config');

router.get('/', (req, res) => {
  res.render('landing', {
    info,
    title: `${info.name_page} | Home`,
  });
});

module.exports = router;