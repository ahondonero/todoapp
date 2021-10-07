const pool = require("../db");

pool.query("UPDATE public.rental SET todo_desc = $1 WHERE todo_id = 3",['drinking'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();