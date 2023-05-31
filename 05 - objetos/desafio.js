/* 1- Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularValorDoPercurso(DistanciaDoPercurso, gastoMedioPorKm, PrecoDoCombustivel){
    let ValorGastoDoPercurso = (DistanciaDoPercurso/gastoMedioPorKm) * PrecoDoCombustivel;
    return ValorGastoDoPercurso;
}   
    
}




const celta = new Carro('Chevrolet', 'Preto', 12);

console.log(celta.calcularValorDoPercurso(60, celta.gastoMedioPorKm, 5.5));  
