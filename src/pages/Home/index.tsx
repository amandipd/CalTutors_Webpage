import { lazy, useRef } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import {
  StemSection,
  StemTitle,
  StemSubtitle,
  SubjectsContainer,
  Subject,
  StemContent,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard,
  StarRating,
  TestimonialName,
  TestimonialIdentifier,
  TestimonialText,
  SectionTitle,
  ScrollButtons,
  ScrollButton,
} from "../../components/ContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
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

const testimonials = [
  {
    stars: 5,
    name: "John D.",
    identifier: "Parent",
    text: "My daughter's grades improved significantly after working with CalTutors. The personalized attention made all the difference.",
  },
  {
    stars: 5,
    name: "Sarah M.",
    identifier: "Student",
    text: "The tutors really know their subjects well. They helped me understand complex calculus concepts that I struggled with in class.",
  },
  {
    stars: 5,
    name: "Michael R.",
    identifier: "Parent",
    text: "Excellent SAT prep tutoring. My son's score improved by 150 points after just a few sessions.",
  },
  {
    stars: 5,
    name: "Emily L.",
    identifier: "Student",
    text: "I was struggling with AP Physics, but after a few sessions, I started to really understand the concepts. My tutor made everything so clear!",
  },
  {
    stars: 5,
    name: "David W.",
    identifier: "Parent",
    text: "The flexibility of online tutoring and the quality of instruction is outstanding. My son's confidence in math has grown tremendously.",
  },
  {
    stars: 5,
    name: "Jessica K.",
    identifier: "Student",
    text: "The chemistry tutoring helped me ace my final exam. The tutor was patient and explained everything step by step.",
  }
];

const Home = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = 330; // card width + gap
      const currentScroll = testimonialsRef.current.scrollLeft;
      testimonialsRef.current.scrollTo({
        left: currentScroll + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
      });
    }
  };

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
      <TestimonialsSection>
        <SectionTitle>What Our Students & Parents Say</SectionTitle>
        <TestimonialsGrid ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <StarRating>
                {"★".repeat(testimonial.stars)}{"☆".repeat(5 - testimonial.stars)}
              </StarRating>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialIdentifier>{testimonial.identifier}</TestimonialIdentifier>
              <TestimonialText>{testimonial.text}</TestimonialText>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        <ScrollButtons>
          <ScrollButton onClick={() => scrollTestimonials('left')}>←</ScrollButton>
          <ScrollButton onClick={() => scrollTestimonials('right')}>→</ScrollButton>
        </ScrollButtons>
      </TestimonialsSection>
      <StemSection>
        <StemContent>
          <StemTitle>
            Guided by the Standards of the World's Leading STEM Institutions.
          </StemTitle>
          <StemSubtitle>
            Personalized STEM Lessons at any level for $60/hour in:
          </StemSubtitle>
          <SubjectsContainer>
            {subjects.map((subject, index) => (
              <Subject key={index}>
                {subject}
              </Subject>
            ))}
          </SubjectsContainer>
        </StemContent>
      </StemSection>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
