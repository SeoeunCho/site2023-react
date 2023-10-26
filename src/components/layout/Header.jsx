import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerNavList } from "../../constants/index";
import { scrollTop } from "../../utils/scrollEvents";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [allMenuActive, setAllMenuActive] = useState(false);
  const [depthMenu, setDepthMenu] = useState("");
  const [depthActive, setDepthActive] = useState(false);

  const location = useLocation();
  const headerClass = location.pathname !== "/" ? true : false;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    });
    scrollTop();
  }, [location]);

  useEffect(() => {
    const htmlDom = document.getElementsByTagName( 'html' )[0]
    htmlDom.classList.toggle("scrollLock", allMenuActive);
  }, [allMenuActive]);

  useEffect(() => {
    if (depthMenu !== "") {
      setDepthActive(true);
    }
  }, [depthMenu]);

  const showSiteMap = () => {
    setAllMenuActive((prevValue) => !prevValue);
    if (!allMenuActive) setDepthActive(false)
  };

  const handleGnbClick = (nav) => {
    setDepthMenu(nav.menu);
    setDepthActive((prevValue) => !prevValue);
  };

  return (
    <>
      {/* S: header */}
      <header id="header" role="banner" className={`${scrollActive ? "active" : ""} + ${headerClass ? "router-active" : ""}`}>
        <div className="header-inner container clear">
          <h1 className="header-logo left">
            <Link to="/" onClick={scrollTop}>
              Seoeun<em>React-Site</em>
            </Link>
          </h1>
          <nav className="header-gnb left" role="navigation" aria-label="메인 메뉴">
            <ul className="clear">
              {headerNavList.map((nav, i) => (
                <li className="depth01 left" key={i}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {nav.title}
                  </a>
                  <ul className="depth02-list">
                    {nav.subMenu.map((item, i) => (
                      <li className="depth02" key={i}>
                        <Link to={item.url} onClick={scrollTop}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right clear" onClick={showSiteMap}>
            <button type="button" className="btn-allmenu">
              <span className="txt-hidden">전체보기</span>
            </button>
          </div>
        </div>
      </header>
      {/* E: header */}
      {/* S: site-map */}
      <div id="site-map" className={`allmenu + ${allMenuActive ? "active" : ""}`}>
        <div className="header-inner container">
          <div className="menu-top">
            <h1 className="header-logo left" onClick={showSiteMap}>
              <Link to="/">
                Seoeun<em>Vue-Site</em>
              </Link>
            </h1>
            <button className="btn-close txt-hidden" onClick={showSiteMap}>
              닫기
            </button>
          </div>
          <ul className="allmenu-list">
            {headerNavList.map((nav, i) => (
              <li className={`${depthActive && depthMenu === nav.menu ? "open" : ""}`} onClick={() => handleGnbClick(nav)} key={i}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {nav.title}
                </a>
                <ul className="gnb-depth">
                  {nav.subMenu.map((item, i) => (
                    <li className="depth02" key={i} onClick={showSiteMap}>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* E: site-map */}
    </>
  );
};

export default Header;
