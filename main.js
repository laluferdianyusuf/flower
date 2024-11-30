onload = () => {
  document.body.classList.remove("container");
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-video");

    // Try to autoplay the audio by muting it first to bypass browser restrictions
    audio.muted = true; // Mute initially to allow autoplay

    audio
      .play()
      .then(() => {
        console.log("Audio autoplay berhasil.");

        // Once the audio starts playing, unmute it
        audio.muted = false;
      })
      .catch((error) => {
        console.warn("Browser memblokir autoplay:", error);
      });
  });
};
