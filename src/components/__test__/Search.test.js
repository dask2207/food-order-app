const { render, screen } = require("@testing-library/react");
import { act } from 'react-dom/test-utils';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react/types';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should Search Res List for barbeque nation input', async () => {
     await act( async () =>
      render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name:"Search"});

    const inputSearch = screen.getByTestId("inputSearch");

    fireEvent.change(inputSearch, {target : { value : "barbeque nation"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2)

    expect(searchBtn).toBeInTheDocument();

});

it('should render Top Rated Restaurant', async () => {
    await act( async () =>
     render(
       <BrowserRouter>
           <Body />
       </BrowserRouter>
   ))

   const cardsBeforeFilter = screen.getAllByTestId("resCard");

   expect(cardsBeforeFilter.length).toBe(9);

   const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

   fireEvent.click(topRatedButton);

   const cardsAfterFilter = screen.getAllByTestId("resCard");

   expect(cardsAfterFilter.length).toBe(4);

});