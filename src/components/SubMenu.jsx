import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #ffffff;
  align-items: center;
  height: 50px;
  border-radius: 0.375rem;
  font-size: 16px;

  &:hover {
    background-color: rgb(82 82 91);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 19px;
  display: flex;  
  align-items: center;
  border-radius: 0.375rem;
`;

const DropdownLink = styled(Link)`
  height: 30px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;
  border-radius: 0.375rem;

  &:hover {
    background-color: rgb(82 82 91);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          
          <SidebarLabel> {item.icon}<span className="pl-5 mr-4">{item.title}</span></SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>  
              <SidebarLabel>{item.icon} {item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
