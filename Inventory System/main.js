
const btnSignIn = document.getElementById("btn-signin")
const signForm = document.getElementById("sign-form")
const btnlogin = document.getElementById("btn-login")
const container = document.getElementById("container")



btnSignIn.addEventListener("click",() =>{
    if(signForm.style.display === "" || !signForm.style.display || signForm.style.display === "none") {
        signForm.setAttribute("style", "display: block")
        container.setAttribute("style","filter: blur(3px)")
        document.body.classList.add("remove-scrolling")
        return
    }else{
        signForm.setAttribute("style", "display: none")
        container.setAttribute("style","filter: blur(0px)")
        document.body.classList.remove("remove-scrolling"); 
    }
})


btnlogin.addEventListener("click", () => {
    signForm.style.display = "none"
    container.setAttribute("style","filter: blur(0px)")
    document.body.classList.remove("remove-scrolling"); 
})


async function validLogin (user) {
    for(let i = 1; i < userData[0].length; i++){
        if(user.username.value === userData[0][i].name && user.password.value === userData[0][i].password){
            window.alert(`Hello! ${user.username.value}`)
            user.username.value = ""
            user.password.value = ""
            return
        }
        console.log("sai ten dang nhap")
        user.username.value = ""
        user.password.value = ""        
        return
    }
}

const form = document.getElementById("form")
form.addEventListener("submit", () => {
    event.preventDefault()
})
