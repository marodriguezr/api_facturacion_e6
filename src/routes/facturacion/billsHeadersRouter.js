import { Router } from "express";
import { createbillheaders, getbillheaders,updatebillheaders,deletebillheaders,getbillheadersbyid} from "../../controllers/facturacion/billsHeadersController.js";

export const billsHeadersRouter = Router();
billsHeadersRouter.get('/', getbillheaders);
billsHeadersRouter.get('/:bh_id', getbillheadersbyid);
billsHeadersRouter.post('/', createbillheaders);
billsHeadersRouter.put('/', updatebillheaders);
billsHeadersRouter.delete('/:bh_id', deletebillheaders);
