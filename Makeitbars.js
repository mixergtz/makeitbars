var Makeitbars = {
  template: function(html, datos){
    var array = html.match(/{{(.*?)}}*/g).map(function(val){
       return val.replace(/{{|}}|\s/g,'');
    });

    var replacedHtml = this.replaceData(html, array, datos);
    return replacedHtml;
  },
  replaceData: function(string, array, datos){

    var obj = datos;
    var result = string;

    // Iteramos sobre cada uno de los elementos del array y miramos si hay una propiedad en el objeto que se llame igual
    // Si es asi pasamos a reemplazar cada uno de los valores en el string que se pasó y lo retornamos
    for(var i = 0; i <= array.length; i++){
        if(array[i] in obj){
            var regex = new RegExp("{{\\s*"+array[i]+"\\s*}}", "gi");
            result = result.replace(regex, obj[array[i]]);
        }
    }

    return result;
  }

};