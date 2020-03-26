const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const routes = require('./routes/routes')
const port = 8000
app.use(bodyparser.json())
app.use('/', routes)
app.listen(port, {})
app.use((error, req, res, next) => {
    res.status(400).json(
        {
            success: false,
            error

        }
    )
}
);