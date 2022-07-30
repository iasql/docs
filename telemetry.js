import amplitude from 'amplitude-js';

// https://developers.amplitude.com/docs/advanced-settings#cross-domain-tracking-javascript
amplitude.getInstance().init(amplitudeKey, params.ampUserId, {includeReferrer: true, includeUtm: true, deviceIdFromUrlParam: true});
amplitude.getInstance().logEvent("DOCS", {
  route: document.location.pathname,
});
const deviceId = amplitude.getInstance().options.deviceId;
window.onload = function() {
  // pass device id
  document.querySelectorAll("[href='https://app.iasql.com']").map(n => n.href = `https://app-staging.iasql.com?amp_device_id=${deviceId}`);
  document.querySelectorAll("[href='https://blog.iasql.com']").map(n => n.href = `https://blog.iasql.com?amp_device_id=${deviceId}`);
  document.querySelectorAll("[href='https://iasql.com']").map(n => n.href = `https://iasql.com?amp_device_id=${deviceId}`);
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