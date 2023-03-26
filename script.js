let popUp = document.getElementById("envelopecontainer");
document.body.style.overflow = "hidden";
document.getElementById("envelopecontainer").addEventListener("click", () =>{

  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "CookieHide = Manter o cookie oculto; expires = "+ d + ";";
  popUp.classList.add("hide");
  popUp.classList.remove("show")
  document.body.style.overflow = "auto";
})

function playVideo() {
    var video = document.getElementById("video");
    video.play();
}