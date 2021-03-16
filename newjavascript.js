dolgozz();
function dolgozz(){
    var ertek = document.getElementById("adat").value;
    if (ertek!==""){
       alert("Szia "+ertek);
    }else{
       alert("Bekéne írni valamit nem gondolod?"); 
    }
}
function init(){
    consol.log("Bejelentkeztem: ");
    consol.log(document.getElementById("adat").value);    
}
window.addEventListener("load",init);