const submitForm = () => {
  return false;
};

const cameraAudioToggleState = (type, device) => {
  if (type.classList.contains("onClass")) {
    if (device.toLowerCase() === "video") {
      stopVideo();
    }
    type.classList.remove("onClass");
    type.src = `./assets/img/${device}Off.png`;
  } else {
    if (device.toLowerCase() === "video") {
      startVideo();
    }
    type.classList.add("onClass");
    type.src = `./assets/img/${device}On.png`;
  }
};

const startVideo = () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  }
};

const stopVideo = () => {
  const video = document.querySelector("video");
  const mediaStream = video.srcObject;
  const tracks = mediaStream.getTracks();
  tracks[0].stop();
  tracks.forEach((track) => track.stop());
};

const showDropdown = (type, whatToShow, whatNotToShow, whatToHide, device) => {
  if (type.classList.contains("noDropdown")) {
    whatToShow.style.color = "#fff";
    if (device == "camera") {
      whatNotToShow.style.color = "";
      whatToShow.childNodes[1].src = "./assets//img/down.png";
      whatNotToShow.childNodes[1].src = "./assets//img/next.png";
      type.classList.remove("noDropdown");
      whatToHide.classList.add("noDropdown");
    } else {
      whatNotToShow.style.color = "";
      whatToShow.childNodes[1].src = "./assets//img/down.png";
      whatNotToShow.childNodes[1].src = "./assets//img/next.png";
      type.classList.remove("noDropdown");
      whatToHide.classList.add("noDropdown");
    }
  } else {
    whatToShow.style.color = "";
    if (device == "camera") {
      whatToShow.childNodes[1].src = "./assets//img/next.png";
      type.classList.add("noDropdown");
    } else {
      whatToShow.childNodes[1].src = "./assets//img/next.png";
      type.classList.add("noDropdown");
    }
  }
};

startVideo();
