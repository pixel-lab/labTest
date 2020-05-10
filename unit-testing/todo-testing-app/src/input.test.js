import React from 'react';
import {shallow} from 'enzyme'
import {ElementSearch,storeFactory} from './Tests/globalTestFuncitons'; 
import Input,{UnconnectedInput} from './input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive();
    //console.log(store);
    return wrapper;
}


describe('Input component: wordes not gussed',()=>{
    let wrapper;    
    beforeEach(()=> {
        wrapper = setup({success:false});
    });
    it('not gussed: should render the container', ()=>{
        expect(ElementSearch(setup(), 'input-container').length).toBe(1);
    })
    it('not gussed: should render the text feild', ()=>{
        expect(ElementSearch(setup(), 'input-text-box').length).toBe(1);
    })
    it('not gussed: should render the submit button', ()=>{
        expect(ElementSearch(setup(), 'submit-button').length).toBe(1);
    })
})

describe('Input component: wordes gussed',()=>{
    let wrapper;    
    beforeEach(()=> {
        wrapper = setup({success:true});
    });
    it('wordes gussed : should render the container', ()=>{
        expect(ElementSearch(wrapper, 'input-container').length).toBe(0);
    })
    it('wordes gussed: should render the text feild', ()=>{
        expect(ElementSearch(wrapper, 'input-text-box').length).toBe(0);
    })
    it('wordes gussed: should render the submit button', ()=>{
        expect(ElementSearch(wrapper, 'submit-button').length).toBe(0);
    })
});

describe('Checking input redux props', () => {
    it('`Success` should be true', ()=> {
        const success = true;
        const wrapper = setup({success});
        const successProps = wrapper.instance().props.success;
        expect(successProps).toBe(true)
    });
    it('`GussedWord` should be function', ()=> {       
        const wrapper = setup();
        const successProps = wrapper.instance().props.GussedWord;
        expect(successProps).toBeInstanceOf(Function);
    })
});

describe('action creator `GussedWord`', ()=> {
     let GussedWord ='train';
     let wrapper;
     let fakeJestCall;
     beforeEach(()=> {      
         // create a mock function for `getSecretWord`
         fakeJestCall = jest.fn();        
         // set up Input, with guessWordMock as a prop
         wrapper = shallow(<UnconnectedInput GussedWord= {fakeJestCall} />);
         // simulate the input
         wrapper.instance().inputBox.current = { value: GussedWord };
         //console.log(wrapper1.instance().inputBox);
         // simulate click on submit button
         const submitBtn = ElementSearch(wrapper, 'submit-button');
         submitBtn.simulate('click', { preventDefault() {} });
     })
     it('guessWord` was called once', ()=> {        
         expect(fakeJestCall.mock.calls.length).toBe(1);
     })
     it('guessWord` was called once', ()=> {    
         //console.log();    
        expect(fakeJestCall.mock.calls[0][0]).toBe(GussedWord);
    })
     it('InputBox should become empty again', ()=> {        
        expect(wrapper.instance().inputBox.current.value).toBe('');
    })




  
});