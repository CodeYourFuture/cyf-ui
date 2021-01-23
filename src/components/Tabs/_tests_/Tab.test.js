import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Tabs, Tab, TestTab } from "..";
import { TabLabel } from "../TabLabel";

describe('<Tab/>', () => {
    // test('renders without crushing', () => {
    //     render(<Tab label="Steps"/>);
    // });
    test('props work', () => {
        const label = "Calls"
        const testLabel = "NewCalls"
        const { getByTestId } = render(<Tab label={label} info={testLabel}></Tab> );
        const elem = getByTestId('label')
        //expect(elem.innerHTML).toBe("Hello From Tab-2-Calls")
        expect(getByTestId('label').textContent).toBe(testLabel);
        

    });
});

// describe('<TabLabel/>', () => {
//     test('renders without crushing', () => {
//         let activeTab = false;
//         let label = "";
//         const clickTabItem = jest.fn(() => null);
//         render(<TabLabel            
//             active={!activeTab}
//             label={label}
//             clickTabItem={clickTabItem}
//           />);
//     });
//     test('clickTab', () => {
//         let clicked = false;
//         let activeTab = false;
//         const testLabel = "NewLabel"

//         const { getByTestId } = render(<TabLabel active={!activeTab}
//                                          label={testLabel} clickTabItem={() =>clicked = true}/>);
//         const tabList = getByTestId('labels');
//         //expect(getByTestId('label')).toHaveTextContent(testLabel);
//         fireEvent.click(tabList);
//         expect(clicked).toBe(true);

//     });
//     test('clickTab with mocked function', () => {
//         let activeTab = false;
//         let label = "Steps";
//         const click = jest.fn(() => null);
//         const { getByText } = render(<TabLabel active={!activeTab}
//             label={label} clickTabItem={click}/>);
//         const tabList = getByText(label);
//         fireEvent.click(tabList);
//         expect(click).toBeCalled();

//     });
// })
