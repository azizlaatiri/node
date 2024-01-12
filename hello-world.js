const express = require('express')
const app = express()
const txt = require('fs')
app.listen(3000, () => {
    console.log(`Serveur sur le port 3000`)
})

app.get('/', (req, res) => {
    txt.readFile('welcome.txt',(err, data) => {
        if (err) {
            console.log(err)
            res.status(3000).send('Erreur de lecture du fichier')
            return
        }
        res.send(data)
    })
})
