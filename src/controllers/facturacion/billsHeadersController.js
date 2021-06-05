import billheaders from "../../model/billsHeaders.js";
import clients from "../../model/clients.js";

export const getbillheaders = async (req, res) => {
    const billheaderAll = await billheaders.findAll();
    res.json({
        billheaderAll
    })
}
export const getbillheadersbyid = async (req, res) => {
    const bh_id = req.params.bh_id
    const billheaderbyid = await billheaders.findOne({
        where: {
            bh_id
        }
    });
    res.json({
        billheaderbyid
    })
}

export const createbillheaders = async (req, res, next) => {
    try {
        const { payment_type_id, client_id, bh_total, bh_subtotal, bh_iva } = req.query
        let date = new Date();
        let last = await billheaders.findAll({
            limit: 1,
            order: [['bh_id', 'DESC']]
        });


        last = last[0].dataValues.bh_id === undefined ? "FACT-00000001" : `FACT-${"0".repeat(8 - (last[0].dataValues.bh_id + 1).toString().length) + (last[0].dataValues.bh_id + 1)}`;

        const client = await clients.findOne({ where: { cli_id: client_id } });

        if (client.dataValues === undefined) throw Error("Invalid client id");
        if (client.dataValues.cli_payment_type_id != payment_type_id) throw Error("Invalid payment id, this client only accepts the payment: " + client.dataValues.cli_payment_type_id);

        let newbillheader = await billheaders.create({
            bh_date: date,
            payment_type_id,
            client_id,
            bh_total: bh_total,
            bh_subtotal: bh_subtotal,
            bh_iva,
            bh_bill_code: last
        }, {
            fields: ['bh_date', 'payment_type_id', 'client_id', "bh_total", "bh_subtotal", "bh_iva", "bh_bill_code"]
        })
        if (newbillheader) {
            res.json({
                message: 'Creado correctamente',
                data: newbillheader
            })
        }
    } catch (error) {
        console.log(error)
        next(error.message)
    }
}

export const updatebillheaders = async (req, res) => {
    const { bh_id, payment_type_id, client_id, bh_total, bh_subtotal, bh_iva } = req.query
    const billheaderUp = await billheaders.findOne({
        attributes: ['bh_id', 'payment_type_id', 'client_id'],
        where: {
            bh_id
        }
    })
    try {
        await billheaderUp.update({
            payment_type_id,
            client_id,
            bh_total,
            bh_subtotal,
            bh_iva
        })
        return res.json({
            message: 'bill header update',
            data: billheaderUp
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salio mal',
            dat: {}
        })
    }

}
export const deletebillheaders = async (req, res) => {
    const bh_id = req.params.bh_id
    try {
        const deleteRowCount = await billheaders.destroy({
            where: {
                bh_id
            }
        })
        res.json({
            message: 'billheaders delete',
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salio mal',
            dat: {}
        })
    }

}