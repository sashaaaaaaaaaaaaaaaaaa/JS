function pouse(milis){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,milis)
    })
}
async function loadBar (){
    const bar =[" "," "," "," "," "," "," "," "," "]
    for (let i =0; i <= bar.length; i ++){
        bar.fill("#",0,i)
        console.clear();
        console.log("["+ bar.join(" ") + "]");
        await pouse(1000)
    }
}

loadBar()