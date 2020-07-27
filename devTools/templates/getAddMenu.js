function getAddMenu({ normalizedPageName, pageName }) {
  return `  <li><a href="./menu/${normalizedPageName}.html">${pageName}</a></li>\n<!--Insert placeholder-->`;
}
module.exports = { getAddMenu };
