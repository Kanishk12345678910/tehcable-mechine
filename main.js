//https://teachablemachine.withgoogle.com/models/rXMdP7uaE/
Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quatily: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture() {
    Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML = "<img id = 'click_image' src ='" + data_uri + "'> "
        }


    )
}
//machine learning starts here
console.log("ml5version:", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rXMdP7uaE/model.json", modelLoaded)

function modelLoaded() {
    console.log("model loaded sucessfully")
}
function identify(){
    img=document.getElementById('click_image')
    classifier.classify(img,gotresult)

}
function gotresult(error,result){
    if(error){
        console.error(error)

    }
    else {
        console.log(result)
        document.getElementById("oname").innerHTML=result[0].label
        accuracy=result[0].confidence.toFixed(3)
        percentage=accuracy*100
        document.getElementById("oconfidence").innerHTML=percentage+"%"

    }
}