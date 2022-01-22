const express = require('express'); //this is to import the express package
const app = express();
const PORT=8080; //end point of the api

app.use(express.json()); //so the express will make every post a json file
/*
app.listen(
    PORT,
    () => console.log("it's alive on http://localhost:"+PORT)
) //fires the api on the server
*/
app.get('/montexte',(req,res)=>{
res.status(200).send({
    intro: "premier",
    text: "Cet un test api qui doit renvoyer un texte qui sera exposé sur l'écran"
})
});
app.post('/montexte/:id',
(req,res)=>{
    
        const { id } = req.params;
        const { intro } = req.body;
        if (!intro){
            res.status(418).send({
                message:"we need an intro!"
            }) 
        }
    res.send({
        intro:"C'est mon "+intro+ " texte et ID of  "+ id
    })
}
);
app.listen(
    PORT,
    () => console.log("it's alive on http://localhost/montexte:"+PORT)
) //fires the api on the server by typing in cmd : node index.js
//test using postman in address http://localhost:8080/montexte choose get then the first message is sent
//in address http://localhost:8080/montexte/:2 and choose body/JSON post {
 //   "intro":"deusieme",
 //   "message":"c'est un deusieme teste"
//} 
//we get the response :"intro": "C'est mon deusieme texte et ID of  :2" which means the rest api is reachable and responding