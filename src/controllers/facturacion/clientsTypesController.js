import clientsTypes from "../../model/clientsTypes.js";

export const getAllClientsTypes = async (req, res) => {
    try {
        const response = await clientsTypes.findAll()
        res.json({
            response
        })
    } catch (error) {
        res.json({ error })
    }

}

export const createClientType = async (req, res) => {
    const {value} = req.query
    try {
        const response = await clientsTypes.create({ct_value: value })
        res.json({
            message: 'Tipo de cliente creado con éxito',
            body: {
                response
            }
        })
    } catch (error) {
        res.json({ error })
    }

}

export const deleteClientType = async (req, res) => {
    const {id} = req.query
    try {
        const response = await clientsTypes.destroy({
            where: {
                ct_id: id
            }
        });
        res.json({
            message: 'Tipo de cliente eliminado',
            body: {
                clientsTypes: { id }
            }

        })
    } catch (error) {
        res.json({ error })
    }

}

export const updateClientType = async (req, res) => {
    const { id, value } = req.query
    try {
        const response = await clientsTypes.update({ ct_value: value }, {
            where: {
                ct_id: id
            }
        });
        res.json({
            message: 'Tipo de cliente actualizado',
            body: {
                clientsTypes: { id, value }
            }

        })
    } catch (error) {
        res.json({ error })
    }

}
