const express = require('express');
const router = express.Router();
const {uploadImagen} = require('../Assets/multer');
const {convertImage} = require('../Controllers/sharp.controller');

router.post('/convertir', uploadImagen, convertImage);

// Non-existent routes.
router.get("*", (req, res) => {
    return res.status(404).send("Esta página no existe.");
})

module.exports = router;
