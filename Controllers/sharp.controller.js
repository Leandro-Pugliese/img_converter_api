const sharp = require('sharp');

//Convierto la imagen cargada
const convertImage = (req, res) => {
  const {file} = req;
  const {format} = req.body; 
  if (!file) {
    return res.status(400).send('No hay una imagen cargada.');
  }
  if (!format) {
    return res.status(400).send('Formato no especificado.');
  }
  // Lista de formatos permitidos
  const validFormats = ['jpeg', 'png', 'webp', 'gif', 'tiff'];
  // Verifico si el formato es válido
  if (!validFormats.includes(format)) {
    return res.status(400).send('Formato inválido. Los formatos soportados son: jpeg, png, webp, gif, tiff');
  }

  //Uso Sharp para convertir la imagen
  sharp(file.buffer) //uso file.buffer porque el archivo está en memoria
    .toFormat(format) //formato elegido
    .toBuffer() //Convierto la imagen a buffer
    .then((data) => {
      // Seteo el tipo y le envio la imagen convertida
      res.set('Content-Type', `image/${format}`);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send('Error al convertir la imagen');
    });
};

module.exports = {convertImage}
