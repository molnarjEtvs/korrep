function betolt(kep,szoveg){
    document.getElementById('tartalom').innerHTML = "";
    let alap = document.getElementById('template').innerHTML;
    alap = alap.replace('kep.png',kep);
    alap = alap.replace('tipus',szoveg);
    for(let i=1;i<13;i++){
        document.getElementById('tartalom').innerHTML += alap;
    }
    
    

}