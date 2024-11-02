let h3__name=document.getElementById('name')
let h3__age=document.getElementById('age')
let name =document.getElementById('input')
async function Age() {
     random__age= await fetch(`https://api.agify.io/?name=${name.value}`)
     JSON=await random__age.json()
     if (random__age.ok) {
      h3__age.innerHTML=`name:${JSON.name}`
      h3__name.innerHTML=`age:${JSON.age}`
      console.log(JSON);
      name.value=''
     }
}