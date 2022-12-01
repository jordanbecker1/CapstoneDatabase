export const PRODUCT_QUERY= `
query{
    products{
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;  

export const GET_MEMBER_QUERY = `
  query getMember($slug: String!){
    members(filters: {slug: {eq: $slug}}){
      data{
        attributes{
          name,
          age,
          slug,
          description,
          profilepicture{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
  