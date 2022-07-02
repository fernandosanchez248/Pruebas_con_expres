import  express  from "express";
import  cors  from "cors";

// importamos la conexion de datos
import db from "./database/db.js";
import blogRoutes  from "./routes/routes.js";


const app = express();
app.use (cors());
app.use(express.json());
app.use('/blogs',blogRoutes);

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos');
} catch (error) {
    console.log('error al conetarse a la base de datos',error);
}

app.get('/', (req,res)=>{
    res.send('hola mundoooo')
})

app.listen(8000,()=>{
    console.log('server running in http:localhost:8000)');
})
 

