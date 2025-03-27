import styled from "styled-components";

interface PlaceholderImageProps {
  width: string;
  height: string;
  alt?: string;
}

const PlaceholderContainer = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ccc;
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 10px;
`;

const PlaceholderImage = ({ width, height, alt = "Placeholder" }: PlaceholderImageProps) => {
  return (
    <PlaceholderContainer width={width} height={height}>
      [PLACEHOLDER]
    </PlaceholderContainer>
  );
};

export default PlaceholderImage; 