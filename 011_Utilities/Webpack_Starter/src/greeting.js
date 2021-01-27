const greeting = (name) => `Hola $(name), bienvenidos al ECMA6`;

//Forma que lee Babel, ecma2015, ecma6 
export default greeting;

//Forma que lee node commonJS
//module.exports = greeting;