import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import PlaceholderImage from "../../common/PlaceholderImage";
import {
  HeaderSection,
  HeaderContainer,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LogoText,
  PhoneNumber,
  ButtonGroup,
  Button,
  NavMenu,
  RightSection
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Span>Home</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("who-we-are")}>
          <Span>Who We Are</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("testimonials")}>
          <Span>Testimonials</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("how-it-works")}>
          <Span>How It Works</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("pricing")}>
          <Span>Pricing</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer to="/" aria-label="homepage">
          <PlaceholderImage width="40px" height="40px" alt="CalTutors Logo" />
          <LogoText><span className="cal">Cal</span>Tutors</LogoText>
        </LogoContainer>
        <NotHidden>
          <NavMenu>
            <MenuItem />
          </NavMenu>
          <RightSection>
            <PhoneNumber href="tel:+19092302186">
              +1(909) 230 2186
            </PhoneNumber>
            <Button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfI4a1EKD2DU-VsxAHU7ME0SbU69dRTLg7AiRF7V1IBpE4htg/viewform', '_blank')}>
              Contact
            </Button>
            <Button primary onClick={() => window.open('https://calendly.com/caltutorsteam/30min', '_blank')}>
              Schedule
            </Button>
          </RightSection>
        </NotHidden>
        <Burger onClick={toggleButton}>
          <Outline />
        </Burger>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
          <PhoneNumber href="tel:+19092302186">
            +1(909) 230 2186
          </PhoneNumber>
          <ButtonGroup style={{ marginTop: "2rem", flexDirection: "column", gap: "1rem" }}>
            <Button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfI4a1EKD2DU-VsxAHU7ME0SbU69dRTLg7AiRF7V1IBpE4htg/viewform', '_blank')}>
              Contact
            </Button>
            <Button primary onClick={() => window.open('https://calendly.com/caltutorsteam/30min', '_blank')}>
              Schedule
            </Button>
          </ButtonGroup>
        </Drawer>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
