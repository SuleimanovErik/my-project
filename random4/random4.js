let contain=document.getElementById('contain')
function Work() {
    const list=document.createElement('div')
    list.className ='list'
    const h2=document.createElement('h2')
    h2.innerHTML = input.value

    list.prepend(h2)
    contain.append(list)

    document.getElementById('input').value=''
    
}