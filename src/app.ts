import espress from 'express'



const app = espress();


app.get('./', (req, res) => {
    res.json({message: 'Hello World'})
})


app.listen(3000, () => {
    console.log('running')
})