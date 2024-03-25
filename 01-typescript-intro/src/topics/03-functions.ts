function addNumbers(a: number,b: number){
    return a+b;

}


const addNumbersArrow= (a: number, b: number) :string=>{
    return `${a+b}`;

}


function multiply(firstNumber: number,secondNumber?: number, base: number=2){ // primero oblicatorio, segundo optional, terceor optional con valor por defecto
    return firstNumber*base;
}

//const result: number= addNumbers(1,2)
//const result2: string= addNumbersArrow(2,2);
//const multiplyResult: number = multiply(5);

//console.log({result,result2,multiplyResult}); // coloco la variable entre {} para que se imprima como un objeto.

interface Character {
    name:string;
    hp: number;
    showHp:() =>void;
}

const healCharacter= (character: Character, amount: number )=>{
   // CharacterData.pv+=amount;  //como la propiedad no existe por no estar definida en la interface marcara error
       character.hp+=amount;
      
}

const strider: Character={
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider,10)
healCharacter(strider,20)

strider.showHp();