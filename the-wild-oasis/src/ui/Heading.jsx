import styled, { css } from "styled-components";
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;

      font-weight: 300;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 6rem;

      font-weight: 300;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 7rem;

      font-weight: 300;
    `}
`;
export default Heading;
