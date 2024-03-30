import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";
import MOCK_DATA from '../mocks/cardMock.json';
import '@testing-library/jest-dom'


// UNIT TESTING

it('should render restaurant card component with props Data', () => {
    render(<Card resData= {MOCK_DATA} />)

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
});


// Home Work 

// it('should render card component with Promoted label', ()=>{

//     render(<Card resData= {MOCK_DATA} />)

//     const label = screen.getByText("label",{label:"open"});

//     expect(label).toBeInTheDocument();
// })
