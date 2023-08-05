        function calcular() {
            var pesoAtual = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);
            var imcAtual = calcularIMC(pesoAtual, altura);

            var imcIdeal = parseFloat(document.getElementById("imcIdeal").value);
            var pesoIdeal = calcularPesoIdeal(imcIdeal, altura);

            var pesoAPerder = pesoAtual - pesoIdeal;

            var resultado = "Seu IMC atual é: " + imcAtual.toFixed(2) + "<br>" +
                            "O IMC ideal para a sua altura é: " + imcIdeal.toFixed(2) + "<br>" +
                            "O peso ideal para o IMC " + imcIdeal.toFixed(2) + " é: " + pesoIdeal.toFixed(2) + " kg<br>";

            if (pesoAPerder > 0) {
                resultado += "Você precisa perder " + pesoAPerder.toFixed(2) + " kg para atingir o IMC ideal.";
            } else if (pesoAPerder < 0) {
                resultado += "Você precisa ganhar " + Math.abs(pesoAPerder).toFixed(2) + " kg para atingir o IMC ideal.";
            } else {
                resultado += "Seu peso atual já está próximo do IMC ideal.";
            }

            document.getElementById("resultado").innerHTML = resultado;
        }

        function calcularIMC(peso, altura) {
            var imc = peso / (altura * altura);
            return imc;
        }

        function calcularPesoIdeal(imcIdeal, altura) {
            var pesoIdeal = imcIdeal * (altura * altura);
            return pesoIdeal;
        }
