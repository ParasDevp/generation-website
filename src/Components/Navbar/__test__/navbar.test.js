import react from 'react';
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import Navbar from '../Index';
import Home from '../../../Pages/Home/Index';
import { isTsAnyKeyword } from '@babel/types';


test("render without crashing", () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/this is react js tutorial/i);
    expect(linkElement).toBeInTheDocument;

})
test('render without crash', () => {
    render(<Navbar />)
    const checkLink = screen.getByText(/Home/);
    expect(checkLink).toBeInTheDocument;
})
test('render without crash', () => {
    render(<Home />)
    const checkTitle = screen.getByText(/The Next/)
    expect(checkTitle).toBeInTheDocument;
});
test('render without crash', () => {
    render(<Home />)
    const checkTitle = screen.
        expect(checkTitle).toBeInTheDocument;
})