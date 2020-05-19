import styled from "styled-components";
import tw from "tailwind.macro";

const ShopTW = styled.div.attrs({
    className: ""
  })` & {
.row{
    ${tw`flex mb-4`}
}
.photo{
    ${tw`w-1/4`}

}
.price{
    ${tw`w-1/4`}
}
button{
    ${tw`flex mb-2`}
}
.column{
    ${tw`w-1/2`}
}
.shopwidget{
    ${tw`flex`}
}
.description{
    ${tw`flex`}
}





  }`;

export default ShopTW;