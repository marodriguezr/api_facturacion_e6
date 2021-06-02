import billheaders from "../../model/billsHeaders.js";
import billdetails from '../../model/bill_details.js'
export const getbillheaders = async (req, res) => {
    const billheaderAll = await billheaders.findAll({
        include: [billdetails]
    });
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

export const createbillheaders = async (req, res) => {
    const { payment_type_id, client_id } = req.query
    let date = new Date();
    try {
        let newbillheader = await billheaders.create({
            bh_date: date,
            payment_type_id,
            client_id
        }, {
            fields: ['bh_date', 'payment_type_id', 'client_id']
        })
        if (newbillheader) {
            res.json({
                message: 'Creado correctamente',
                data: newbillheader
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salio mal',
            dat: {}
        })
    }
}

export const updatebillheaders = async (req, res) => {
    const { bh_id, payment_type_id, client_id } = req.query
    const billheaderUp = await billheaders.findOne({
        attributes: ['bh_id', 'payment_type_id', 'client_id'],
        where: {
            bh_id
        }
    })
    try {
        await billheaderUp.update({
            payment_type_id,
            client_id
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