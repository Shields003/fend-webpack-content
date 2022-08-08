const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const textapi =  "983554e0cafbe2ba3d24b7a0d55ed17dy"
const cors = require('cors')

const app = express()
const bodyParser = require('body-parser')
// const meaningCloudApi = require('./meaningCloudApi.js');
const { url } = require('inspector');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
} )

app.get('/', (req, res) => {
    res.sendFile(path.join("src/client/index.html"))
} )

// API request sent to Meaning Cloud API
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sampleAPIreturn = {
       text: sentence_list[0].text,
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/
app.post('/test', (req, res) => {
    const url = req.body.url;
    console.log(url);
    textapi.sentiment(url, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
            res.send(response);
        }
    } );
} )



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log(mockAPIResponse)
})
