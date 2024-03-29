
export interface Product{
    description:string;
    price:number;
}

const phone: Product={
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export interface TaxtCalculationOptions{
    tax: number;
    products:Product[];
}

//function taxCalculation(options: TaxtCalculationOptions): number[]{  //desustructurar argumentos
//function taxCalculation({tax,products}: TaxtCalculationOptions):[number,number]{ //[number,number] devulve una tupla
export function taxCalculation(options: TaxtCalculationOptions):[number,number]{ //[number,number] devulve una tupla
    let total =0;
    const {tax,products}=options;
    //options.products.forEach(product=>{
       // products.forEach(product=>{
        //tarea desustructurar el objeto product
       products.forEach(({price}) => { //tercera forma de desustrucuturar para sacar el precio
       // total += product.price;   //desustructurar ya que lo unico que se necesita es el precio
         //utilizamos el precio desustrucuturado
         total+=price;
    });
   // return [total, total*options.tax];
   return [total, total*tax];
}
/*
const shoppingCart =  [phone, tablet];
const tax=0.15;

const result = taxCalculation({ //desusctruturar resultado que es un arreglo
    products: shoppingCart,
    tax:tax   // tambien puede dejarse un solo tax ya que la propiedad y la variable se llaman igual.
})*/

/*alternativa de desustructuracion
const [res,tax1] = taxCalculation({ 
    products: shoppingCart,
    tax:tax   
})

*/



/*tarea vamos a desustrucurar result que es un arreglo*/
//const [res,tax1]=[result[0], result[1]]

//console.log('Total', result[0]);
//console.log('Tax', result[1]);
//console.log('Total', res);
//console.log('Tax', tax1);
