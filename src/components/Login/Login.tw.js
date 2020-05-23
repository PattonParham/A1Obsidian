import styled from "styled-components";
import tw from "tailwind.macro";


const LoginTW = styled.div.attrs({
    className: ""
  })` & {

    .row{
        ${tw`flex mb-4`}
    }
    
}`;

export default LoginTW;