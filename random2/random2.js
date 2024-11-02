let text= document.getElementById('h2')
let g=document.getElementsByClassName('button')
async function url() {
    const random= await fetch("https://official-joke-api.appspot.com/random_joke")
    const JSON= await random.json()
    if (random.ok) {
        text.innerHTML=`<h2 class='p'>${JSON.setup}</h2><h2>${JSON.punchline}</h2>`
        console.log(JSON);
        
       
    }
}