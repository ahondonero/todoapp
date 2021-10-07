const pool = require("./db");

pool.query("DELETE FROM public.rental WHERE todo_id = $1 RETURNING *",[3],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();