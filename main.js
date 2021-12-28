//Setting the webcam
Webcam.set({width:350, height:300, image_format: 'png', png_quality: 90});

camera = document.getElementById('camera');
Webcam.attach('#camera'); //Attach webcam to camera

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

//Logging the console
console.log('ML5 VERSION: ' + ml5.version + '.');
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3y0i5NEx3/model.json', modelLoaded);

function modelLoaded(){
    console.log('MODEL HAS LOADED'); //Tells us if the model is loaded
}

function recognition(){
    var snapped_img = document.getElementById('capture_image');
    classifier.classify(snapped_img, gotResult);
}

function gotResult(){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById('result_object_name').innerHTML = results[0].label;
        document.getElementById('result_accuracy').innerHTML = results[0].confidence.toFixed(1);
    }
}