const input = document.getElementById('input')
const passwordImg = document.getElementById('passwordImg')
const textImg = document.getElementById('textImg')
passwordImg.addEventListener('click' ,  ()=>{
if(input.type == 'password'){
    input.type = 'text'
    passwordImg.classList.add('hidden')
    textImg.classList.remove("hidden")
}

})
textImg.addEventListener('click', () => {
    if (input.type === 'text') {
        input.type = 'password'
        textImg.classList.add('hidden')
        passwordImg.classList.remove('hidden')
    }
})