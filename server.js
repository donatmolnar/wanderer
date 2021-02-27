const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index'));
});

app.listen(port, () => console.log(`App is listening on port ${port}`));