# React 사이트 프로젝트

이 프로젝트는 여러 가지 API사용에 익숙해지는 과정을 담은 React 사이트입니다.
Youtube, Unsplash, TMDB(The Movie Database) API를
Postman사이트를 이용하여 데이터를 분류하고 그 중에서 원하는 데이터만 가져와 사용했습니다.
유튜브 영상 / 이미지 / 영화 목록과 검색이 가능합니다.
웹표준을 준수하며, Sass와 Media Query를 사용해 어떤 기기에도 대응하는 반응형으로 작업했습니다.
Prettier, ESlint를 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.

![image](https://github.com/SeoeunCho/site2023-react/blob/main/src/assets/img/scrrenshot/site2023-react-screenshot.png)

## 완성작 보기

- 미리보기 : DEMO(https://site2023-react.netlify.app/)
- 작업 기간 : 3일
- Vue 버전 : [ 소스코드 ](https://github.com/SeoeunCho/site2023-vue) / [DEMO](https://site2023-vue.netlify.app/)

## 학습

- 컴포넌트 기반 : 자체적인 상태(state)와 프로퍼티(props)를 가진 각각의 컴포넌트를 조합하여 코드의 유지보수가 용이해지고 코드 재사용성이 높아집니다.
- Virtual DOM : React는 가상 DOM(Virtual DOM)을 사용하여 효율적인 UI 업데이트를 수행합니다. 가상 DOM은 실제 DOM과 동기화되어 있으며, 상태 변화에 따른 최소한의 변경만을 적용하여 성능을 향상시킵니다.
- JSX : 자바스크립트 확장 문법인 JSX를 사용하여 컴포넌트의 구조를 선언적으로 작성하고 UI와 관련된 로직을 더 직관적이고 가독성 있게 작성할 수 있습니다.
- 생명주기 메서드 : React 컴포넌트는 생성, 갱신, 제거 등의 생명주기 메서드를 가지고 있습니다. 이를 활용하여 컴포넌트가 마운트되거나 갱신될 때 특정 동작을 수행할 수 있습니다.
- 상태관리 : React Hooks의 `useState``useEffect``useRef` 를 사용하여 상태관리를 효율적으로 처리할 수 있습니다.
- 라우팅 기능 : React-Router-Dom을 사용하여 각 경로에 해당하는 컴포넌트를 렌더링하고 다른페이지로 이동하도록 SPA(Single Page Application)를 구축했습니다.
- Swiper.js : JavaScript 라이브러리인 스와이퍼 슬라이드를 사용하여 반응형에 대응하고 제공된 Parameter를 적극 활용하여 이미지를 더욱 효과적으로 보여줍니다.


## 사용 스택

- React(https://ko.legacy.reactjs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- YoutubeAPI(https://developers.google.com/youtube/v3/getting-started) 를 이용하여 유튜브 목록, 검색 기능을 구현합니다.
- Unsplash API(https://unsplash.com/developers) 를 이용하여 Unsplash의 이미지 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- TMDB API(https://www.themoviedb.org/?language=ko) 를 이용하여 영화 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- Postman(https://www.postman.com/) 을 이용하여 restfulAPI를 요청하여 데이터를 분류하고 원하는 데이터만 가져와서 사용합니다.
- Swiper.js(https://swiperjs.com/) 를 사용하여 이미지 슬라이더를 구현합니다.
- Netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- Github(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, SCSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. <br />
  [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행

- React를 설치합니다. `npx create-react-app {폴더명}`
- Router를 설치합니다. `npm install react-router-dom`
- Sass를 설치합니다. `npm install sass`
- Swiper를 설치합니다. `npm install swiper`
- 프로젝트 시작 `npm start`

## API 요청

1. **YOUTUBE :** ([ YouTube Data API v3 ](https://developers.google.com/youtube/v3/getting-started)에서 API Console로 이동 후, API Key 발급 필요)
2. **UNSPLASH :** ([ Unsplash Developers ](https://unsplash.com/developers/)에서 API Key 발급 필요)
3. **MOVIE :** ([ The Movie Database ](https://www.themoviedb.org/?language=ko)에서 API Key 발급 필요)

## Screenshots

<div style="display: flex;">
  <img src="https://github.com/SeoeunCho/site2023-react/blob/main/src/assets/img/scrrenshot/site2023-react-mobile01.png" alt="image" width="32%" height="auto">
  <img src="https://github.com/SeoeunCho/site2023-react/blob/main/src/assets/img/scrrenshot/site2023-react-mobile02.png" alt="image" width="32%" height="auto">
  <img src="https://github.com/SeoeunCho/site2023-react/blob/main/src/assets/img/scrrenshot/site2023-react-mobile03.png" alt="image" width="32%" height="auto">
</div>
