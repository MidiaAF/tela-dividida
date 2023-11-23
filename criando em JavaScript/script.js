

//Função para criar uma div com as propriedades fornecidas
function createDiv(className, position ,left , top, bottom ,width , height, backgroundColor ){
    var div = document.createElement('div')
        div.className = className;
        div.style.position = "absolute";
        div.style.left = left;
        div.style.top = top;
        div.style.bottom = bottom
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundColor = backgroundColor      
       
    }

    
// Criando as divs com as classes e estilos correspondentes
createDiv("top-left", "absolute", "0", "0", "15%", "40%", "#3498db");






/*document.addEventListener("DOMContentLoaded", function () {
    Função para criar uma div com as propriedades fornecidas
    function createDiv(className, width, height, backgroundColor, borderColor, top, left) {
        var div = document.createElement("div");
        div.className = className;
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundColor = backgroundColor;
        div.style.border = borderColor;
        div.style.position = "absolute";
        div.style.top = top;
        div.style.left = left;
        document.body.appendChild(div);
    }

     Criando as divs com as classes e estilos correspondentes
    createDiv("top-left", "15%", "40%", "#3498db", "10px solid rgb(0, 255, 98)", "0", "0");
    createDiv("bottom-left", "15%", "60%", "#db34b4", "10px solid blue", "40%", "0");

    createDiv("top-right", "20%", "15%", "#e74c3c", "10px solid rgb(0, 255, 64)", "0", "15%");
    createDiv("mid-right", "20%", "45%", "#f39c12", "10px solid rgb(255, 0, 21)", "15%", "15%");
    createDiv("bottom-right", "20%", "40%", "#9b59b6", "10px solid rgb(255, 234, 0)", "60%", "15%");

    createDiv("center-top", "50%", "50%", "#1812c4", "10px solid rgb(0, 255, 34)", "0", "35%");
    createDiv("bottom-center", "50%", "50%", "#df0821", "10px solid rgb(255, 234, 0)", "50%", "35%");

    createDiv("full-width", "15%", "100%", "#34495e", "10px solid rgb(255, 111, 0)", "0", "85%");
});*/







































