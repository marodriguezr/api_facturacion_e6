export const validateIdCard = (idCard) => {
    if (idCard===undefined) return false;
    var cad = idCard.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if (cad !== "" && longitud === 10) {
        for (var i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if (cad.charAt(longitud - 1) == total) {
            return true;
        } else {
            return false;
        }
    }
}
export const validateEmail = (input) => {
    console.log(input)
    if (input===undefined) return false;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    } else {
        alert("Invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}
export const validatePhone = (input) => {
    if (input===undefined) return false;
    return 1 < input.trim().length <= 10;
};
export const validateString = (input) => {
    return !(input === undefined || input.trim() === "");
};


export const calcularMayorEdad = (fecha) =>{
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    if (edad>=18){
        return true
    }else{
        return false
    }
}



export const validateStingBoolean = (input)=>{
    if (input===undefined) return false;
    if (input.trim().toLowerCase()==="true" || input.trim().toLowerCase()==="false" ) return true
    else return false;
};

