const { render, screen, fireEvent } = require("@testing-library/react")
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurentMenu';
import Header from '../Header'
import MOCK_DATA_NAME from '../mocks/mockResListData.json'
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart'
import '@testing-library/jest-dom`'


global.fetch - JSDOMEnvironment.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
})

// Break into 4 part 

it("should load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Headers />
            <RestaurantMenu />
            <Cart />
        </Provider> 
        </BrowserRouter>
        ));

    const accordianHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    const addBtn = screen.getAllByRole("button", {name:"Add +"});
    fireEvent.click(addBtn[0]);

    
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("foodItems")

    expect(cartItems.length).toBe(7);       // 5 +2 = 7 * 5 from itemsList _ 2 cartItem

    const clearCart = screen.getAllByRole("button", {name:"Clear Cart"});
    fireEvent.click(clearCart);

    expect(cartItems.length).toBe(5);
    
    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();

})