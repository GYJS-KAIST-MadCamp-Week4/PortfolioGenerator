# HAEJWO

## 개발자 포트폴리오 사이트 대신 만들어줘! 해줘!!

개발자 포트폴리오 웹사이트를 어떻게 만들어야할 지 막막하신 분, 또는 귀찮으신 분들을 위해 제작하였습니다.

### a. 개발 팀원

2023W 몰입캠프 Week 4 1분반

- 김가연 - 성균관대학교 컴퓨터교육과 20학번
- 박진석 - 성균관대학교 소프트웨어학과 20학번

---

### b. 개발 환경

- Language : React, Node.js
- DB : MongoDB
- target : web
- IDE : Visual Studio Code

---

### c. 웹 소개

### Home
<img width="1511" alt="Untitled" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/ea34e40a-9523-4594-8df8-effb20e1c9f3">
- 처음에 시작하면 위와 같은 화면이 애니메이션 효과와 함께 로딩됩니다.

### Login/Signup
<img width="1512" alt="login" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/f41c2b9f-7906-4a8f-98be-993f22fcacbf">


- signup 창에서는 닉네임, 아이디(이메일), 비밀번호를 입력받습니다. 회원가입이 끝나면 자동으로 Login 폼으로 이동합니다.
- login 창에서 db에 저장되어 있는 아이디와 비밀번호를 입력하면 메인화면으로 이동합니다.

### Home(Main page)
![main1](https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/e3ae6a43-0d9a-4078-a7c5-926cf6f70772)
<img width="1511" alt="main2" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/ec56b131-c4c7-4fc3-9178-d5159f3b2588">
<img width="1511" alt="main3" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/eb4a5b06-6a12-4080-abd8-e4385d2caa95">

- 메인 페이지는 총 3개의 메뉴로 구성되어 있습니다.
- 첫번째 페이지는 랜딩 페이지로, ‘해줘’를 이용하여 만든 포트폴리오 이미지들과 직접 만들 수 있는 창으로 이동할 수 있는 버튼이 존재합니다.
- 두번째 페이지는 설명 기능이 들어가있는 화면입니다. 템플릿들의 종류와 이용 방법에 대해서 확인하실 수 있습니다.
- 마지막 페이지는 자주 묻는 질문들(FAQ)을 모아둔 페이지입니다. 더하여 첫번째 페이지와 마찬가지로 사용자가 직접 본인만의 포트폴리오를 제작할 수 있는 화면으로 이동할 수 있는 버튼을 만들었습니다.
- 위의 상단 메뉴를 클릭하면 해당 정보가 존재하는 section으로 이동합니다.

### Create Portfolio
<img width="1511" alt="create1" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/c6701c70-de9a-40f7-9823-b7acb26c52e3">
<img width="1509" alt="create2" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/b0a458c5-afaa-4159-a6cd-7ce380c07a95">
<img width="1510" alt="create3" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/1a231bf5-13f1-4066-835e-3bb85822d076">

- 사용자들이 본인만의 포트폴리오 사이트를 만들기 위해 작성해야하는 질문들과 템플릿 선택 화면들로 구성되어있습니다.
- 상단에는 진행 상황을 확인할 수 있는 progress bar와 미리보기 아이콘을 만들어, 사용자가 이용하기에 편리하도록 구현하였습니다.
- 각 단계마다 템플릿을 선택하고 필요한 정보들을 기입하게 함으로써 본인만의 특색있는 포트폴리오 사이트를 만들 수 있습니다.

### My page
![m1](https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/ca2a0811-f795-457a-921d-d944c128d740)
![m2](https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/cc35a733-7d17-4478-880f-7c0ff2d3b762)
![m3](https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/9ec7a116-fac8-483a-a137-aacccafa8aff)
<img width="1511" alt="m4" src="https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator/assets/84284757/abdf052c-fece-4dab-bf58-221013f2ea03">


- My page에서는 본인이 선택한 템플릿과 기입한 정보들에 따라 완성된 포트폴리오를 확인할 수 있습니다.  
  → 메인 페이지의 my page 메뉴 클릭
