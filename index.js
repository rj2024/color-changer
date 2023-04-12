const btn = document.querySelector(".btn");

const colori =()=>{
    const len="0123456789abcdef";
    let val="#";
    for(let i=0;i<6;i++){
        val+=len[Math.floor(Math.random()*16)];
    }
    return val;
}
function changer(){
    document.body.style.backgroundColor=colori();
}

btn.addEventListener('click',changer);