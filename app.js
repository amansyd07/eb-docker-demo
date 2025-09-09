const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>EB Docker Demo</title>
        <style>
          body { font-family: Arial; max-width: 800px; margin: 0 auto; padding: 20px; }
          .container { border: 1px solid #ddd; border-radius: 5px; padding: 20px; background-color: #f9f9f9; }
          .version { color: #0066cc; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>EB Docker Demo Application</h1>
          <p>Application <span class="version">Version 2.0</span> running successfully!</p>
          <p><strong>Server Time:</strong> ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo application listening on port ${port}`);
  console.log(`Version: 2.0`);
});
