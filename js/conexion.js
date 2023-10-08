const mysql = require('mysql');
class conexion{
  constructor(oConfing){
    this.oConfing=oConfing;
  }
/***
 * Recibe usuario
 */
  
  agregarUsuario(nombre, telefono, correo_electronico,contrasena){
    var con = mysql.createConnection(this.oConfing);
    con.connect(function(error){
      try{
        if(error){
          console.log("Error al establecer conexiòn"+ error);
        }else{
          console.log("Conexion exitosa");
          con.query("SELECT COUNT(*) AS USUARIOS FROM SENDEROS", Function(error, res, campo){
              if(error){
                 console.log("Error en el selct BD--" + console.error());
              }else{
                  console.log("Usuarios encontrados" + res[0].usuario);
                  if(parseInt(res[0].usuario) == 0){
                     con.query('INSERT INTO usuarios (nombre, telefono, correo_electronico, contrasena) valvues('$(nombre)','$(telefono)','$(correo_electronico)','$(contrasena)')'
                    ,function(error,res,campo){
                      if(error){
                        console.log("Error al insertar nuevo usuario" + console.error());
                      }else{
                        console.log("nuevo usuario registrado")
                      }
                      }

                });
              }
            }
          });
        }
      }catch(x){
        console.log("Contacto.agregarUsuario.connect --Error--"+ x);
      }
    });
  }
}
module.exports=contacto;
      
    
  



// Create a connection object
const connection = ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'senderos',

})

// Open the connection
connection.connect((err) => {
  if (err) throw err
    console.log('la conexion funciona')
})

connection.end()

 