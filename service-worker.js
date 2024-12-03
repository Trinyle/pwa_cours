const version = 1.01

self.addEventListener('install', event => {
    event.waitUntil(
    console.log('SW installé ' + version)
)
    return self.skipWaiting()
})

self;addEventListener('activate', () => {
    console.log('Activation SW ' +version)

    return self.clients.claim(w)
})


self.addEventListener('push', e => {
    // si on n'a pas les autorisations
    if( !(self.Notification && self.Notification.permission === 'granted') ) {
        // on annule
        return;
    }
    // si on les a
    console.log('test notification')
    // si on reçoit une demande de notif (objet data en json)
    const data = e.data.json() ?? {}
    console.log(data)
    
    // affichage de la notification, recup du title, body, tag et icone
    const myNotification = registration.showNotification(data.title, {
        body: data.message,
        tag: "simple-demo-notification-push",
        icon: "icons/192x192.png"
    })

    //si on clique sur la notifcation, on va vers l'url renseignée
    self.addEventListener('notificationclick', e => {
        //on ferme la notification
        e.notification.close()
        e.waitUntil(
            // on va vers l'url renseignée
            clients.openWindow(data.url)
        )
    })
})