import { render, fireEvent } from '@testing-library/react'; // Used to render pages
import Home from './Home'; // Import ome from the same directory as test
import '@testing-library/jest-dom'; // Uses jest for test case

describe('Functionality Test', () => { // describe function, includes name for test
  // Filtering test case as expected
  it('should filter products based on search input', () => {
    const { getByPlaceholderText, getByText } = render(<Home />); // simulate render of homepage
    const searchInput = getByPlaceholderText('Search...'); // navigate to the search bar
    const productName = 'pants'; // test product to search for

    fireEvent.change(searchInput, { target: { value: productName } }); // convert input to name
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' }); // simulate enter press

    const filteredProduct = getByText(productName);      
    expect(filteredProduct).toBeInTheDocument(); // expect product to be in filtered list
  });
  // Reset Test case, search for another product then reset
  it('should reset to show all products when search input is empty', () => { 
    const { getByPlaceholderText, queryByText } = render(<Home />);
    const searchInput = getByPlaceholderText('Search...'); 

    fireEvent.change(searchInput, { target: { value: 'pants' } }); 
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    let filteredProduct = queryByText('shirts'); // change filtered search to shirts
    expect(filteredProduct).not.toBeInTheDocument(); // expect shirts to not be in list

    fireEvent.change(searchInput, { target: { value: '' } }); // clear search input
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' }); 

    filteredProduct = queryByText('shirts'); 
    expect(filteredProduct).toBeInTheDocument(); // expect shirts to now be in list
  });
});  
       
describe('Boundary Test', () => { // expected to fail, entire list should not be searched
  // Filtering test case for more extreme inputs
  it('should filter products based on multiple input', () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const searchInput = getByPlaceholderText('Search...');
    const searchTerms = 'shirts, pants, shoes'; // multiple products entered simultaneously

    fireEvent.change(searchInput, { target: { value: searchTerms } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    // Expect to match all 3 products
    expect(getByText('shirts')).toBeInTheDocument();
    expect(getByText('pants')).toBeInTheDocument();
    expect(getByText('shoes')).toBeInTheDocument();
  });
});

describe('Error Handling Test', () => { // expected to fail, empty cannot be searched
  // Filtering test case for more empty inputs
  it('should display an error message when search input is empty', () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const searchInput = getByPlaceholderText('Search...');
    const errorMessage = 'Please enter a search term';

    fireEvent.change(searchInput, { target: { value: '' } }); // detect empty input
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument(); // expect to see an error message
  });
});


