import React, { Component } from "react";
import styled from "styled-components";

class ScrollEvent extends Component {  //react
  constructor() {
    super();
    this.state = {
      scrolledNav: false // state 값 'false'로 주기
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {  //scroll event handler
      const isTop = window.scrollY < 30;  // 조건을 변수로 넣기
      if (isTop !== true) {  
        this.setState({ scrolledNav: true });
      } else {
        this.setState({ scrolledNav: false });
      }
    });
  }

  render() {
    return (
      <header>
        <div>
          <nav
            className={
              this.state.scrolledNav  
                ? "navigationMenu scrolledNav"  // true일 경우
                : "navigationMenu"              // false일 경우
            }
          />
        </div>
      </header>
    );
  }
}

export default ScrollEvent;

