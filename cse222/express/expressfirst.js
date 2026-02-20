import express from 'express';
let app = express();
// routes - get, post, put, delete
app.get('/', (req, res) => {
    res.send('Hello World!');

});
app.get('/contact', (req, res) => {
    res.send(
        `<h1>Contact Us</h1>
        <input type="text" name='message' />
        <input type="submit" value='Send' />`
    );
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});