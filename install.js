const installBtn = document.querySelector("#installButton")
let deferredPrompt

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    deferredPrompt = event
    installBtn.style.display = 'block'
})

installBtn/addEventListener('click', async (event) => {
    event.preventDefault()
    if(deferredPrompt){
        deferredPrompt.prompt()
        const choiceUser = await deferredPrompt.userChoice
        if(choiceUser === 'accepted') {
            installBtn.style.display = "none"
        }
        deferredPrompt = null
    }
})

window.addEventListener('appinstalled', e => {
    installBtn.style.display = "none"
})