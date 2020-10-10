import React from "react";
import { NavLink } from "react-router-dom";
import "./layout.scss";

export function Layout({ header, topNavs, bottomNavs, children }) {
  return (
    <>
      <div className="wrapper">
        <Sidebar header={header} topNavs={topNavs} bottomNavs={bottomNavs} />
        <ContentArea>{children}</ContentArea>
      </div>
    </>
  );
}

function ContentArea({ children }) {
  return <section>{children}</section>;
}

function Sidebar({ header, topNavs, bottomNavs }) {
  return (
    <nav role="navigation" className="uk-box-shadow-medium">
      <div>
        <div className="header">{header}</div>
        <SidebarItem navigationItems={topNavs} />
      </div>
      <div>
        <SidebarItem navigationItems={bottomNavs} />
        <p>&copy; BambouTV 2020</p>
      </div>
    </nav>
  );
}

function SidebarItem({ navigationItems }) {
  return (
    <ul class="uk-nav uk-nav-default navlinks">
      {navigationItems &&
        navigationItems.map((item) => (
          <li>
            <span>
              <NavLink
                className="uk-text-capitalize"
                to={item.path}
                activeClassName="active"
              >
                <span
                  class="uk-margin-small-right"
                  uk-icon={"icon: " + item.icon}
                ></span>
                {item.name}
              </NavLink>
            </span>
          </li>
        ))}
    </ul>
  );
}
