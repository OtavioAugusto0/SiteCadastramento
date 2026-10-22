
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const banco = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

banco.query('SELECT NOW()')
    .then(() => {
        console.log('Conexão com PostgreSQL realizada com sucesso!');
    })
    .catch((erro) => {
        console.error('Erro ao conectar ao PostgreSQL:', erro.message);
    });

app.post('/cadastro', async function(req, res) {
    const {
        nomeCompleto,
        dataNascimento,
        cpf,
        estado,
        cidade,
        rua
    } = req.body;

    if (
        !nomeCompleto?.trim() ||
        !dataNascimento ||
        !cpf ||
        !estado?.trim() ||
        !cidade?.trim() ||
        !rua?.trim()
    ) {
        return res.status(400).json({
            mensagem: 'Preencha todos os campos.'
        });
    }

    const cpfLimpo = cpf.replace(/[.-]/g, '');

    if (!/^\d{11}$/.test(cpfLimpo)) {
        return res.status(400).json({
            mensagem: 'O CPF deve conter 11 dígitos numéricos.'
        });
    }

    try {
        const resultado = await banco.query(
            `INSERT INTO pessoas
            (nome_completo, data_nascimento, cpf, estado, cidade, rua)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id`,
            [
                nomeCompleto.trim(),
                dataNascimento,
                cpfLimpo,
                estado.trim(),
                cidade.trim(),
                rua.trim()
            ]
        );

        console.log('Cadastro salvo com ID:', resultado.rows[0].id);

        return res.status(201).json({
            mensagem: 'Cadastro realizado com sucesso!',
            id: resultado.rows[0].id
        });

    } catch (erro) {
        console.error('Erro ao salvar cadastro:', erro.message);

        if (erro.code === '23505') {
            return res.status(409).json({
                mensagem: 'Este CPF já está cadastrado.'
            });
        }

        if (erro.code === '22007' || erro.code === '22008') {
            return res.status(400).json({
                mensagem: 'A data de nascimento é inválida.'
            });
        }

        return res.status(500).json({
            mensagem: 'Não foi possível salvar o cadastro. Verifique o servidor.'
        });
    }
});

const servidor = app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});

servidor.on('error', function(erro) {
    console.error('Erro ao iniciar o servidor:', erro.message);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });
});
