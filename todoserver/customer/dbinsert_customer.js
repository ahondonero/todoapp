const pool = require("./db");

pool.query("INSERT INTO public.customer(first_name) VALUES ($1) RETURNING *",['walking'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();