const NotifMe = ()=> {
    let myNotif =null
    const options = {
        body: "Plus que 2H de souffrance. ",
        icon: "icons/pika.jpg",
        url: "https://cepegra.be"
    }
    if(Notification.permission == "granted"){
        myNotif = new Notification('Bien le bonjour étranger !', options)
    }else{
        Notification.requestPermission().then(permission => {
            if(permission === "granted") {
                console.log("NOtifications Obligatoire")
                myNotification = new Notification('Oh, Thank You !', options)
            }
        })
    }
}
NotifMe()

if(Notification.permission !== 'granted') {
    if(confirm('Les Notifications sont Inevitable')){
        Notification.requestPermission().then(permission => {
            console.log(permission)
            if (permission === "granted") {
                console.log("Notification Inevitable")
            }
        })
    }
}