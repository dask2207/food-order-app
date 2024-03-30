import React from "react";
import {render, screen} from "@testing-library/react";
import Contact from '../Contact';
import "@testing-library/jest-dom"


describe('Contact us page test cases', () => {
    test("should load contact us component", ()=> {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside contact us component", ()=> {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    test("should load input name inside contact us component", ()=> {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    })
    
    test("should load 2 input boxes on the contact us component", ()=> {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes.length);
    
        // Assertion
        expect(inputBoxes.length).toBe(3);
    })
});


