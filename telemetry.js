import amplitude from 'amplitude-js';

const amplitudeKey = "1f380d1286396641d1e9a56f15e80e65";
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// grab userId given by dashboard via url params if available
amplitude.getInstance().init(amplitudeKey, params.ampUserId, {includeReferrer: true, includeUtm: true});
amplitude.getInstance().logEvent("DOCS", {
  route: document.location.pathname,
});
const deviceId = amplitude.getInstance().options.deviceId;
window.onload = function() {
  // pass device id to dashboard
  // TODO remove app-staging and use app until e2e testing
  document.querySelector("[href='https://app.iasql.com']").href = `https://app-staging.iasql.com?ampDeviceId=${deviceId}`
}
// Listen on and log changes to href
// https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
let oldHref = document.location.href;
window.onload = function() {
  let bodyList = document.querySelector("body")

  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        /* Changed ! your code here */
        amplitude.getInstance().logEvent("DOCS", {
          route: document.location.pathname,
        });
      }
    });
  });

  let config = {
    childList: true,
    subtree: true
  };

  observer.observe(bodyList, config);
};