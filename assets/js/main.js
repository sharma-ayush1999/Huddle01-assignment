const submitForm = () => {
  return false;
};

const switchState = (type, device) => {
  if (type.classList.contains("onClass")) {
      if(device.toLowerCase() === 'video'){
          startVideo()
      }
    type.classList.remove("onClass");
    type.src = `./assets/img/${device}Off.png`;
  } else {
      stopVideo()
    type.classList.add("onClass");
    type.src = `./assets/img/${device}On.png`;
  }
};

const startVideo = () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
      });
  }
};

const stopVideo = () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.pause()
      });
  }
};

startVideo();