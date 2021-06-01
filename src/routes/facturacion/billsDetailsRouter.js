import { Router } from "express";
import {getAll_bill_details,createBillDetails, updateBillDetais, deleteBillDetais} from "../../controllers/facturacion/billsDetailsController.js";

export const billsDetailsRouter = Router();

billsDetailsRouter.get('/', getAll_bill_details);
billsDetailsRouter.post('/', createBillDetails);
billsDetailsRouter.put('/', updateBillDetais);
billsDetailsRouter.delete('/', deleteBillDetais);