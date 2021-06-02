import payments_types from "../../model/payments_types.js"
import { sequelize } from "../../db/connection.js"
import paymentsTypes from "../../model/payments_types.js";

export const getAllPaymentsTypes = async (req, res) => {
    const paymentsTypesAll = await paymentsTypes.findAll();
    res.json({
        paymentsTypesAll
    })
}

export const createPaymentsType = async (req, res) => {
    const { value } = req.query
    try {
        const detail = await paymentsTypes.create({
            pt_value: value
        }, { fields: ['pt_value'] })
            .then(function (data) {
                const res = { success: true, data: data, message: "created successful" }
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error }
                return res;
            })
        res.json(
            {
                message:'Ingresado'
            }
        );
    } catch (e) {
        console.log(e);
    }
}

export const updatePaymentsType = async (req, res) => {
    const { id, value } = req.query;
    try {
        const detail = await paymentsTypes.update({
            pt_value: value
        },{where:{
            pt_id:id
        }});
    
        if (detail) {
            res.json({
                message: 'forma de pago actualizado',
                data: detail
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'error',
        })
    }
}

export const deletePaymentsType = async (req, res) => {
    const { id } = req.query;
    try {
        const detail = await paymentsTypes.destroy({where:{
            pt_id:id
        }});
        if (detail) {
            res.json({
                message: 'forma de pago eliminado',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'error',
        })
    }
}
