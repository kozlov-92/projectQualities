import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

function init() {
  Sentry.init({
    dsn: 'https://c944c8c82269487bb5ca31d10f982b1e@o1081128.ingest.sentry.io/6088154',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}
function log(error) {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}

export default logger
