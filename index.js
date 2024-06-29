import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

app.listen(port, () => {
    console.log("The server is listening on port 3000");
});

app.get("/", (req, res)=>{
     res.send("this is the home page ")
})

app.get('/profile/:username',(req, res)=>{

    let {username} = req.params
    res.send(`the page belong to ${username} and his id number is `)
})
app.get('/search',(req,res)=>{
    let {q} =req.query
    if(!q){
        res.send('<h1> the request you send is not found  </h1>')
    }
    res.send(` <h1>the result you search for it is ${q} </h1>`)
})


// app.get('/', (req, res) => {
//     res.send("This is my first server program");
// });

// app.get('/khan', (req, res) => {
//     res.send("This is the about page");
// });

// app.get('/contact', (req, res) => {
//     res.send("This is the contact page");
// });

// app.get('/weather/:cityName', (req, res) => {
//     let weatherData = {
//         karachi: {
//             city: "karachi",
//             temp: 30,
//             feellike: 34,
//             maxTemp: 45
//         },
//         london: {
//             city: "london",
//             temp: 45,
//             feellike: 34,
//             maxTemp: 33
//         }
//     };

//     let inputCityName = req.params.cityName.toLowerCase();
//     let weatherDatatoSend = weatherData[inputCityName];

//     if (weatherDatatoSend) {
//         console.log("weather report of the city name " , inputCityName)
//         res.send(weatherDatatoSend);
//     } else {
//         console.log("the resut is not found for the city" , inputCityName)
//         res.status(404).send()
//     }
// });
