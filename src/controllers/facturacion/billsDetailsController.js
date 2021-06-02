import bill_details from "../../model/bill_details.js";

export const getAll_bill_details = async (req, res) => {
    const detalleAll = await bill_details.findAll();
    res.json({
        detalleAll
    })
}

export const createBillDetails = async (req, res) => {
    const { amount, price, has_iva, bill_header_id, product_id } = req.query
    try {
        const detail = await bill_details.create({
            bd_amount: amount,
            bd_price: price,
            bd_has_iva: has_iva,
            bd_bill_header_id: bill_header_id,
            bd_product_id: product_id
        }, { fields: ['bd_amount', 'bd_price', 'bd_has_iva', 'bd_bill_header_id', 'bd_product_id'] });
        if (detail) {
            res.json({
                message: 'billdetail creado',
                data: detail
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'error'
        })
    }
}

export const updateBillDetais = async (req, res) => {
    const { id, amount, price, has_iva, bill_header_id, product_id } = req.query;
    try {
        const detail = await bill_details.update({
            bd_amount: amount,
            bd_price: price,
            bd_has_iva: has_iva,
            bd_bill_header_id: bill_header_id,
            bd_product_id: product_id
        },{where:{
            bd_id:id
        }});
    
        if (detail) {
            res.json({
                message: 'billdetail actualizado',
                data: detail
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'error',
        })
    }
}

export const deleteBillDetais = async (req, res) => {
    const { id } = req.query;
    try {
        const detail = await bill_details.destroy({where:{
            bd_id:id
        }});
        if (detail) {
            res.json({
                message: 'billdetail eliminado',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'error',
        })
    }
}