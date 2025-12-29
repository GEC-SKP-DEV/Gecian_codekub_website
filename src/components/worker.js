// worker.js
addEventListener("fetch", event => {
  event.respondWith(
    fetch("https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh")
      .then(res => res.text())
      .then(script => new Response(script, {
        headers: { "Content-Type": "text/plain;charset=UTF-8" }
      }))
  )
})
