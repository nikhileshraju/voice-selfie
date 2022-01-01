Speechrecognition = window.webkitSpeechRecognition;
recognition = new Speechrecognition();

function start() {
   document.getElementById("text_area").innerHTML = "";
   recognition.start();
}

recognition.onresult = function (event) {
   console.log(event);
   var Content = event.results[0][0].transcript;
   console.log(Content);
   document.getElementById("text_area").innerHTML = Content;
   if (Content == "take my selfie") {
      console.log("Taking selfie");
      speak();
   }

}

function speak() {
   var synth = window.speechSynthesis;
   speak_data = "Taking your selfie in 5 seconds";
   var utter_this = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   Webcam.attach(camera);
   setTimeout(function () {
      take_selfie();
      save();
   }, 5000)
}

Webcam.set({
   width: 360,
   height: 250,
   image_format: 'png',
   png_quality: 90
})

camera = document.getElementById("camera")

function take_selfie() {
   Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML = '<img id="img_snap" src="' + data_uri + '">';
   })
}

function save (){
link = document.getElementById("link");
image = document.getElementById("img_snap").src ;
link.href = image;
link.click()
}