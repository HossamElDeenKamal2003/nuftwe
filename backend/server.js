const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./router/userRouter');
const international = require('./router/internationalRouter');
const international_Links = require('./router/inter_links_router');
const dorms = require('./router/infoDormsRouter');
const trans = require('./router/trans_router');
const news = require('./router/newsRouter');
const admission = require('./router/admission');
const cors = require('cors');
app.use(cors());
//connect to mongoose
mongoose.connect('mongodb+srv://youssefmbadreldin:jnRdHgK39GuOZHgR@cluster0.rwl6z1n.mongodb.net/', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/faclity', international);
app.use('/links',international_Links);
app.use('/info',dorms);
app.use('/trans', trans);
app.use('/news', news);
app.use('/admission', admission)
// CORS OPTIONS preflight handler
app.options('/auth/signup', cors());
//server
app.listen(3000, () => {
    console.log('Server Running on port 3000');
});
