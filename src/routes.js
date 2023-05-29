const {Router}=require('express');
const controller=require('./controller');
const router =Router();

// category route
router.post('/category', controller.addCategory);
router.get('/categories', controller.getAllCategories);
router.get('/category/:id', controller.getCategory);
router.put('/category/:id', controller.updateCategory);
router.delete('/category/:id', controller.deletCategory);

// Todo route

router.post('/todo', controller.addTodo);
router.get('/todos',  controller.getAllTodos);
router.get('/todo/:id', controller.getTodo);
router.put('/todo/:id', controller.updateTodo);
router.delete('/Todo/:id', controller.deleteTodo);

module.exports=router;