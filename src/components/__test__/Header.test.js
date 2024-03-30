import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';
import { fireEvent, render, screen } from '@testing-library/react';
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom'

it("should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //when w find all the button using single line of code
    const loginButton = screen.getByRole("button")

    //when we only talk about login button
    // const loginButton = screen.getByRole("button", {name : "Login"})

    //when we find button using text
    // const loginButton = screen.getByText("login")

    expect(loginButton).toBeInTheDocument();
})

it("should render Header Component with a Cart 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );


    const cartItems = screen.getByText("Cart (0)")


    expect(cartItems).toBeInTheDocument();
})

it("should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );


    const cartItems = screen.getByText(/Cart/)


    expect(cartItems).toBeInTheDocument();
})

it("should change login to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );


    const loginButton = screen.getByRole("button", {name:"Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})