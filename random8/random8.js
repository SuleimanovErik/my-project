let h3__name=document.getElementById('name')
let h3__gender=document.getElementById('gender')
let h3__statistic=document.getElementById('statistic')
let name =document.getElementById('input')
async function National() {
    random__gender= await fetch(`https://api.nationalize.io/?name=${name.value}`)
    JSON=await random__gender.json()
    console.log(JSON);
    if (random__gender.ok) {
    h3__name.innerHTML=`name:${JSON.name}`
    h3__gender.innerHTML=`nationality:${JSON.country[0].country_id}`
    h3__statistic.innerHTML=`statistic:${JSON.country[0].probability}`
    name.value=''
     }
     console.log(JSON);
}