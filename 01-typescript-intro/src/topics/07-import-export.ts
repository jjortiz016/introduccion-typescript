import {Product, taxCalculation, TaxtCalculationOptions} from './06-function-destructuring';


const shoppingCart: Product[]=[

        {
            description: 'Nokia',
            price:100
        },
        {
            description: 'iPad',
            price:150
        }
];

const tax=0.15;
const calcular: TaxtCalculationOptions={
    tax:tax,
    products:shoppingCart
}

//const [total, tax1] = taxCalculation(calcular);

//otra forma

const [total, tax1] =taxCalculation({
    products:shoppingCart,
    tax:tax

});

console.log('Total:', total)
console.log('Tax:', tax1)