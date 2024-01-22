import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { Link } from 'react-scroll';
import './static/Home.css'; 

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">HAEJWO</div>
      <div className="menu">
        <Link to="sectionTwo" spy={true} smooth={true} duration={500}>Instruction</Link>
        <Link to="sectionThree" spy={true} smooth={true} duration={500}>Reviews</Link>
        <Link to="sectionFour" spy={true} smooth={true} duration={500}>FAQ</Link>
        <Link to="my-page" spy={true} smooth={true} duration={500}>My Page</Link>
      </div>
    </nav>
  </header>
);

const Body = ({ children }) => <div className="body">{children}</div>;

const Column1 = () => (
  <div className="introduction">
    <h1>Start Designing <br /> Developer portfolio website</h1>
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

const Column2 = () => (
  <div className="column2-container">
    <div className="how-to-use-section">
      <p className="section-title">How to Use</p>
      <h2 className="section-heading">Make your own portfolio</h2>
      <p className="section-description">간단한 절차 몇 개와 클릭 몇 번으로 본인만의 웹사이트를 만들 수 있습니다.<br />
        처음 방문한 여러분들을 위해 시연 동영상을 만들어보았으니 참고해주세요. <br />
        이제 본인만의 포트폴리오 제작을 시도해보세요.</p>
      <button className="text-button">Learn More</button>
    </div>
    <div className="template-section">
      <p className="template-title">Template</p>
      <h2 className="template-heading">Pick template you want </h2>
      <p className="template-description">당신을 위해 여러가지 템플릿을 준비해봤어요. <br />
        여러 템플릿 중 마음에 드는 것을 골라 본인 만의 포트폴리오를 만들어보세요.<br /></p>
      <button  className="template-button">Learn More</button>
    </div>
  </div>
);


const Column3 = () => (
  <div className="reviews">
    <h1>Reviews</h1>
    <div className="text">
      “해줘"를 이용한 고객들의 생생한 후기
    </div>
  </div>
);

const Column4 = () => (
  <div className="container">
    <div className="faq-section">
      <p className='faq-title'>Frequently Asked Questions</p>
      <div className="faq">
        <h2>자주 묻는 질문</h2>
      </div>
    </div>
    <div className="banner-section">
      <h2 className="banner-section-title">Create your portfolio</h2>
      <button>Get Started</button>
    </div>
    <footer>
      © Copyright 2024. Hajewo. All rights reserved.
    </footer>
  </div>
);


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
            <Column1/>
          </Section>
          <Section>
            <Column2/>
          </Section>
          <Section>
            <Column3/>
          </Section>
          <Section>
            <Column4/>
          </Section>
        </Body>
      </SectionsContainer>
    </>
  );
};

export default Home;
