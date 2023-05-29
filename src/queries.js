const getCategories = "SELECT * FROM public.tbl_categories ";
const getCategoriesById = `SELECT * FROM public.tbl_categories WHERE "cId" = $1`;
const addCategories = `INSERT INTO public.tbl_categories("cId", "title", "colorCode") VALUES ($1,$2,$3)`;
const deleteCategories = `DELETE FROM tbl_categories WHERE "cId"=$1`;
const updateCategories = `UPDATE public.tbl_categories SET  title=$1, "colorCode"=$2  WHERE "cId"=$3`;

const getTodo = "SELECT * FROM tbl_todo";

const deleteTodo = `DELETE FROM tbl_todo WHERE "tId"=$1`;

const updateTodo = `UPDATE public.tbl_todo SET title=$1, "sDescription"=$2, "sDate"=$3, priority=$4, "sTime"=$5, finish=$6, "sCategory"=$7  WHERE  "tId"=$8`;

const addTodo =`INSERT INTO public.tbl_todo("tId", title, "sDescription", "sDate", priority, "sTime", finish, "sCategory")
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`

const getTodoById=`SELECT * FROM tbl_todo WHERE "tId"=$1`

module.exports = {
    getCategories,
    getCategoriesById,
    addCategories,
    deleteCategories,
    updateCategories,
  getTodo,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,

};
