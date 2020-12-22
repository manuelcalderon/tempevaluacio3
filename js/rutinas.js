function  calcular(){
    let usu = document.getElementById("usuario").value;
    let pa = document.getElementById("pass").value;
    
    if (isNaN(usu)) {
        if (usu=="admin") {
        }else{
            alert("usuario no admin");
        }    
           
    } else{
        alert("No ingreso usuario");
       
    }
    if (pa!=="") {
        
        if ((usu==="admin") && (pa==="1234")) {
        } else {
            alert("No concuerda usuario password");
        } 
       
    } else {
        alert("No ingreso clave");
       
    }

}

