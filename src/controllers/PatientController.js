const Patient = require('../model/Patient');

module.exports = {
    ///Mostrar todos os usuarios
    async index(req, res) {
        try {
            const patient = await Patient.findAll();
            if (patient == '') {
                return res.status(404).json({
                    mensagem: 'A lista esta vazia'
                })
            }
            return res.status(200)
                .json(patient);

        } catch (error) {
            res.status(500).json({
                status: "error",
                data: error
            })
        }

    },
    ///Criar usuario
    async store(req, res) {
        try {
            const { nome, email, cpf, idade } = req.body;

            const userExists = await Patient.findOne({
                where: {
                    nome
                }
            });
            if (userExists) {
                return res.status(400).json({
                    mensagem: "O usuario ja existe"
                });
            }

            const user = await Patient.create({ nome, email, cpf, idade });

            return res.status(201).json(user);

        } catch (error) {
            res.status(500).json({
                status: "error",
                data: error
            })
        }
    },
    ///Mostrar usuario por id
    async show(req, res) {
        try {
            const { id } = req.params;

            const userExists = await Patient.findOne({
                where: {
                    id
                }
            });
            if (!userExists) {
                return res.status(400).send({ mensagem: "Usuario não encontrado" });
            }

            const user = await Patient.findAll({
                where: {
                    id
                }
            });

            return res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                status: "error",
                data: error
            })
        }
    },
    ///Alterar usurio
    async update(req, res) {
        try {
            const { id } = req.params;
            const usuario = req.body;

            const userExists = await Patient.findOne({
                where: {
                    id
                }
            })
            if (!userExists) {
                return res.status(400).json({
                    mensagem: 'Usuario não encontrado'
                })
            }
            await Patient.update(usuario, {
                where: {
                    id
                }
            })

            return res.status(200).json({
                status: "mudança feita"
            });

        } catch (error) {
            res.status(500).json({
                status: "error",
                data: error
            })
        }
    },
    ///Deletar usuario
    async destroy(req, res) {
        try {
            const { id } = req.params;

            const userExists = await Patient.findOne({
                where: {
                    id
                }
            });
            if (!userExists) {
                return res.status(400).send({ mensagem: "Usuario não encontrado" });
            }
            await Patient.destroy({
                where: {
                    id
                }
            })

            return res.status(200).json({ menssagem: 'Usuario apagado' });

        } catch (error) {
            res.status(500).json({
                status: "error",
                data: error
            })
        }
    }
}