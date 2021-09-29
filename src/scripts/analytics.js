import splitbee from '@splitbee/web';

(() => {
  console.log("Analytics script loaded")

  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.href.startsWith("file:///")
  if (isLocalhost) return console.log("Localhost detected, tracking disabled")

  // SPLITBEE INIT
  splitbee.init({ token: "AMP3UVDXSDVO" })
  console.log("Live website detected, tracking activated")

  // SPLITBEE EVENT TRACKING
  document.getElementById("dc-mainlink").addEventListener("click", (e) => trackClick(e))
})()

async function trackClick(e) {
  e.preventDefault()
  console.log("Trying to track click event...")

  try {
    await splitbee.track("Visit devs.coffee")
    console.log("Click on devs.coffee link successfully tracked")
  } catch {
    console.log("Tracking on devs.coffee click failed")
  } finally {
    location.href = "https://devs.coffee"
  }
}