

function windowOpener(url,width,height,name,scrolls) { 
		browserName = navigator.appName; 
        browserVer = navigator.appVersion.substring(0,1);
        if (scrolls==true) { 
                scrollsOption="yes"; 
        } else { 
                scrollsOption="no"; 
        } 
        var l = ( (window.screen.width - width) / 2 );
		var t = ( (window.screen.height - height) / 2 );
		if (browserName != "Netscape" || browserVer != 2) { 
                controlWindow=window.open( 
                url,name,"toolbar=no,height="+height+",width="+width+",location=no,directories=no,status=no,menubar=no,top="+t+",left="+l+",screenX="+l+",screenY="+t+",scrollbars="+scrollsOption+",resizable=no" 
                ); 
        } 
} 


function playSound(tipo) {
 if(tipo=="ho"){
 document.all.sound.src ="../audio/inicio.wav";}
 else if(tipo=="tel"){
  document.all.sound.src ="../audio/telefono.wav";
 }
  else if(tipo=="int"){
  document.all.sound.src ="../audio/intro.wav";
 }
  else if(tipo=="inf"){
  document.all.sound.src ="../audio/infor.wav";
 }
  else if(tipo=="sup"){
  document.all.sound.src ="../audio/super.wav";
 }
  else if(tipo=="pre"){
  document.all.sound.src ="../audio/precio.wav";
 }
 else if(tipo=="per"){
  document.all.sound.src ="../audio/personal.wav";
 }
 else{
  document.all.sound.src ="../audio/contacto.wav";
 }
}
