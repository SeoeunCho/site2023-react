import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerNavList } from "../../constants/index";
import { useSelector } from "react-redux";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [allMenuActive, setAllMenuActive] = useState(false);
  const [depthMenu, setDepthMenu] = useState("");
  const [depthActive, setDepthActive] = useState(false);

  const headerClass = useSelector((state) => state.headerClass);
  const scrollTop = useSelector((state) => state.scrollTop);
  console.log(headerClass, scrollTop);

  const showSiteMap = () => {
    if (!allMenuActive) {
      setAllMenuActive(true);
    } else {
      setAllMenuActive(false);
      // this.$store.commit("scrollTop");
    }
  };
  const showGnbDepth = (menu) => {
    setDepthMenu(menu);
    // setDepthActive((prevValue) => !prevValue);
  };

  return (
    <>
      {/* S: header */}
      <header id="header" role="banner" className={`${scrollActive ? "active" : ""}`}>
        <div className="header-inner container clear">
          <h1 className="header-logo left">
            <Link to="/">
              Seoeun<em>React-Site</em>
            </Link>
          </h1>
          <nav className="header-gnb left" role="navigation" aria-label="메인 메뉴">
            <ul className="clear">
              {headerNavList.map((nav, i) => (
                <li className="depth01 left" key={i}>
                  <a href="#!">{nav.title}</a>
                  <ul className="depth02-list">
                    {nav.subMenu.map((item, i) => (
                      <li className="depth02" key={i}>
                        <Link to={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right clear" onClick={() => showSiteMap}>
            <button type="button" className="btn-allmenu">
              <span className="txt-hidden">전체보기</span>
            </button>
          </div>
        </div>
      </header>
      {/* E: header */}
      {/* S: site-map */}
      <div id="site-map" className="allmenu">
        <div className="header-inner container">
          <div className="menu-top">
            <h1 className="header-logo left" onClick={() => showSiteMap}>
              <Link to="/">
                Seoeun<em>Vue-Site</em>
              </Link>
            </h1>
            <button className="btn-close txt-hidden" onClick={() => showSiteMap}>
              닫기
            </button>
          </div>
          <ul className="allmenu-list">
            {headerNavList.map((nav, i) => (
              <li onClick={() => showGnbDepth(nav.key)} key={i}>
                <a href="{()=>false}">{nav.title}</a>
                <ul className="gnb-depth">
                  {nav.subMenu.map((item, i) => (
                    <li className="depth02" key={i} onClick={() => showSiteMap}>
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
