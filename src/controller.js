const pool = require("../db");
const Todo = require("../model/todo");
const uuid = require('uuid');
const queries = require('./queries')
const { v4: uuidv4 } = require('uuid');
// todo  part
const addTodo = async (req, res, next) => {
  try {
    const {
      title,
      sDescription,
      sDate,
      priority,
      sTime,
      finish,
      sCategory,
    } = req.body;
    const tId=uuidv4()
    pool.query(
      queries.addTodo,
      [tId, title, sDescription, sDate, priority, sTime, finish, sCategory],
      (error, result) => {
        if(!error){
            res.send("Todo saved successfuly");
        }
      
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllTodos = async (req, res, next) => {
  try {
    pool.query(queries.getTodo, (error, results) => {
      if (error) throw error;
      res.status(200).json([results.rows]);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    pool.query(queries.getTodoById, [id], (error, result) => {
      if (!error) {
        res.status(200).json(result.rows);
      } else {
        res.status(404).send("Todo with the given ID not found");
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, sDescription, sDate, priority, sTime, finish, sCategory } =
      req.body;
    pool.query(
      queries.updateTodo,
      [title, sDescription, sDate, priority, sTime, finish, sCategory, id],
      (error, result) => {
        if (!error)
        {
          res.status(200).send("Todo updated successfuly");
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

        pool.query(queries.deleteTodo, [id], (error, result) => {
          if (!error) 
          {
            res.status(200).send("Todo deleted successfully.");
          }
        });
      
  } catch (error) {
    res.status(400).send(error.message);
  }
};





// category part
const addCategory = async (req, res, next) => {
  try {
    const {
        title,
        colorCode,
    } = req.body;
    const cId=uuidv4()
    pool.query(
      queries.addCategories,
      [cId, title, colorCode],
      (error, result) => {
        if(!error){
            res.send("Category saved successfuly");
        }
      
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    pool.query(queries.getCategories, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id)
    pool.query(queries.getCategoriesById, [id], (error, result) => {
      if (!error) {
        res.status(200).json(result.rows);
      } else {
        res.status(404).send("Category with the given ID not found");
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    let { title, colorCode} =
      req.body;
    pool.query(
      queries.updateCategories,
      [title, colorCode, id],
      (error, result) => {
        if (!error) 
        {
          res.status(200).send("Category updated successfuly");
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletCategory = async (req, res, next) => {
  try {
    const id = req.params.id;

        pool.query(queries.deleteCategories, [id], (error, result) => {
          if (!error) 
          {
            res.status(200).send("Category deleted successfully.");
          }
        });
      
    }
   catch (error) {
    res.status(400).send(error.message);
  }
};


module.exports = {
  addTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  addCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deletCategory,
};
