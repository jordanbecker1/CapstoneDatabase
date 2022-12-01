import { useQuery } from "urql"
import { GET_MEMBER_QUERY } from "../../lib/query"
import { useRouter } from "next/router" 
import { DetailsStyle, MemberInfo } from "../../styles/MemberDetails";

export default function MemberDetails() {
    // fetch slug
    const { query } = useRouter();
    const [results] = useQuery({
        query: GET_MEMBER_QUERY,
        variables: {slug: query.slug}
    });
    const {data, fetching, error} = results;
    if(fetching) return <p>Loading...</p>
    if(error) return <p>Oh no...</p>

    const{ name, description, age, profilepicture} = data.members.data[0].attributes;
    console.log(data);
    return(
        <DetailsStyle>
            <img src="https://res.cloudinary.com/dw4yarzye/image/upload/v1667521626/small_julian_wan_W_No_Ln_Jo7t_S8_unsplash_6a9659438f.jpg" alt="" />
            <MemberInfo>
                <div>
                    <h3>Hi, My name is {name}</h3>
                    <p>{description}</p>
                    <h4>{age} Years Old</h4>
                </div>
                <div>
                    <button>Connect</button>
                </div>
            </MemberInfo>
        </DetailsStyle>

    )
}