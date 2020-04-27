
var express = require('express');
var router = express.Router();
const db = require('./queries');

//const Pool = require('pg').Pool;
//const pool2 = Pool

router.use(bodyParser.json());
router.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

router.get('/', (req, res) => {
	res.json({info: 'Node.js, Express, and Postgres API' });
})

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

router.post('/groups/user', db.createUsergroup)
router.put('/groups/user', db.updateUsergroup)

router.post('/groups/blog', db.createBloggroup)
router.put('/groups/blog', db.updateBloggroup)

router.post('/blogs', db.createBlog)

router.put('/blogs/group', db.groupBlog)
