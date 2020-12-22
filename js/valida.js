function  valida(){
    let usu = document.getElementById("usuario").value;
    let pas = document.getElementById("clave").value;
    let largo=usu.length
   
    if (largo<8) {
        usu="0"+usu;
        largo=usu.length
    }
   
    for (var i = 0; i <= largo; i++) {
     
        if ((usu.charAt(i)>=0 && usu.charAt(i)<= 9) || (usu.charAt(i)=="-") || (usu.charAt(i)== "k")) {
        }else{
            if ((usu.charAt(i)!="-")) { 
                alert("rut debe ser numerico");
                return false;
        } 
        if (i==9){
            if ((usu.charAt(i)>=0 && usu.charAt(i)<= 9) || (usu.charAt(i)== "k"))  {
            }else{
                 alert("rut debe ser numerico");
                 return false
            } 
        }

     }
    
    }
}

