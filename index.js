const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env na raiz

const PORTA_APP = process.env.APP_PORT || 3333;
const HOST_APP = process.env.APP_HOST || 'localhost';

const app = express();

// Importa as rotas
const indexRouter = require("./src/routes/index");
const usuarioRouter = require("./src/routes/usuarios");
// const avisosRouter = require("./src/routes/avisos");
const medidoresRouter = require("./src/routes/medidores");
// const leiturasRouter = require("./src/routes/medidas");
// const limitesRouter = require("./src/routes/limites");
const empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
// app.use("/avisos", avisosRouter);
app.use("/medidores", medidoresRouter);
// app.use("/leituras", leiturasRouter);
// app.use("/limites", limitesRouter);
app.use('/empresas', empresasRouter);

app.listen(PORTA_APP, () => {
    console.log(`
 _ __ ___   ___   ___  ___   ___  ___ 
| \'_ \` _ \ / _ \ / _ \/ __|/ _ \/ __|
| | | | | | (_) | (_) \\__ \\  __/\\__ \\
|_| |_| |_|\\___/ \\___/|___/\\___||___/
                                     

    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n`);
});
