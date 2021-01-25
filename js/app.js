if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))

    function handleNetworkChange(event) {
      if (navigator.onLine) {
        alert("You're online")
        $(".notif-content").html('')
      } else {
        alert("You're offline")
        $(".notif-content").append('<div id="notif" class="notif online">You are offline</div>')
      }
    }
    window.addEventListener("online", handleNetworkChange)
    window.addEventListener("offline", handleNetworkChange)
  })
}