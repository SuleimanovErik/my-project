photo= document.getElementById('img')
async function url() {
    const random= await fetch("https://dog.ceo/api/breeds/image/random")
    JSON = await random.json()
    if (random.ok) {
       photo.src=JSON.message
       console.log(JSON.message);
       
    }

}