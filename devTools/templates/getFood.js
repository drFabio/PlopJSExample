function getFood({ pageName, normalizedPageName }) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="../index.css" />
    <link rel="stylesheet" href="./${normalizedPageName}.css" />
  </head>
  <body>
    <main>
      <h1>Pizza pizza where the pizza is made of pizza</h1>
      <p><a href="../">Home</p>
      <h2>${pageName}</h2>
      <p>Food. It is solid and probably hot. Might be cold sometimes don't be afraid. Unless it was supposed to be hot and it is cold and vice-versa</p>
    </main>
  </body>
</html>`.trim();
}
module.exports = { getFood };
