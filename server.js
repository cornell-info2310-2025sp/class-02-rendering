const express = require('express');
const app = express();
const port = 3000;

// serve static resources
app.use(express.static('public'));

app.get('/dynamic/example-a', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(`<!DOCTYPE html>
<html>

<head>
  <title>Example A Rendering</title>
</head>

<body>
  <h1>Example A Rendering</h1>

  <p>Is the HTML for this page being rendered on the server or the client?</p>

  <ol>
    <li>Using the "Network" tab of the Firefox Developer Tools, view the <strong>raw</strong> response for this page.</li>
    <li>Using the "View Source" feature of Firefox, study the HTML for this page.</li>
    <li>Refresh the page and compare the Rendered Date before and after.</li>
    <li>Complete the steps above 2 more times.</li>
  </ol>

  <h2>Rendered Date</h2>
  <p>${new Date().toLocaleString()}</p>
</body>

</html>`)
})

// start the web server
app.listen(port, () => {
  console.log(`Example URL:\nhttp://localhost:${port}`)
})
