document.getElementById("canvas").style.display = 'none';
document.getElementById("flechaIzq").disabled = true;

var baseImg = 1;

function obtFile(){
  inputFile =  document.getElementById('inputFile');
  img = document.getElementById("imgOrig");

  const [file] = inputFile.files
  if (file) {
    img.src = URL.createObjectURL(file);
  }
  funPrueba();
}

function descargar(){
  var link = window.document.createElement( 'a' ),
        url = canvas.toDataURL(),
        filename = 'screenshot.png';
 
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', filename );
    link.style.visibility = 'hidden';
    window.document.body.appendChild( link );
    link.click();
    window.document.body.removeChild( link );
}


function deslIzq(){
  const texto = document.getElementById("inputText");
  const imgOrig = document.getElementById("imgOrig");
  if (baseImg==2) {
    document.getElementById("inputFile").style.display = '';
    document.getElementById("flechaIzq").disabled = true;
    imgOrig.src = "./img/bgPersonalizado.png";
  }
  else if (baseImg==3) {
    imgOrig.src = "./img/bgBlanco.png";
  }
  else if (baseImg==4){
    imgOrig.src = "./img/bgNegro.png";
  }
  else if (baseImg==5){
    imgOrig.src = "./img/bgPacto.png";
  }
  else if (baseImg==6){
    imgOrig.src = "./img/bgFranciaPetro.png";
    document.getElementById("flechaDer").disabled = false;
  }
  baseImg=baseImg-1;
  funPrueba();
}


function deslDer(){
  const texto = document.getElementById("inputText");
  const imgOrig = document.getElementById("imgOrig");
  if (baseImg==1) {
    document.getElementById("inputFile").style.display = 'none';
    document.getElementById("flechaIzq").disabled = false;
    imgOrig.src = "./img/bgBlanco.png";
  }
  else if (baseImg==2){
    imgOrig.src = "./img/bgNegro.png";
  }
  else if (baseImg==3){
    imgOrig.src = "./img/bgPacto.png";
  }
  else if (baseImg==4){
    imgOrig.src = "./img/bgFranciaPetro.png";
  }
  else if (baseImg==5){
    imgOrig.src = "./img/bgCambio.png";
    document.getElementById("flechaDer").disabled = true;
  }
  baseImg=baseImg+1;
  funPrueba();
}


function funPrueba() {
  const canvas = document.getElementById("canvasMuestra");
  const ctx = canvas.getContext("2d");
  const imgOrig = document.getElementById("imgOrig");
  const texto = document.getElementById("inputText");
  const sizeTexto = document.getElementById("sizeTexto");
  const selectPostion = document.getElementById("selectPos");

  var img = new Image();
  img.src = imgOrig.src;

  canvas.width = 300;
  canvas.height = 300;


  img.onload = function(){
    ctx.drawImage(img,0 ,0 , canvas.width, canvas.height);


    let size = sizeTexto.value;
    let text = texto.value;
    let arrayText = Array.from(text);

    var color = 1;
    var cordX = 0;
    var cordY = 0;
    var tamPX = 10*size;
    var pixelsCartel = 0;


    pixelsCartel = obtPixeles(arrayText,tamPX)

    cordX=(canvas.width/2)-(pixelsCartel/2)-(tamPX/9.5);



    if (selectPostion.value==0) {
      cordY = tamPX;
    }
    else if(selectPostion.value==1){
      cordY = (canvas.height/2)+tamPX/2.8;
    }
    else if(selectPostion.value==2){
      cordY = canvas.height-(tamPX/3.3);
    }

    var pixelsHashtag = 0;
    pixelsCartel = obtPixeles("#PACTOSABROSO",tamPX/8);
    cordXHashtag=(canvas.width/2)-(pixelsCartel/2)-(tamPX/5.8);

    ctx.font = tamPX/8+"px 'Poppins', sans-serif,blod";
    ctx.fillStyle = "rgba(165, 46, 148, 1)";
    ctx.fillText("#PACTOSABROSO", cordXHashtag, cordY+tamPX/8);

    for (var i = 0; i < arrayText.length; i++) {
      
      let letra = arrayText[i];

      if(letra=='I'||letra=='1'){
        cordX = cordX + 0.05 * tamPX;
      }


      if(color==1){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(255, 156, 0, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==2){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(28, 53, 135, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==3){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(255, 26, 31, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==4){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(0, 169, 63, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==5){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(165, 46, 148, 0.85)";
        ctx.fillText(letra, cordX, cordY);
        color=0;
      }
      else{
        console.log("Que ha pasao");
      }
 
      color = color + 1;


      if(letra=='A'||letra=='N'||letra=='Ñ'||letra=='O'||letra=='Q'){
        cordX = cordX + 0.6 * tamPX;
      }
      else if (letra=='B'||letra=='R'||letra=='4'||letra=='K') {
        cordX = cordX + 0.5 * tamPX;
      }
      else if (letra=='C'||letra=='D'||letra=='G'||letra=='H'||letra=='U'||letra=='V'||letra=='Y') {
        cordX = cordX + 0.55 * tamPX;
      }
      else if (letra=='S'||letra=='T'||letra=='2'||letra=='3'||letra=='5'||letra=='6'||letra=='9') {
        cordX = cordX + 0.45 * tamPX;
      }
      else if (letra=='E'||letra=='F'||letra=='J'||letra=='P'||letra=='7') {
        cordX = cordX + 0.4 * tamPX;
      }
      else if (letra=='8'||letra=='0') {
        cordX = cordX + 0.47 * tamPX;
      }
      else if(letra=='M'){
        cordX = cordX + 0.75 * tamPX;
      }
      else if(letra=='W'){
        cordX = cordX + 0.9 * tamPX;
      }
      else if(letra=='L'){
        cordX = cordX + 0.3 * tamPX;
      }
      else if(letra=='X'){
        cordX = cordX + 0.57 * tamPX;
      }
      else if(letra=='Z'){
        cordX = cordX + 0.35 * tamPX;
      }
      else if(letra=='I'||letra=='1'){
        cordX = cordX + 0.2 * tamPX;
      }
      else{
       cordX = cordX + 0.4 * tamPX; 
      }      

    }


  }
}


function obtPixeles(arrayText,tamPX){

  var pixelsCartel=0;

  for(var i=0; i<arrayText.length; i++){

      let letra = arrayText[i];

      
      if(letra=='A'||letra=='N'||letra=='Ñ'||letra=='O'||letra=='Q'){
        pixelsLetra = 0.6 * tamPX;
      }
      else if (letra=='B'||letra=='R'||letra=='4'||letra=='K') {
        pixelsLetra = 0.5 * tamPX;
      }
      else if (letra=='C'||letra=='D'||letra=='G'||letra=='H'||letra=='U'||letra=='V'||letra=='Y') {
        pixelsLetra = 0.55 * tamPX;
      }
      else if (letra=='S'||letra=='T'||letra=='2'||letra=='3'||letra=='5'||letra=='6'||letra=='9') {
        pixelsLetra = 0.45 * tamPX;
      }
      else if (letra=='E'||letra=='F'||letra=='J'||letra=='P'||letra=='7') {
        pixelsLetra = 0.4 * tamPX;
      }
      else if (letra=='8'||letra=='0') {
        pixelsLetra = 0.47 * tamPX;
      }
      else if(letra=='I'||letra=='1'){
        pixelsLetra = 0.27 * tamPX;
      }
      else if(letra=='M'){
        pixelsLetra = 0.75 * tamPX;
      }
      else if(letra=='W'){
        pixelsLetra = 0.9 * tamPX;
      }
      else if(letra=='L'){
        pixelsLetra = 0.3 * tamPX;
      }
      else if(letra=='X'){
        pixelsLetra = 0.57 * tamPX;
      }
      else if(letra=='Z'){
        pixelsLetra = 0.35 * tamPX;
      }
      else{
       pixelsLetra = 0.4 * tamPX; 
      }


      pixelsCartel=pixelsCartel+pixelsLetra;  
    }
    return pixelsCartel;
}



function funReal() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const imgOrig = document.getElementById("imgOrig")
  const texto = document.getElementById("inputText");
  const sizeTexto = document.getElementById("sizeTexto");
  const selectPostion = document.getElementById("selectPos");

  var img = new Image();
  img.src = imgOrig.src;



  canvas.width = img.width;
  canvas.height = img.height;


  img.onload = function(){
    ctx.drawImage(img, 0, 0);

    let size = sizeTexto.value*(img.width/300);
    let text = texto.value;
    let arrayText = Array.from(text);

    var color = 1;
    var cordX = 0;
    var cordY = 0;
    var tamPX = 10*size;
    var pixelsCartel = 0;


    pixelsCartel = obtPixeles(arrayText,tamPX)

    cordX=(canvas.width/2)-(pixelsCartel/2)-(tamPX/9.5);



    if (selectPostion.value==0) {
      cordY = tamPX;
    }
    else if(selectPostion.value==1){
      cordY = (canvas.height/2)+tamPX/2.8;
    }
    else if(selectPostion.value==2){
      cordY = canvas.height-(tamPX/3.3);
    }

    var pixelsHashtag = 0;
    pixelsCartel = obtPixeles("#PACTOSABROSO",tamPX/8);
    cordXHashtag=(canvas.width/2)-(pixelsCartel/2)-(tamPX/5.8);

    ctx.font = tamPX/8+"px 'Poppins', sans-serif,blod";
    ctx.fillStyle = "rgba(165, 46, 148, 1)";
    ctx.fillText("#PACTOSABROSO", cordXHashtag, cordY+tamPX/8);

    for (var i = 0; i < arrayText.length; i++) {
      
      let letra = arrayText[i];

      if(letra=='I'||letra=='1'){
        cordX = cordX + 0.05 * tamPX;
      }


      if(color==1){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(255, 156, 0, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==2){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(28, 53, 135, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==3){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(255, 26, 31, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==4){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(0, 169, 63, 0.85)";
        ctx.fillText(letra, cordX, cordY);
      }
      else if(color==5){
        ctx.font = tamPX+"px 'Poppins', sans-serif,blod";
        ctx.fillStyle = "rgba(165, 46, 148, 0.85)";
        ctx.fillText(letra, cordX, cordY);
        color=0;
      }
      else{
        console.log("Que ha pasao");
      }
 
      color = color + 1;


      if(letra=='A'||letra=='N'||letra=='Ñ'||letra=='O'||letra=='Q'){
        cordX = cordX + 0.6 * tamPX;
      }
      else if (letra=='B'||letra=='R'||letra=='4'||letra=='K') {
        cordX = cordX + 0.5 * tamPX;
      }
      else if (letra=='C'||letra=='D'||letra=='G'||letra=='H'||letra=='U'||letra=='V'||letra=='Y') {
        cordX = cordX + 0.55 * tamPX;
      }
      else if (letra=='S'||letra=='T'||letra=='2'||letra=='3'||letra=='5'||letra=='6'||letra=='9') {
        cordX = cordX + 0.45 * tamPX;
      }
      else if (letra=='E'||letra=='F'||letra=='J'||letra=='P'||letra=='7') {
        cordX = cordX + 0.4 * tamPX;
      }
      else if (letra=='8'||letra=='0') {
        cordX = cordX + 0.47 * tamPX;
      }
      else if(letra=='M'){
        cordX = cordX + 0.75 * tamPX;
      }
      else if(letra=='W'){
        cordX = cordX + 0.9 * tamPX;
      }
      else if(letra=='L'){
        cordX = cordX + 0.3 * tamPX;
      }
      else if(letra=='X'){
        cordX = cordX + 0.57 * tamPX;
      }
      else if(letra=='Z'){
        cordX = cordX + 0.35 * tamPX;
      }
      else if(letra=='I'||letra=='1'){
        cordX = cordX + 0.2 * tamPX;
      }
      else{
       cordX = cordX + 0.4 * tamPX; 
      }      

    }

    descargar();
  }
}


function obtPixeles(arrayText,tamPX){

  var pixelsCartel=0;

  for(var i=0; i<arrayText.length; i++){

      let letra = arrayText[i];

      
      if(letra=='A'||letra=='N'||letra=='Ñ'||letra=='O'||letra=='Q'){
        pixelsLetra = 0.6 * tamPX;
      }
      else if (letra=='B'||letra=='R'||letra=='4'||letra=='K') {
        pixelsLetra = 0.5 * tamPX;
      }
      else if (letra=='C'||letra=='D'||letra=='G'||letra=='H'||letra=='U'||letra=='V'||letra=='Y') {
        pixelsLetra = 0.55 * tamPX;
      }
      else if (letra=='S'||letra=='T'||letra=='2'||letra=='3'||letra=='5'||letra=='6'||letra=='9') {
        pixelsLetra = 0.45 * tamPX;
      }
      else if (letra=='E'||letra=='F'||letra=='J'||letra=='P'||letra=='7') {
        pixelsLetra = 0.4 * tamPX;
      }
      else if (letra=='8'||letra=='0') {
        pixelsLetra = 0.47 * tamPX;
      }
      else if(letra=='I'||letra=='1'){
        pixelsLetra = 0.27 * tamPX;
      }
      else if(letra=='M'){
        pixelsLetra = 0.75 * tamPX;
      }
      else if(letra=='W'){
        pixelsLetra = 0.9 * tamPX;
      }
      else if(letra=='L'){
        pixelsLetra = 0.3 * tamPX;
      }
      else if(letra=='X'){
        pixelsLetra = 0.57 * tamPX;
      }
      else if(letra=='Z'){
        pixelsLetra = 0.35 * tamPX;
      }
      else{
       pixelsLetra = 0.4 * tamPX; 
      }


      pixelsCartel=pixelsCartel+pixelsLetra;  
    }
    return pixelsCartel;
}


sepia = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

    var imageData = ctx.getImageData( 0, 0, canvas.width, canvas.height),
        pixels = imageData.data,
        numPixels = imageData.width * imageData.height;
 
    for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];
 
        var grey = ( r + g + b ) / 3;
 
        pixels[ i * 4 ] = grey;
        pixels[ i * 4 + 1 ] = grey;
        pixels[ i * 4 + 2 ] = grey;
    }
 
    ctx.putImageData( imageData, 0, 0 );
};