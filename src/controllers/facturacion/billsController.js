import billheaders from "../../model/billsHeaders.js";
import billdetails from "../../model/bill_details.js";
import paymentsTypes from "../../model/payments_types.js";
import clients from "../../model/clients.js";

export const getbillbyPayments = async (req, res) => {
    const { pt_id, cli_id_card } = req.query;
    const billPayments = await billheaders.findAll({
        include: [billdetails, {
            model: paymentsTypes, where: {
                pt_id
            }
        }, {
                model: clients, where: {
                    cli_id_card
                }
            }]
    });
    res.json({
        billPayments
    })
}

export const getbillbyProductId = async (req, res) => {
    const { bd_product_id } = req.query;
    const billPayments = await billheaders.findAll({
        include: [{ model: billdetails, where: { bd_product_id } }]
    });
    res.json({
        billPayments
    })
}

export const getCurrentWritableBillCode = async (req, res) => {
    let last = await billheaders.findAll({
        limit: 1,
        order: [['bh_id', 'DESC']]
    });

    last = last.length === 0 ? "FACT-00000001" : `FACT-${"0".repeat(8 - (last[0].dataValues.bh_id + 1).toString().length) + (last[0].dataValues.bh_id + 1)}`;

    res.json({last: last});
};