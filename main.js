
status = "";
objects = [];
function preload(){
    sound = loadSound("alert_signal.mp3");
}

function setup(){
    canvas = createCanvas(370, 370);
    canvas.position(650, 500);

    
    vid = createCapture(VIDEO);
    vid.hide();
    vid.size(370, 370);

    cocoModel = ml5.objectDetector('cocossd'  , loaded); 
    document.getElementById("status_id").innerHTML="Page is Detecting object";
}

function draw(){
r = random(225);
g = random(125);
b = random(255);

r1= random(215);
g1 = random(125);
b1 = random(99);

    image(vid , 0 , 0 ,370 , 370);
    if(objects[i].label == "person"){
if ( status != ""){
  
    cocoModel.detect(vid , gotResults);
    for(i = 0; i<objects.length; i++){
document.getElementById('status_id').innerHTML = "Status: Object(s) Identified";
document.getElementById('id_id').innerHTML = "Number of Objects:" + objects.length;

fill(r,g,b);

percent = floor(objects[i].confidence *100);

text(objects[i].label + '' + percent + '%', objects[i].x,objects[i].y+ 10);

stroke("white");

noFill();

rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
    }
}
    }else{
sound.play();
sound.rate(2);
sound.volume(1);
console.log('Babay not found');
document.getElementById('id_id').innerHTML ="Open console";
    }

}

function loaded(){
window.alert('Model Loaded');
status = true;
}

function gotResults(error , results){
if( error){
console.error(error);
}else
console.log(results);
objects = results;

}

