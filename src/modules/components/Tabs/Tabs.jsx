import React, { useState } from 'react';
import styled from 'styled-components';
import TabPanel from './TabPanel';

const StyledTabWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

const StyledTabHeader = styled.div`
  display: flex;
`;

const StyledTabHeaderItem = styled.div`
  button {
    cursor: pointer;
    width: 100%;
    text-align: center;
    display: inline-block;
    padding: 10px 30px;
    border: 0;
    font-weight: 600;
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    transition: all 0.1s linear;

    :hover {
      color: #1c6dd0;
      border-bottom-color: #1c6dd0;
    }

    ${({ active }) =>
      active
        ? `
          color: #1c6dd0;
          border-bottom-color: #1c6dd0;
          `
        : null}
  }
`;

const StyledTabBody = styled.div`
  padding: 20px;
`;

function Tabs({ onTabClick, children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    onTabClick && onTabClick(index);
  };

  return (
    <StyledTabWrapper>
      <StyledTabHeader>
        {React.Children.map(children, ({ props }, index) => (
          <StyledTabHeaderItem
            key={props.tab + index}
            role="tab"
            tabIndex={-1}
            active={currentIndex === index}
          >
            <button type="button" onClick={() => handleTabClick(index)}>
              {props.tab}
            </button>
          </StyledTabHeaderItem>
        ))}
      </StyledTabHeader>
      <StyledTabBody tabIndex={0}>
        <TabPanel role="tabpanel" tabIndex={-1}>
          {React.isValidElement(currentChild) && currentChild.props.children}
        </TabPanel>
      </StyledTabBody>
    </StyledTabWrapper>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;

/**
 * Còn vài problem chưa giải quyết
 */
