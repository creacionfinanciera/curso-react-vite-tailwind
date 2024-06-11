// importamos el hook para poder crear el estado
import { useContext } from 'react'; 
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
    
    const context = useContext(ShoppingCartContext);

    // esta es la función que nos va a permitir renderizar por producto dependiendo de lo que se escriba en el input
    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>We don't have anything :(</div>
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type="text" 
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => context.setSearchByTitle (event.target.value)} />
            {/* después de consumir la API, necesito que dependiendo de la cantidad de items, me muestre esa misma cantidad de cards */
            /* entonces llamamos a items, y con '?', decimos si este item está, como es un array podemos usar '.map', por cada uno de los elementos de ese array vamos a mostrar una Card, e inmediatamente se renderiza una de las Cards multiplicada por la cantidad de elementis que tenga el array */}
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
        
    )
}

export default Home;