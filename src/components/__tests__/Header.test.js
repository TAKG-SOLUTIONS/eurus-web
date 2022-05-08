import {render ,screen } from "@testing-library/react"
import Header from "../header/Header";
describe("Header Page",() => {
    describe("Layout",()=> {
        it('has header', () => {
            render(<Header/>);
            const h = screen.queryAllByRole('heading', {name: 'Buy, Trade, Sell Crypto in Minutes'});
            expect(h).toBeInTheDocument();
        })
    })
})