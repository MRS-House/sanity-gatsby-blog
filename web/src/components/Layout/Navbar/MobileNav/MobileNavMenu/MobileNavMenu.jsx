import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import "./mobile-nav-menu.scss";
import { useScrollLock } from "../../../../../hooks";
import LogoEmblem from "../../../../../assets/logo-emblem.svg";
import PhoneIcon from "../../../../../assets/icons/phone-outline.svg";
import Chevron from "../../../../../assets/icons/chevron.svg";

const MobileNavMenu = ({ location, isOpen, toggle }) => {
  const [, setRendered] = useState(false);
  const menuRef = useRef(null);
  const [lockScroll, unlockScroll] = useScrollLock();
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleOnEnter = () => {
    lockScroll();
  };

  const handleOnEntered = () => {
    setRendered(true);
  };

  const handleOnExit = useCallback(() => {
    setRendered(false);
    //unlocks scroll when clicking X and closing the navigation menu.
    unlockScroll();
  }, [setRendered, unlockScroll]);

  const handleClick = (param) => {
    if (location.pathname === param) {
      toggle(false);
    }
  };

  useEffect(() => {
    //unlocks scroll when clicking a link on the mobile navigation menu.
    return handleOnExit;
  }, [handleOnExit]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={1000}
      classNames="mobile-nav-menu"
      unmountOnExit
      onEnter={() => handleOnEnter()}
      onEntered={() => handleOnEntered()}
      onExit={() => handleOnExit()}
    >
      <nav className="mobile-nav-menu" ref={menuRef}>
        <div className="container mobile-nav-menu__container">
          <ul className="mobile-nav-menu__ul">
            <li className="mobile-nav-menu__li">
              <Link
                to="/"
                className="mobile-nav-menu__link"
                activeClassName="mobile-nav-menu__link--active"
                onClick={() => handleClick("/")}
              >
                Главная
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <Link
                to="/projects"
                className="mobile-nav-menu__link"
                activeClassName="mobile-nav-menu__link--active"
                onClick={() => handleClick("/projects")}
              >
                Проекты
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <div
                tabIndex="0"
                role="button"
                aria-expanded={dropdownActive}
                className="mobile-nav-menu__link"
                onClick={() => setDropdownActive(!dropdownActive)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setDropdownActive(!dropdownActive)
                }
              >
                <span className="mobile-nav-menu__link__span">О компании</span>
                <Chevron
                  className={`mobile-nav-menu__dropdown__chevron ${
                    dropdownActive
                      ? "mobile-nav-menu__dropdown__chevron--active"
                      : null
                  }`}
                />
              </div>
              <div
                className="mobile-nav-menu__dropdown"
                ref={dropdownRef}
                style={
                  dropdownActive
                    ? {
                        maxHeight: `${
                          dropdownRef.current
                            ? dropdownRef.current.scrollHeight
                            : 0
                        }px`,
                      }
                    : null
                }
              >
                <ul className="mobile-nav-menu__ul">
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/company"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() => handleClick("/about/company")}
                    >
                      О НАС
                    </Link>
                  </li>
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/how-we-work"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() => handleClick("/about/how-we-work")}
                    >
                      КАК МЫ РАБОТАЕМ
                    </Link>
                  </li>
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/technologies-and-materials"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() =>
                        handleClick("/about/technologies-and-materials")
                      }
                    >
                      ТЕХНОЛОГИИ И МАТЕРИАЛЫ
                    </Link>
                  </li>
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/credit-maternity-capital"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() =>
                        handleClick("/about/credit-maternity-capital")
                      }
                    >
                      КРЕДИТ И МАТЕРИНСКИЙ КАПИТАЛ
                    </Link>
                  </li>
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/licenses"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() => handleClick("/about/licenses")}
                    >
                      ЛИЦЕНЗИИ
                    </Link>
                  </li>
                  <li className="mobile-nav-menu__li mobile-nav-menu__li--sub">
                    <Link
                      to="/about/faq"
                      className="mobile-nav-menu__link mobile-nav-menu__link--sub"
                      activeClassName="mobile-nav-menu__link--active"
                      onClick={() => handleClick("/about/faq")}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mobile-nav-menu__li">
              <Link
                to="/articles"
                className="mobile-nav-menu__link"
                activeClassName="mobile-nav-menu__link--active"
                onClick={() => handleClick("/articles")}
              >
                Статьи
              </Link>
            </li>
            <li className="mobile-nav-menu__li">
              <Link
                to="/contact"
                className="mobile-nav-menu__link"
                activeClassName="mobile-nav-menu__link--active"
                onClick={() => handleClick("/contact")}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="tel:+74955161631"
          className="mobile-nav-menu__contact__link"
          // activeClassName="mobile-nav-menu__contact__link--active"
        >
          <PhoneIcon className="mobile-nav-menu__contact__icon" />
          <div className="mobile-nav-menu__contact__text">Позвонить</div>
          {/* <button className="mobile-nav-menu__contact__btn">
              <PhoneIcon className="mobile-nav-menu__contact__icon" />
              <div className="mobile-nav-menu__contact__text">Позвонить</div>
            </button> */}
        </a>
        <LogoEmblem className="mobile-nav-menu__emblem" />
      </nav>
    </CSSTransition>
  );
};

export default MobileNavMenu;
