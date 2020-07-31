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

.grid{
    ${tw`flex flex-wrap`}
}

.w-full{
    ${tw`w-full`}
}

.small{
    ${tw`sm:w-1/2`}
}
.medium{
    ${tw`md:w-1/3`}
}

.large{
    ${tw`lg:w-1/3`}
}
.xl{
    ${tw`xl:w-1/4`}
}




  }`;
 

export default ShopTW;