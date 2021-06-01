import clients from "../../model/clients.js"
import { sequelize } from "../../db/connection.js"
import * as validators from "../../utilities/validators.js"


export const getAllClients = async (req, res) => {
    const clientsAll = await clients.findAll();
    res.json({
        clientsAll
    })
}


export const createNewClients = async (req, res, next) => {
    try {
        console.log(req.query)
        // if (!validators.validateIdCard(req.query.cli_id_card)) throw Error("Invalid id card");
        // if (!validators.validateString(req.query.cli_name)) throw Error("Invalid name");
        // if (!validators.validateString(req.query.cli_born_date)) throw Error("Invalid born date");
        // if (!validators.validateString(req.query.cli_address)) throw Error("Invalid address");
        // //if (!validators.validateEmail(req.query.cli_email)) throw Error("Invalid email");
        // if (!validators.validatePhone(req.query.cli_phone)) throw Error("Invalid phone number");
        // if (!validators.validateStingBoolean(req.query.cli_status)) throw Error("Invalid status");

        const { cli_id_card, cli_name, cli_born_date, cli_address, cli_email, cli_phone, cli_status, cli_client_type_id } = req.query

        const cli_born_date2 = Date(cli_born_date)


        const respond = await clients.create({
            cli_id_card: cli_id_card,
            cli_name: cli_name,
            cli_born_date: cli_born_date2,
            cli_address: cli_address,
            cli_email: cli_email,
            cli_phone: cli_phone,
            cli_status: cli_status,
            cli_client_type_id: cli_client_type_id
        });


        res.send(respond.dataValues)

    } catch (e) {
        next(e)
    }
}

export const updateAClient = async (req, res, next) => {
    try {

        const cli_id=req.params.cli_id;

        //if (!validators.validateIdCard(req.query.cli_id_card)) throw Error("Invalid id card");
        //if (!validators.validateString(req.query.cli_name)) throw Error("Invalid name");
        //if (!validators.validateString(req.query.cli_born_date)) throw Error("Invalid born date");
        //if (!validators.validateString(req.query.cli_address)) throw Error("Invalid address");
        //if (!validators.validateEmail(req.query.cli_email)) throw Error("Invalid email");
        //if (!validators.validatePhone(req.query.cli_phone)) throw Error("Invalid phone number");
        //if (!validators.validateStingBoolean(req.query.cli_status)) throw Error("Invalid status");

        const { cli_id_card, cli_name, cli_born_date, cli_address, cli_email, cli_phone, cli_status, cli_client_type_id } = req.query

        const cli_born_date2 = Date(cli_born_date)



        const respond = await clients.update({
            cli_id_card: cli_id_card,
            cli_name: cli_name,
            cli_born_date: cli_born_date2,
            cli_address: cli_address,
            cli_email: cli_email,
            cli_phone: cli_phone,
            cli_status: cli_status,
            cli_client_type_id: cli_client_type_id
        },
        
        {
            where: {
                cli_id:cli_id
            }

        }
        
        );

        console.log(respond)
        res.send({success:true,cli_id:respond})


    } catch (e) {
        next(e)
    }
}

export const deleteAClient = async (req, res,next) => {

    

    try {

        const cli_id=req.params.cli_id;

        const respond= await clients.destroy({where: {
            cli_id:cli_id
        }});

        console.log(respond);
        res.send("sucess");
        

    } catch (e) {
        next(e);
    }
}
