import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './App';


describe('renders learn react link', () => {
  


  it("has a button", () => {
     render(<Calculator />);
    const btn = screen.getByTestId("get-button");
    expect(btn).toBeInTheDocument();

  })


  it("has a label", ()=> {
    render(<Calculator/>);
    const labl = screen.getByTestId("label");
    expect(labl).toBeInTheDocument();
  })

  it("has a input", ()=> {
    render(<Calculator/>);
    const ins = screen.getByTestId("ins");
    expect(ins).toBeInTheDocument();
  })
 
}
);
describe('renders  react link', () => {
  


  it("has a display of results", () => {
     render(<Calculator />);
    const result = screen.getByTestId("ins");
    fireEvent.change(result,{target: {value:"yawa"}});
    expect(result.value).toBe("yawa");

    const btn = screen.getByTestId("get-button");
    fireEvent.click(btn);
    expect(screen.getByTestId("result")).toHaveTextContent("yawa");
    
  

  });


  
 
});