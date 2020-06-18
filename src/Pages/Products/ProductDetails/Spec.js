import React, { Component } from "react";
import { HTML } from "./Specthtml";
import styled, { css } from "styled-components";

const Spec = () => {

    const createMarkup = () => {
        return {__html: HTML}
    }

    return (
        <Wrap>
            <div dangerouslySetInnerHTML = { createMarkup() } />
        </Wrap>
    )
}

export default Spec ;

const Wrap = styled.div `

`