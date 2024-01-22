import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { Link } from 'react-scroll';
import './static/Home.css'; 

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">HAEJWO</div>
      <div className="menu">
        <Link to="Column2" spy={true} smooth={true} duration={500}>How to use</Link>
        <Link to="template" spy={true} smooth={true} duration={500}>Template</Link>
        <Link to="testimonials" spy={true} smooth={true} duration={500}>Testimonials</Link>
        <Link to="my-page" spy={true} smooth={true} duration={500}>My Page</Link>
      </div>
    </nav>
  </header>
);

const Body = ({ children }) => <div className="body">{children}</div>;

const Column1 = () => (
  <div className="introduction">
    <h1>Start Designing your Developer portfolio website</h1>
    <div className="description">
      개발자 포트폴리오 사이트를 만들고 싶은데 귀찮으신가요? 혹은 너무 막막하게 느껴지시나요?<br />
      그런 여러분들을 위해 준비했습니다. 간단한 작업을 통해 본인만의 특색있는 포트폴리오 사이트를 만들어보세요!
    </div>
    <div className="buttons">
      <button>Try Now</button>
      <button>View More</button>
    </div>
  </div>
);

const Column2 = ({ children }) => <div className="detail">{children}</div>;
const Column3 = ({ children }) => <div className="review">{children}</div>;
const Column4 = ({ children }) => <div className="question">{children}</div>;

const Home = () => {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
  };

  return (
    <>
      <Header />
      <SectionsContainer {...options}>
        <Body>
          <Section>
            <Column1 />
          </Section>
          <Section>
            <Column2>소개 페이지</Column2>
          </Section>
          <Section>
            <Column3>테마 및 기능 설명</Column3>
          </Section>
          <Section>
            <Column4>자주 묻는 질문</Column4>
          </Section>
        </Body>
      </SectionsContainer>
    </>
  );
};

export default Home;
