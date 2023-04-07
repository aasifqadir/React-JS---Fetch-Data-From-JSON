import '../styles/product.css'
const ProductCard = (Products) => {
    let product = Products.value
    return (
        <div className="main">
            {product.map((x) => {
                let discount = (x.discountPercentage) / 100
                let price = discount * x.price * 85
                let finalPrice = x.price * 85 - price
                return (
                    <div className="products">
                        <div className="image">
                            <img src={x.thumbnail} alt="" />
                        </div>
                        <div className=" product-details">
                            <h2>{x.title}</h2>
                            <div className="product-price">
                                <p>{Math.round(finalPrice)}</p>
                                <p className='original-price'>{x.price * 85}</p>
                                <p className='discountpercent'>({x.discountPercentage}%)</p>
                            </div>
                            <p className='description'><h3>Description:</h3>{x.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ProductCard;