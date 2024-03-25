const skills: string []= ['Bash', 'Counter', 'Healing'];

//creacion de una interface para definir tipos de un futuro objeto

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //? es para que no sea obligatorio colocarlo en el objeto
}

//creacion de un objeto
const strider: Character ={
    name: 'Strider',
    hp:100,
    skills: ['Bash','Counter']
}

strider.hometown='Rivendell';

console.table(strider);
export{}