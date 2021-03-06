const path = require('path');
const router = require('express').Router();
const apiRoutes = require('../apiRoutes/apiRoutes');



router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.use(apiRoutes);
module.exports = router;