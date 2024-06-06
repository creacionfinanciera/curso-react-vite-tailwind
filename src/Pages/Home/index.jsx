// importamos el hook para poder crear el estado
import { useState, useEffect } from 'react'; 
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
    
    // CREAMOS EL ESTADO
    // items, es la cajita, es dónde vamos a almacenar esos productos que vienen de nuestra API, vamos a atraparlos ahí, ese va a ser el valor original
    // setItems, es quien va a inyectar o va a setear el valor de los items, es decir, es quien va a almacenar en la cajita toda la información que necesitemos
    // dentro de (), vamos a poner un valor por defecto, que puede ser cualquier cosa dependiendo de lo que necesitemos, unas llaves indicando que va a ser un objeto en un futuro, o puede ser un array vacío, puede ser false, true, null. En este caso no queremos que tenga ningún valor inicial, entonces le ponemos 'null'
    const [ items, setItems ] = useState(null);

    // CONSUMO DE LA API
    // siempre que vayamos a hacer un consumo de una API en nuestra mente tiene que estar 'useEffect'
    // el [] al final, es el valor que nosotros queremos enviarle por defecto al principio, que en este caso no le vamos a enviar nada
    // fecth es quien llama a la API, y le ponemos el endoint que se encuentra en la documentación
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        // esta información viene en tipo promesa, entonces con '.then' resolvemos esa promesa, y adentro definimos la respuesta, y le decimos que la queremos en formato '.json'
        // y despues lo que tenemos que hacer es transformar esa información, para que nos funcione como nosotros las necesitamos
            // podemos usar el console.log siempre para saber cual es el paso siguiente que necesitamos hacer
            // .then(response => console.log(response.json()))
            // asi es que nos damos cuenta que hay que resolver primero una promesa, y despues que necesitamos convertir la información al formato que necesitemos
            .then(response => response.json())
            // .then(data => console.log(data))
            // vemos que ahora si nos viene la información como nostros la necesitamos
        
            // y procedemos a almacenar esta información en el estado, como ya sabemos que 'setItems' es quien me va a ayudar a tomar la información y a guardarla en 'items', entonces usamos 'setItems'
            .then(data => setItems(data))

            // este manejo del error lo sugieren por fuera del video, entonces lo agrego
            //.catch(error => console.error('Error fetching data:', error))
            
    }, []);


    return (
        <Layout>
            Home
            {/* después de consumir la API, necesito que dependiendo de la cantidad de items, me muestre esa misma cantidad de cards */
            /* entonces llamamos a items, y con '?', decimos si este item está, como es un array podemos usar '.map', por cada uno de los elementos de ese array vamos a mostrar una Card, e inmediatamente se renderiza una de las Cards multiplicada por la cantidad de elementis que tenga el array */}
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                { 
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
        
    )
}

export default Home;