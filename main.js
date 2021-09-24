function sc(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-es51dC4z/model.json"
    ,modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if (error) {
       console.error(error) 
    } else {
        console.log(results)
        rnr = Math.floor(Math.random() * 256)
        rnb = Math.floor(Math.random() * 256)
        rng = Math.floor(Math.random() * 256)
        document.getElementById("S").innerHTML = results[0].label;
        document.getElementById("A").innerHTML = (results[0].confidence * 100).toFixed(2) + " %"
        document.getElementById("S").style.color = "rgb("
            + rnr + "," + rng + "," + rnb +
            ")";
        document.getElementById("A").style.color = "rgb("
            + rnr + "," + rng + "," + rnb +
            ")";

        A1 = document.getElementById('I1');
        

        if (results[0].label == "Bark") {
            A1.src = 'dog.png';
            
        } else if (results[0].label == "Meow") {
            A1.src = 'cat.png';
            
        } else if (results[0].label == "Baa") {
            A1.src = 'sheep.png';
            
        } else if (results[0].label == "roar") {
            A1.src = 'lion.png'; 
        } else{
            A1.src = 'sound.png';
                }
            
           
        
    }
}