import axios from "axios";

export const inventoryAPI = axios.create({
    baseURL: 'https://modulo-inventario-app.herokuapp.com/'
});

// const a = (async () => {
//     console.log((await inventoryAPI.get("productos")).data);
// })();
