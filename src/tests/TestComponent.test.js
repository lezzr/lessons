import { mount } from '@vue/test-utils'
import TestComponent from "./TestComponent"

describe('TestComponent',  ()=> {
    test('Content of TestComponent', ()=>{
        const wrapper = mount(TestComponent, {
            propsData:{
                message: "hello test"
            }
        })

        expect(wrapper.text()).toEqual(
            'message is hello test'
        )
    })
});
