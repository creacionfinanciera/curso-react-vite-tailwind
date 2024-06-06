import './styles.css';

const ProductDetail = () => {
    return (
        // aqui vamos a crear una clase personalizada 'product-detail' para manipular directamente con css algo que tailwind no tiene configurado de forma generica
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>X</div>
            </div>    
        </aside>
    )
}

export default ProductDetail;