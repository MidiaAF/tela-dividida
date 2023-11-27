
//Função para criar uma div com as propriedades fornecidas
function createDiv(className, position ,left , top, bottom ,width , height, backgroundColor,rigth ){
    
    let area = document.getElementById('body')/* elemento pai Pai  criado ID no HTML*/
    // area.innerText=`<div class="teste"></div>`
    let div = document.createElement('div')
    div.className = "className";
    div.style.position = "absolute";
    div.style.left = left;
    div.style.top = top;
    div.style.bottom = bottom
    div.style.width = width;
    div.style.height = height;
    div.style.backgroundColor = backgroundColor;
    div.style.rigth= rigth;
    area.appendChild(div);/*elemento filho */
       
}

    
 //Criando as divs com as classes e estilos correspondentes
createDiv("top-left", "absolute", "0", "0","0", "15%", "40%", "#3498db","0");
createDiv("bottom-left", "absolute", "0", "40%", "0", "15%", "60%", "#db34b4","0");
createDiv("top-right" ,"absolute", "15%" ,"0" ,"0" ,"20%" ,"15%" , "#e74c3c","0");
createDiv("mid-right","absolute","15%","15%","0","20%","45%", "#f39c12","0");
createDiv("bottom-right","absolute","15%","60%","0","20%","40%","#9b59b6","0");
createDiv("center-top","absolute","35%","0","0","50%","50%","#1812c4","0");
createDiv("bottom-center","absolute","35%","50%","0","50%","50%","#df0821","0");
createDiv("full-width","absolute" ,"85%","0" ,"0","15%","100%","#34495e" )
console.log()













































