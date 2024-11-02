let h3__name=document.getElementById('name')
let h3__gender=document.getElementById('gender')
let h3__gmail=document.getElementById('gmail')
let h3__telephon =document.getElementById('telephon')
let h3__nationality =document.getElementById('nationality')

let h3__city=document.getElementById('city')
let h3__state=document.getElementById('state')
let h3__country=document.getElementById('country')

let h3__Photo__User=document.getElementById('Photo__User')
async function User() {
    random__user= await fetch(`https://randomuser.me/api/`)
    JSON=await random__user.json()
    console.log(JSON);
    if (random__user.ok) {
    h3__name.innerHTML=`name: ${JSON.results[0].name.first}`
    h3__gender.innerHTML=`gender: ${JSON.results[0].gender}`
    h3__gmail.innerHTML=`gmail: ${JSON.results[0].email}`
    h3__telephon.innerHTML=`phone: ${JSON.results[0].phone}`

    h3__city.innerHTML=`city: ${JSON.results[0].location.city}`
    h3__state.innerHTML=`state: ${JSON.results[0].location.state}`
    h3__country.innerHTML=`country: ${JSON.results[0].location.country}`
    h3__Photo__User.src=JSON.results[0].picture.large

    }
}
