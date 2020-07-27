const { resolve } = require("path");
const slugify = require("slugify");
const {
  getAlcoholicsDrinks,
} = require("./devTools/templates/getAlcoholicsDrinks");
const { getDrinks } = require("./devTools/templates/getDrinks");
const { getFood } = require("./devTools/templates/getFood");
const { getCss } = require("./devTools/templates/getCss");
const { getAddMenu } = require("./devTools/templates/getAddMenu");

const targetFolder = resolve(__dirname, "./src");
module.exports = (plop) => {
  const { setGenerator } = plop;

  setGenerator("menuPage", {
    description: "generates a new menu page",
    prompts: [
      {
        type: "confirm",
        name: "isDrinks",
        message: "Is this a drinks page?",
      },
      {
        type: "confirm",
        name: "isAlcoholic",
        message: "Are the drinks alcoholics?",
        when({ isDrinks }) {
          return Boolean(isDrinks);
        },
      },
      {
        type: "input",
        name: "pageName",
        message: "What is the name of this page?",
        validate(value) {
          if (value.split(" ").length >= 3) {
            return true;
          }
          return `name of the page needs to be at least 3 words. Use more adjectives like "Delicious appertizers for your internal organs"  `;
        },
      },
    ],
    actions(answers) {
      const { pageName, isDrinks, isAlcoholic } = answers;
      const normalizedPageName = slugify(pageName);
      let htmlTemplate;
      if (isDrinks) {
        htmlTemplate = isAlcoholic ? getAlcoholicsDrinks : getDrinks;
      } else {
        htmlTemplate = getFood;
      }
      return [
        {
          type: "add",
          path: resolve(targetFolder, `./menu/${normalizedPageName}.html`),
          template: htmlTemplate({ pageName, normalizedPageName }),
          abortOnFail: true,
        },
        {
          type: "add",
          path: resolve(targetFolder, `./menu/${normalizedPageName}.css`),
          template: getCss({ pageName, normalizedPageName }),
          abortOnFail: true,
        },
        {
          type: "modify",
          path: resolve(targetFolder, `./index.html`),
          template: getAddMenu({ normalizedPageName, pageName }),
          abortOnFail: true,
          pattern: /<!--Insert placeholder-->/,
        },
      ];
    },
  });
};
