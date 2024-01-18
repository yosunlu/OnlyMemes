import express from "express";
import ffmpeg from "fluent-ffmpeg"

const app = express();
app.use(express.json());

// app.get("/", (req, res) => { // when request is made to "/", will res.send
//     res.send("Hello World");
// });

app.post("/process-video", (req,res) => {
    // get path of the input video file from the requst body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

      // Check if the input file path is defined
    if (!inputFilePath || !outputFilePath) {
        return res.status(400).send('Bad Request: Missing file path');
  }

  ffmpeg(inputFilePath)
    .outputOptions('-vf', 'scale=360:-1') // 360p
    .on('end', function() {
        console.log('Processing finished successfully');
        res.status(200).send('Processing finished successfully');
    })
    .on('error', function(err: any) {
        console.log('An error occurred: ' + err.message);
        res.status(500).send('An error occurred: ' + err.message);
    })
    .save(outputFilePath);
})

// app.listen is like opening the doors of your restaurant at a 
// specific time and announcing, "We are open for business at this location!" In web server terms, app.listen starts the Node.js HTTP server at a specific port
// It tells your Express application to start listening for incoming requests on that port,
// making your web server operational and accessible to clients.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});