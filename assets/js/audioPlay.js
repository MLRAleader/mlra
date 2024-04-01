var imageProfile = document.querySelector("#image-profile");
  imageProfile.addEventListener('click', playPresentation);
  
  function playPresentation() {
    var presentation = new Audio("/assets/medias/audios/Presentation_Succinte.aac");
    presentation.play();
  }