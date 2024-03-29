type CardProps = {
  imageUrl: string,
  name?: string,
  price?: number,

}

export  function SmallerProductCard({name, price, imageUrl}: CardProps) {
  return (
    <article className='w-16 md:w-24  lg:w-36 mt-4 transition-transform hover:-translate-y-2 dark:bg-tertiary'>
        <img className='w-fit transition-shadow duration-300 hover:shadow-secondary shadow-2xl' alt={name} src={imageUrl} loading="lazy"/>
        <div className="text-white bottom-0 sm:flex sm:items-center sm:justify-between">
            {name && <p data-testid="product-name" className='dark:text-white text-black font-extrabold text-xl'>{name}</p>}
            {price && <p data-testid="product-price" className='gradient font-extrabold'>${price}</p> }
        </div>
    </article>
  )
}
