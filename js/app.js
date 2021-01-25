if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))

    function handleNetworkChange(event) {
      if (navigator.onLine) {
        alert("You're online")
        document.getElementById("notif").classList.add("online")
      } else {
        alert("You're offline")
        document.getElementById("notif").remove("online")
      }
    }
    window.addEventListener("online", handleNetworkChange)
    window.addEventListener("offline", handleNetworkChange)
  })
}