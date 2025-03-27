import styled from "styled-components";

interface StyledContainerProps {
  border?: boolean;
}

export const StyledContainer = styled("div")<StyledContainerProps>`
  position: relative;
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
  overflow: hidden;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "none")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 2rem);
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 1rem);
  }
`;
