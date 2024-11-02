let text= document.getElementById('h2')
async function url() {
    const random= await fetch("https://catfact.ninja/fact")
    const JSON= await random.json()
    if (random.ok) {
        text.innerHTML=`<h2 class='p'>${JSON.fact}</h2><h2>${JSON.length}</h2>`
        console.log(JSON);
        
       
    }
}