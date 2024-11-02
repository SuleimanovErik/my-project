let h3__name=document.getElementById('name')
let h3__gender=document.getElementById('gender')
let h3__statistic=document.getElementById('statistic')
let name =document.getElementById('input')
async function Gender() {
    random__gender= await fetch(`https://api.genderize.io/?name=${name.value}`)
    JSON=await random__gender.json()
    if (random__gender.ok) {
    h3__name.innerHTML=`name:${JSON.name}`
    h3__gender.innerHTML=`gender:${JSON.gender}`
    h3__statistic.innerHTML=`statistic:${JSON.probability}`
    name.value=''
     }
     console.log(JSON);
}