import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { useNavigate } from 'react-router-dom';
import '../static/Home.css'


const Header = () => {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate('/mypage');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">HAEJWO</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#instruction">Instruction</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <a onClick={handleMyPageClick}>My Page</a> 
        </div>
      </nav>
    </header>
  );
};

const Column1 = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/create');
  };

  return (
    <div className="introduction">
      <h1>Start Designing <br /> Developer portfolio website</h1>
      <div className="description">
        개발자 포트폴리오 사이트를 만들고 싶은데 귀찮으신가요? 혹은 너무 막막하게 느껴지시나요?<br />
        그런 여러분들을 위해 준비했습니다. 간단한 작업을 통해 본인만의 특색있는 포트폴리오 사이트를 만들어보세요!
      </div>
      <div className="buttons">
        <button onClick={handleTryNowClick}>Try Now</button>
        <button>View More</button>
      </div>
    </div>
  );
};

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
      <h2 className="template-heading">Pick any template you want </h2>
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <button className="toggle-button">{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Column4 = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/create');
  };

  const faqs = [
    { question: "'해줘'를 개발한 사람은 누구인가요?", answer: "'해줘'를 개발한 사람은 몰입캠프 1분반의 김가연 그리고 박진석 입니다." },
    { question: '정말 배포된 사이트가 결과물로 도출되나요?', answer: '물론입니다:)' },
    { question: '어떻게 이용하나요?', answer: '상세한 이용방법은 Instruction 탭에 소개되어있습니다. 위 내용을 참고해주세요.' },
  ];

  return (
    <div className="container">
      <div className="faq-section">
      <div className="faq-title-section">
        <p className='faq-title'>Frequently Asked Questions</p>
        <div className="faq">
          <h2>자주 묻는 질문</h2>
          </div>
          </div>
          <div className="faq-card-section">
            {faqs.map((faq) => (
              <FAQItem question={faq.question} answer={faq.answer} />
            ))}
          </div>
      </div>
      <div className="banner-section">
        <h2 className="banner-section-title">Create your portfolio</h2>
        <button onClick={handleTryNowClick}>Get Started</button>
      </div>
      <footer>
        © Copyright 2024. Haejwo. All rights reserved.
      </footer>
    </div>
  );
};


const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  let options = {
    anchors: ['home', 'instruction', 'reviews', 'faq'], 
    scrollBar: false,
    navigation: true,
  };

  useEffect(() => {
    const sections = ['home', 'instruction', 'reviews', 'faq'];
    sections.forEach((section, index) => {
      setTimeout(() => setActiveSection(prev => [...prev, section]), index * 600);
    });
  }, []);

  const isActive = (section) => activeSection.includes(section);

  return (
    <>
      <Header />
      <SectionsContainer {...options}>
        <Section className={`section ${isActive('home') ? 'active' : ''}`} anchor="home">
          <Column1/>
        </Section>
        <Section className={`section ${isActive('instruction') ? 'active' : ''}`} anchor="instruction"> 
          <Column2/>
        </Section>
        <Section className={`section ${isActive('reviews') ? 'active' : ''}`} anchor="reviews"> 
          <Column3/>
        </Section>
        <Section className={`section ${isActive('faq') ? 'active' : ''}`} anchor="faq"> 
          <Column4/>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default Home;
