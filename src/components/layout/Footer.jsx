import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h5>SeoeunCho</h5>
          <p>
            contact me
            <a href="mailto:jowestsilver@gmail.com" className="strong">
              {" "}
              jowestsilver@gmail.com
            </a>
          </p>
          <div className="info">
            <ul>
              <li>
                <p>
                  <span>이름</span>조서은 (Seoeun Cho)
                </p>
              </li>
              <li>
                <p>
                  <span>생년월일</span>1995.12.14
                </p>
              </li>
              <li>
                <p>
                  <span>전화번호</span>010-8577-4978
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-menu">
          <div>
            <h4>유튜브</h4>
            <ul>
              <li>
                <Link to="/artist">장르별 아티스트 페이지</Link>
              </li>
              <li>
                <Link to="/mv">뮤직비디오 페이지</Link>
              </li>
              <li>
                <Link to="/playlist">플레이리스트 페이지</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>이미지</h4>
            <ul>
              <li>
                <Link to="/unsplash">Unsplash 페이지</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>영화 & TV</h4>
            <ul>
              <li>
                <Link to="/movie">영화 페이지</Link>
              </li>
              <li>
                <Link to="/tv">TV 프로그램 페이지</Link>
              </li>
            </ul>
          </div>
          <div className="sns">
            <ul>
              <li>
                <a href="https://github.com/SeoeunCho">
                  <span className="txt-hidden">깃허브</span>
                </a>
              </li>
              <li>
                <a href="https://enchanting-drip-66d.notion.site/661e000688d04abf94686ae02d8983ff?pvs=4/">
                  <span className="txt-hidden">노션 이력서</span>
                </a>
              </li>
              <li>
                <a href="https://open.kakao.com/o/sTuSneIf">
                  <span className="txt-hidden">카카오톡</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          Copyright @ 2023 <span>조서은</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
