import express from "express"
import cors from "cors"
import { Pool } from "pg"
import bcrypt from "bcrypt"

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "API_Visiona",
    password: "thygas020",
    port: 5432
})

const app = express()
app.use(cors())
app.use(express.json())

//Validar / Fazer login
app.post("/login", (req, res) => {
    const { email } = req.body
    const { password } = req.body

    let SQL = ("SELECT * FROM Usuarios WHERE usuario_email = '"+email+"' OR nome_usuario = '"+email+"'")

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        }
        
        if (result.rows.length === 1) {
            const senha_digitada = result.rows.values().next().value.usuario_senha
            bcrypt.compare(password, senha_digitada, function(_, response){
                if (response) {
                    console.log(result.rows.values().next().value.usuario_id)
                    res.send({
                        msg: "Usuário logado com sucesso.",
                        status: 'OK',
                        id: result.rows.values().next().value.usuario_id
                    });
                    
                } else {
                    res.send({msg: 'Email / Usuário ou Senha incorretos.'})
                    
                }
            })
        } else {
            res.send({msg: 'Este usuário não existe.'})
        }
    })
})

//Cadastrar um usuario no banco
app.post("/registro", (req, res) => {
    const { nome } = req.body
    const { email } = req.body
    const { nomeUsuario } = req.body
    const { senha } = req.body
    
    bcrypt.hash(senha, 10, (err, hash) => {
        if (err){
            res.send(err)
        } else {
            let SQL = ("INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ('"+nome+"','"+email+"', '"+nomeUsuario+"', '"+hash+"')")
            DB.query(SQL, (err, result) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({msg: "Cadastro realizado com sucesso."})
                }
            })
        }
    })
})

//Editar informações do usuário
app.put("/editar-info", (req, res) => {
    const { nome } = req.body
    const { username } = req.body

    let SQL = ("UPDATE Usuarios SET usuario_nome = '"+nome+"', nome_usuario = '"+username+"' WHERE usuario_ID = 'e367e3f8-d0fe-477f-a8fe-62e09a699844'")

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({msg: "Editado com sucesso."})
        }
    })
})

//Pegar informações do usuário
app.get("/read", (_, res) => {

    let SQL = "SELECT usuario_nome, usuario_email, nome_usuario, usuario_tipo, to_char(usuario_data_criacao, 'DD/MM/YYYY') FROM usuarios WHERE usuario_ID = 'e367e3f8-d0fe-477f-a8fe-62e09a699844'";
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

//Pegar as ações do usuário
app.get("/readAcoes", (_, res) => {

    let SQL = "SELECT tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS')FROM acoes WHERE id_usuario = 'e367e3f8-d0fe-477f-a8fe-62e09a699844'"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

//Pegar todos os usuário (tela admin)
app.get("/allusers", (_, res) => {

    let SQL = "SELECT usuario_nome, to_char(usuario_data_criacao, 'DD/MM/YYYY'), usuario_status_registro FROM usuarios LIMIT 10"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

//Pegar todas as ações (tela admin)
app.get("/usersAllAcoes", (_, res) => {

    let SQL = "SELECT usuario_nome, tipo_acao, to_char(data_acao, 'DD/MM/YYYY HH24:MI:SS') FROM usuarios JOIN acoes ON usuarios.usuario_id = acoes.id_usuario;"
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando!")
})