// Detect https://www.quantcast.com/
module.exports = () =>
  new Promise(resolve => {
    if (document.querySelector('.qc-cmp-button') !== null && typeof window.__cmpui === 'function') {
      window.__cmpui('setAndSaveAllConsent', !0);
      resolve(true);
    }

    resolve(false);
  });
