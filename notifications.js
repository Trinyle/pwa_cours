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