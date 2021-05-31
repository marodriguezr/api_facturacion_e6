import clients from "../../model/clients.js";

export const getAllClients = async (req, res) => {
    const clientesAll = await clients.findAll();
    res.json({
        clientesAll
    })
}