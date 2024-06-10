import { XMarkIcon } from '@heroicons/react/24/solid';


const OrderCard = props => {
    // aqui creamos una constante, en la cual va estar todo lo que venga de 'props' y que necesitemos, solo algunas cosas
    const { id, title, imageUrl, price, handleDelete } = props;

    // adicionalmente, tenemos que recibir la información de 'ProductData', y podemos recibirla como si fueran 'props' porque la idea es que amarremos es en algo global y que ya nosotros podamos a partir de eso global, tomar la imagen, el precio, el título y demás
    let renderXMarkIcon;
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(id)}></XMarkIcon>
    }

    return(
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXMarkIcon}
            </div>
            
            
        </div>
    )
}

export default OrderCard;