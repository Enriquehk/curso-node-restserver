const { Router } = require('express');
const router = Router();
const { userGet,
		userPut,
		userPost,
		userDelete,
		userPatch } = require('../controllers/user.controller');

router.get('/', userGet);
router.put('/:id', userPut);
router.post('/', userPost);
router.delete('/', userDelete);
router.patch('/', userPatch);




module.exports = router;

