function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i5xuPAcaE/model.json',modelReady)
}

function modelReady(){
    console.log("modelo carregado")
    classifier.classify(gotResults)
}

function gotResults(error,results){
    console.log(results)
    if(error){
        console.error(error)
    }
    else{
        r=Math.floor(Math.random() *255)
        g=Math.floor(Math.random() *255)
        b=Math.floor(Math.random() *255)

        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_confidence").innerHTML=results[0].confidence;
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")

        if(results[0].label=="My voice"){
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }

        if(results[0].label=="Galinha"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }

        if(results[0].label=="Batuque"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }

        if(results[0].label=="Ventilador"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }
    }
}