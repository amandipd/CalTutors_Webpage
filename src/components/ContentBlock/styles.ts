import styled from "styled-components";
import { Row } from "antd";

interface StyledRowProps {
  direction: "left" | "right";
}

export const ContentSection = styled("section")`
  position: relative;
  padding: 4rem 0;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Subtitle = styled("h6")`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

export const Content = styled("p")`
  margin: 1rem 0;
  font-size: 15px;
  line-height: 1.6;
`;

export const StyledRow = styled(Row)<StyledRowProps>`
  flex-direction: ${props => (props.direction === "left" ? "row" : "row-reverse")};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled("p")`
  font-size: 13px;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StemSection = styled("section")`
  padding: 5rem 0;
  text-align: center;
  background: #fff;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

export const StemTitle = styled("h2")`
  font-size: 2.5rem;
  font-weight: 700;
  color: #18216d;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.2;
`;

export const StemSubtitle = styled("p")`
  font-size: 1.25rem;
  color: #18216d;
  margin-bottom: 3rem;
  text-align: center;
`;

export const SubjectsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 1rem;
`;

export const Subject = styled("div")`
  font-size: 1.1rem;
  color: #18216d;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  background: #F5F5F5;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #E6E6E6;
    transform: translateY(-2px);
  }
`;
