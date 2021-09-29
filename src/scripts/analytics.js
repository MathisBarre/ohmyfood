import splitbee from '@splitbee/web';

(() => {
  console.log("Analytics script loaded")

  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.href.startsWith("file:///")
  if (isLocalhost) return console.log("Localhost detected, tracking disabled")

  splitbee.init({ token: "AMP3UVDXSDVO" })
  console.log("Live website detected, tracking activated")
})()
