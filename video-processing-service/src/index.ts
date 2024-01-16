import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => { // when request is made to "/", will res.send
    res.send("Hello World");
});

// app.listen is like opening the doors of your restaurant at a 
// specific time and announcing, "We are open for business at this location!" In web server terms, app.listen starts the Node.js HTTP server at a specific port
// It tells your Express application to start listening for incoming requests on that port,
// making your web server operational and accessible to clients.
app.listen(port, () => {
    console.log(
        `Video processing service listening at http://localhost:${port}`);

})