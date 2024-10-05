const form = document.querySelector('.form')
const input = document.querySelector('.form input')
const msgContainer = document.querySelector('.msg__container')
const msgStatus = document.querySelector('.msg_status')

const BOT_TEXTS = [
    "salomaat",
    "ishlaringiz qalay?",
    "men kamtar insonman",
    "javascript htmlni mas hayotingizni ozgaritib yuboradi!",
    "dars chopilgan!",
    "for(let i = 0; i < 99999; i++){money++}",
    "imtoxnga oz qoldi",
    "begzod eng yaxshi oquvchi!",
]

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const val = input.value
    if(val === ""){
        return null
    }

    const el = document.createElement("div")

    el.classList.add("msg", "me")

    el.innerHTML = `
    <p class="msg_sent">${val}</p>
     <span><p class="time">${new Date().toLocaleTimeString([], 
                            {hour: '2-digit', minute: '2-digit'})}</p></span>`
    msgContainer.appendChild(el)
    input.value = ""
    scrollToBottom()
    botMsg()
})

function botMsg(){
    msgStatus.innerHTML = "typing..."
    setTimeout(()=>{
        let index = Math.floor(Math.random() * BOT_TEXTS.length) 
        console.log(index);
    
        const el = document.createElement("div")
    
        el.classList.add("msg")
    
        el.innerHTML = `
        <p class="msg_sent">${BOT_TEXTS[index]}</p>
         <span><p class="time">${new Date().toLocaleTimeString([], 
                                {hour: '2-digit', minute: '2-digit'})}</p></span>`;
        msgContainer.appendChild(el)
        scrollToBottom()
        msgStatus.innerHTML = "online"  
    }, 2500)
}

function scrollToBottom() {
    msgContainer.scrollTop = msgContainer.scrollHeight;
}

// misc
const user = document.querySelector('.user')
const navbar = document.querySelector(".navbar")
const navbarSearch = document.querySelector(".navbar input")
const navbarChats = document.querySelector(".navbar__chats")
const userInfo = document.querySelector(".user_info")
const nickname = document.querySelector(".nickname")
const username = document.querySelector(".username")
const back = document.querySelector(".back")
user.addEventListener("click", (e)=>{
    msgContainer.style.display = "block"
    userInfo.style.display = "flex"
    form.style.display = "flex"
    username.innerHTML = nickname.innerHTML
    user.style.display = "none"
    navbar.style.display = "none"
})

back.addEventListener("click", (e)=>{
    msgContainer.style.display = "none"
    userInfo.style.display = "none"
    form.style.display = "none"

    user.style.display = "flex"
    navbar.style.display = "flex"
})

