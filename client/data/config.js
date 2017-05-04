import Raven from 'raven-js';

const sentry_key = '612733e428074f748992898167a6d538';
const sentry_app = '164892';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
