module.exports = () =>
  new Promise(resolve => {
    ['cookie', 'banner', 'gdpr', 'privacy'].map(className => {
      const element = document.evaluate(
        `//*[(contains(@class, '${className}') or contains(@id, '${className}')) and contains(
      translate(.//*, 'C', 'c'),
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
