function getDrinks({ pageName, normalizedPageName }) {
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
      <p>Drinks is like food but not really, except soup</p>
    </main>
  </body>
</html>`.trim();
}
module.exports = { getDrinks };
