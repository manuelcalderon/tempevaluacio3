function  valida(){
    let usu = document.getElementById("usuario").value;
    let pas = document.getElementById("clave").value;
    let largo=usu.length
    alert(largo);
    if (largo<8) {
        usu="0"+usu;
        
    }
    console.log(usu)
    for (var i = 0; i <= largo; i++) {
     
        if (usu.charAt(i)>=0 && usu.charAt(i)<= 9 && i<=7) {
        }else{
            if ((i!=7) && (usu.charAt(i)!="-") && (usu.charAt(i)!="-")) { 
                alert(usu.charAt(i));
            alert("rut debe ser numerico 1");
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