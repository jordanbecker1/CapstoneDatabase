import { ProductStyle } from "../styles/ProductStyle"
import Link from 'next/link'

export default function Members({member}){
    const {name, age, profilepicture, slug, description} = member.attributes;
    
    return(
        <ProductStyle>
            <div>
                <Link href={`/member/${slug}`}>
                    <div>
                        <img src="https://res.cloudinary.com/dw4yarzye/image/upload/v1667521626/small_julian_wan_W_No_Ln_Jo7t_S8_unsplash_6a9659438f.jpg" alt="" />
                    </div>
                </Link>
                
                <h2>{name}</h2>
                <h3>{description}</h3>
                <h4>Age: {age}</h4>
            </div>
        </ProductStyle>

    );
}