import { ProductStyle } from "../styles/ProductStyle"

export default function Products({product}){

    return(
        <ProductStyle>
            <div>
                <div>
                    <img src={product.attributes.image.data.attributes.formats.small.url} alt="" />
                </div>
                <h2>{product.attributes.title}</h2>
                <h3>{product.attributes.price}</h3>
            </div>
        </ProductStyle>

    );
}