$(document). ready (function)

$("#carouselExampleIndicators") .carrousel({
   interval: 5000

}
var items = $(parentElement).find("input,select");
for (var i = 0; i < items.length; i++)
            {
                var validator = new Validator(items[i]);
                validator.validate();
            }
)

jQuery( "#form-validacion" ).validate({
           rules: {
                   mail: {
                           required: true,
                           minlength: 4,
                           maxlength: 20
                   }
           },

           messages: {
                   mail: {
                           required: "Debe ingresar un mail para suscribirse",
