
function animacao(el) {
    el.classList.add("loading");
    el.innerHTML = "Calculando...";
    return el;

}

function calcularTMB(){
    let idade = window.document.getElementById("idade").value;
    let peso = window.document.getElementById("peso").value;
    let altura = window.document.getElementById("altura").value;
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

    const nivelAtv = window.document.getElementById("nivel").value;

    let res = window.document.getElementById("resposta1");
    let resGet = window.document.getElementById("resposta2");
    let getTexto = window.document.getElementById("getTexto")
    let getTexto1 = window.document.getElementById("getTexto1");
    
    let resTmb = window.document.getElementById("get");
    let tmbTexto = window.document.getElementById("tmbTexto")
    let tmbTexto1 = window.document.getElementById("tmbTexto1")
    
    let resGse = window.document.getElementById("gse")
    let gseTexto = window.document.getElementById("gseTexto")
    let gseTexto1 = window.document.getElementById("gseTexto1")
    

    // AQUI VOU CALCULAR O GASTO DE ENERGIA BASAL
    let tmbH = (10 * peso) + (6.25 * altura) - (5 * idade) + 5
    let tmbM = (10 * peso) + (6.25 * altura) - (5 * idade) - 161

    

    // AQUI VOU CALCULAR O GET QUE È GASTO DE ENERGIA TOTAL
    


        
    if (sexoSelecionado) {
        let valor = sexoSelecionado.value
        if (valor == "Masculino") {
            resTmb.innerHTML = `<img src="img/balanca.png"><p><b>${tmbH}</b>Kcal</p>`
            
        }
        else {
            resTmb.innerHTML = `<img src="img/balanca.png"><p><b>${tmbM}</b>Kcal</p>`
            
        }
        // Confirma se os itens estao preenchidos corretamente
        // E condiciona cada nivel de atividade a um valor
        res.innerHTML = `Pessoa do sexo <b>${valor}</b> de <b>${idade} anos</b>, pesando
                <b>${peso}kg</b> e medindo <b>${altura}cm</b>, com atividade fìsica ` 
                
        let a = res.innerHTML
        getTexto.innerHTML = '<h2>Gasto Energètico Total:</h2>'
        getTexto1.innerHTML = '<p>O gasto Energético Total (GET), é a quantidade total de energia que o corpo utiliza ao longo do dia para realizar todas as suas funções, incluindo atividades vitais e físicas. </p>'
         
        tmbTexto.innerHTML = '<h2>Taxa Metabólica Basal</h2>'
        tmbTexto1.innerHTML = '<p>Taxa Metabólica Basal (TMB) é a quantidade mínima de energia que o corpo necessita para realizar funções vitais, em repouso absoluto.</p>'   

        gseTexto.innerHTML = '<h2>Gasto Semanal de Energia:</h2>'
        gseTexto1.innerHTML = '<p>O Gasto Semanal de Energia (GSE) é a quantidade total de energia que o corpo consome ao longo de uma semana, considerando todas as atividades realizadas.</p>'
        
        if (idade > 0 && idade < 100 && peso > 0 && peso < 200 && altura > 0 && altura < 300) {
            if (nivelAtv == "Sedentário (nenhum exercicío)") {
                res.innerHTML = `${a}<b>${nivelAtv}</b>`
                
                
                if (sexoSelecionado.value == "Masculino") {
                    let get = tmbH * 1.2
                    let gse = tmbH * 7
                    resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                    resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
                else {
                    get = tmbM * 1.2
                    gse = tmbM * 7
                   resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>` 
                   resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
            }
            else if (nivelAtv == "Levemente Ativo (1-2 dias na semana)") {
                res.innerHTML = `${a}<b>${nivelAtv}</b>`
                if (sexoSelecionado.value == "Masculino") {
                    get = tmbH * 1.375
                    gse = (tmbH * (1.38 * 2)) + (tmbH * 5)
                    resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                    resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
                else {
                    get = tmbM * 1.375
                    gse = (tmbM * (1.38 * 2)) + (tmbM * 5)
                   resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                   resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>` 
                }
            }
            else if (nivelAtv == "Moderadamente ativo (3-5 dias na semana)") {
                res.innerHTML = `${a}<b>${nivelAtv}</b>`
                if (sexoSelecionado.value == "Masculino") {
                    get = tmbH * 1.55
                    gse = (tmbH * (1.55 * 4.5)) + (tmbH * 2.5)
                    resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                    resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                    
                }
                else {
                    get = tmbM * 1.55
                    gse = (tmbM * (1.55 * 4.5)) + (tmbM * 2.5)
                   resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>` 
                   resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
            }
            else if (nivelAtv == "Muito ativo (6-7 dias na semana)") {
                res.innerHTML = `${a}<b>${nivelAtv}</b>`
                if (sexoSelecionado.value == "Masculino") {
                    get = tmbH * 1.725
                    gse = (tmbH * (1.725 * 6.5)) + (tmbH * 0.5)
                    resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                    resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
                else {
                    get = tmbM * 1.725
                    gse = (tmbM * (1.725 * 6.5)) + (tmbM * 0.5)
                   resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                   resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>` 
                }
            }
            else {
                res.innerHTML = `${a}<b>${nivelAtv}</b>`
                if (sexoSelecionado.value == "Masculino") {
                    get = tmbH * 1.9
                    gse = tmbH * 14
                    resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                    resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>`
                }
                else {
                    get = tmbM * 1.9
                    gse = tmbM * 14
                   resGet.innerHTML = `<img src="img/fogo2.png"><p><b>${get.toFixed(2)}</b>Kcal</p>`
                   resGse.innerHTML = `<img src="img/GSE.png"><p><b>${gse.toFixed(2)}</b>Kcal</p>` 
                }
            }
        }
        else {
            alert("Digite os valores corretos!!")
        }
            
        
    
    }
    else {
        alert("Escolha um sexo!!")
    }
      
}

function processar() {
    const botao = document.querySelector("button");

    animacao(botao);

    setTimeout(() => {
        botao.classList.remove('loading');
        botao.innerHTML = 'Calcular de novo';
        calcularTMB();
    }, 2000);
}


























