const pool = require("./db");

pool.query("INSERT INTO public.todo(todo_desc) VALUES ($1) RETURNING *",['walking'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();