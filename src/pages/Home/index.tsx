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
    name: "Stephanie Wu",
    identifier: "Student",
    text: "I’ve been tutored by two of their tutors and they are both super nice and helpful!! I’ve been struggling with precalc and chem, and they both greatly helped me understand these subjects better. Thank you CalTutors 🙏",
  },
  {
    stars: 5,
    name: "Julie Novack",
    identifier: "Parent",
    text: "Very grateful to have found Joshua for my high schooler. Joshua was super responsive when we first inquired about tutoring services and quickly matched up my child with someone who could help him with AP Calc. The sessions have been working out well for him, and he feels his tutor helps him understand the material more easily than his teacher at school.",
  },
  {
    stars: 5,
    name: "John Bergestrom",
    identifier: "Parent",
    text: "Jonayet is very patient, thoughtful, and thorough. He is also well prepared and has materials ready for Drew so he makes progress. Drew loves taking his lessons. We are so grateful to have found Caltutors!",
  },
  {
    stars: 5,
    name: "Lucy Longwell.",
    identifier: "Student",
    text: "Joshua is an amazing calculus tutor! I was really struggling with one of my classes and he was really kind and we were able to schedule a session the next day. He is super accommodating with last minute sessions and always makes sure I’m 100% prepared for my midterms. I would definitely recommend caltutors if you’re struggling with calc!",
  },
  {
    stars: 5,
    name: "Syona Dalal",
    identifier: "Student",
    text: " think that CalTutors helped me a lot in terms of reviewing some of the topics that I struggled with in both physics and math so I feel more prepared to take the AP exams for Calculus BC and Physics 1. I would definitely recommend him as a tutor and give him a 5 rating!",
  },
  {
    stars: 5,
    name: "Rachel",
    identifier: "Student",
    text: "Great math tutor with a positive and bright attitude. I had my first session with Skye and she made me feel very comfortable right away. She did her best to make sure I understood the concepts before moving on and explained everything in a way that was easy to understand. She has a very positive attitude, which makes her great to have as a tutor. I'm not the best at math or remembering things, so I needed a review and help with some new concepts I've been learning in class. I will definitely be booking more sessions with her in the future.",
  },
  {
    stars: 5,
    name: "Nova Huang",
    identifier: "Parent",
    text: "I highly recommend Joshua as a tutor. Despite our initial preference for in-person tutoring, his online method proved effective for my daughter's math needs. Joshua's approach helped my shy daughter feel comfortable, and she even found him to be a better teacher than her school instructor. He quickly covered all the necessary material in a short time frame, showing exceptional responsiveness, reliability, and strategic planning. His prompt replies to questions and punctuality were crucial, given the last-minute task asked of him.",
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
