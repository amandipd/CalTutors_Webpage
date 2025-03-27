import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import {
  StemSection,
  StemTitle,
  StemSubtitle,
  SubjectsContainer,
  Subject,
} from "../../components/ContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const subjects = [
  "SAT/ACT",
  "Calculus",
  "Algebra",
  "Geometry",
  "Statistics",
  "Chemistry",
  "Physics",
  "Biology",
  "Computer Science",
  "AP STEM Test Prep"
];

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        subtitle={IntroContent.subtitle}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="who_we_are.png"
        id="who-we-are"
      />

      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />

      <StemSection>
        <Container>
          <StemTitle>
            Guided by the Standards of the World's Leading STEM Institutions.
          </StemTitle>
          <StemSubtitle>
            Personalized STEM Lessons at any level for $60/hour in:
          </StemSubtitle>
          <SubjectsContainer>
            {subjects.map((subject, index) => (
              <Subject key={index} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfI4a1EKD2DU-VsxAHU7ME0SbU69dRTLg7AiRF7V1IBpE4htg/viewform', '_blank')}>
                {subject}
              </Subject>
            ))}
          </SubjectsContainer>
        </Container>
      </StemSection>
    </Container>
  );
};

export default Home;
