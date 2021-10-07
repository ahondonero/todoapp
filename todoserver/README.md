# Install Steps

1. Setup for node environment
```bash
> npm init
# package.json created
```

2. Install pg and Express JS for routing and database use case
```bash
> npm install pg express
# verify package.json
```

3. Add a .gitignore script **to save space**
```text
node_modules/
```

4. Created setup db script for config
```js
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "",
    password: "",
    host: "",
    port: 5432,
    database: ""
});

module.exports = pool;
```

5. Created script for DML statement
```js
const pool = require("./db");
pool.query("SELECT * FROM public.todo",(err, res)=>{
    try{
        console.log(res.rows);        
    }catch(err){
        console.error(err.message);
    }
});
pool.end();

```