var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;

    if(content == "selfie")
    {
        console.log("taking selfie in ---");
        
    }
    else
    {
        speak();
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function() 
    { 
        img_id = "pic1"; 
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 10 seconds"; 
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis); 
    }, 5000);

    setTimeout(function() 
    { 
        img_id = "pic2"; 
        take_snapshot(); 
        speak_data = "Taking your next Selfie in 15 seconds"; 
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis); 
    }, 10000);

    setTimeout(function() 
    { 
        img_id = "pic3"; 
        take_snapshot(); 
}, 15000);

}


camera = document.getElementById("camera");


Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        if (img_id == "pic1")
        {
            document.getElementById("result1").innerHTML = '<img id = "pic1" src = "'+ data_uri + '">';
        }

        if (img_id == "pic2")
        {
            document.getElementById("result2").innerHTML = '<img id = "pic2" src = "'+ data_uri + '">';
        }

        if (img_id == "pic3")
        {
            document.getElementById("result3").innerHTML = '<img id = "pic3" src = "'+ data_uri + '">';
        }
    });
}

function save()
{
   link = document.getElementById("link");
   image = document.getElementById ("selfie_img").src;
   link.href = image;
   link.click();
}

