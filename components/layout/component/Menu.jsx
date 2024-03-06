"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import Image from "next/image";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1]  == pathname.split('/')[1] ) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1]  == pathname.split('/')[1] ) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login" className="text-dark-1">
            Log in
          </Link>
          <Link href="/signup" className="text-dark-1 ml-30">
            Sign Up
          </Link>
        </div>

        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            
            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={menuItem == "Events" ? "activeMenu" : ""}
              >
                투자상품 <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Events
                  </Link>
                </li>

                {menuList[2].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    <Link data-barba href={elm.href}>
                      {elm.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={menuItem == "Blogs" ? "activeMenu" : ""}
              >
                투자정보 <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> 투자정보
                  </Link>
                </li>

                {menuList[3].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    <Link data-barba href={elm.href}>
                      {elm.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={menuItem == "Pages" ? "activeMenu" : ""}
              >
                은퇴와 연금 <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>

              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> 은퇴와 연금
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link
                    href="#"
                    className={
                      submenu == "About Us" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    연금투자 방법<div className="icon-chevron-right text-11"></div>
                  </Link>

                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <Link href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i>
                        연금투자 방법
                      </Link>
                    </li>

                    {menuList[4].links[0].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <Link key={i} data-barba href={elm.href}>
                          {elm.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link
                    href="#"
                    className={
                      submenu == "Contact" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    퇴직연금<div className="icon-chevron-right text-11"></div>
                  </Link>
                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <Link href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i>
                        퇴직연금
                      </Link>
                    </li>

                    {menuList[4].links[1].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <Link key={i} data-barba href={elm.href}>
                          {elm.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link
                    href="#"
                    className={
                      submenu == "Shop" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    개인연금<div className="icon-chevron-right text-11"></div>
                  </Link>
                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <Link href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i> 개인연금
                      </Link>
                    </li>

                    {menuList[4].links[2].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <Link key={i} data-barba href={elm.href}>
                          {elm.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link
                    href="#"
                    className={
                      submenu == "Shop" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    미래에셋투자와연금센터<div className="icon-chevron-right text-11"></div>
                  </Link>
                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <Link href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i> 미래에셋투자와연금센터
                      </Link>
                    </li>

                    {menuList[4].links[3].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <Link key={i} data-barba href={elm.href}>
                          {elm.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {menuList[4].links
                  .filter((el) => el.href)
                  .map((elm, i) => (
                    <li
                      key={i}
                      className={
                        pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                      }
                    >
                      <Link key={i} data-barba href={elm.href}>
                        {elm.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={menuItem == "Pages" ? "activeMenu" : ""}
              >
                회사소개 <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>

              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> 회사소개
                  </Link>
                </li>

                {menuList[5].links
                  .filter((el) => el.href)
                  .map((elm, i) => (
                    <li
                      key={i}
                      className={
                        pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                      }
                    >
                      <Link key={i} data-barba href={elm.href}>
                        {elm.label}
                      </Link>
                    </li>
                  ))}

                <li className="menu-item-has-children">
                  <Link
                    href="#"
                    className={
                      submenu == "About Us" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    채용정보<div className="icon-chevron-right text-11"></div>
                  </Link>

                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <Link href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i>
                        채용정보
                      </Link>
                    </li>

                    {menuList[5].links[8].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <Link key={i} data-barba href={elm.href}>
                          {elm.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> 회사소개
                  </Link>
                </li>

                {menuList[6].links
                  .filter((el) => el.href)
                  .map((elm, i) => (
                    <li
                      key={i}
                      className={
                        pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                      }
                    >
                      <Link key={i} data-barba href={elm.href}>
                        {elm.label}
                      </Link>
                    </li>
                  ))}
                  
              </ul>
            </li>


            <li
              
            >
              <Link data-barba href="/contact-1"  className={
                pathname == "/contact-2" ? "activeMenu" : "inActiveMenuTwo"
              }>
                TIGER ETF
              </Link>
            </li>

            <li
              
            >
              <Link data-barba href="/contact-1"  className={
                pathname == "/contact-2" ? "activeMenu" : "inActiveMenuTwo"
              }>
                미래에셋 TDF
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}
