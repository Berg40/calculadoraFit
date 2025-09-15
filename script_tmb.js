

function calcularTMB(){
    let idade = window.document.getElementById("idade").value;
    let peso = window.document.getElementById("peso").value;
    let altura = window.document.getElementById("altura").value;
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

    const nivelAtv = window.document.getElementById("nivel").value;

    let res = window.document.getElementById("resposta1");
    let resGet = window.document.getElementById("resposta2");
    let resTmb = window.document.getElementById("get");
    let resGse = window.document.getElementById("gse")

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

        

        
        if (idade > 0 && peso > 0 && altura > 0) {
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
























