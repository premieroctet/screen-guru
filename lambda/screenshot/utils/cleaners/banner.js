module.exports = () =>
  new Promise(resolve => {
    ['cookie', 'banner', 'gdpr'].map(className => {
      const element = document.evaluate(
        `//div[contains(@class, '${className}') and contains(
      translate(.//div, 'C', 'c'),
      'cookie'
    )]`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue;

      if (element) {
        element.remove();
        resolve(true);
      }
    });

    resolve(false);
  });
