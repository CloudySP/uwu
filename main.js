function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MObDcaj9f/model.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else 
    {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_label").innerHTML = 'i can hear - ' + results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";

      img = document.getElementById('alien1');
      
      if (results[0].label == "Ding dong") {
          img.src = 'https://media0.giphy.com/media/xT5LMBijNMOqDoa0WA/200w.gif?cid=82a1493b0nujgyrhu3dblyk91dp2eh5uqthl7p26deymfhh4&rid=200w.gif&ct=g';
          
      } else if (results[0].label == 'Squawk') {
        img.src = 'https://i.pinimg.com/originals/76/db/dc/76dbdcb029d50de41aec4a0f86f90f93.gif';
        
      } else if (results[0].label == 'Coffin Dance') {
        img.src = 'https://www.icegif.com/wp-content/uploads/coffin-dance-icegif-18.gif';
      
      }
      else {
        img.src = 'https://pbs.twimg.com/media/FN72hLsXwAAeE9Z.jpg';
        
      }
    }
 }

