// esta es una función que esta afuera de los componentes, porque puede llegar a tener varios usos, en varias partes de nuestra aplicación
// pasamos el argumento 'products' para que sea muy general y esta función se pueda usar en un contexto global
export const totalPrice = (products) => {
    // definimos un acumulador
    let sum = 0;
    // usamos forEach, para aue la función que tenemos adentro de su parentesis, sea ejecutada por cada uno de los productos que tenemos en el array
    // y la función lo que dice es, necesito que el precio del producto que se esta iterando se agregue al acumulador que ya teniamos
    products.forEach(product => sum += product.price);
    return sum;
}