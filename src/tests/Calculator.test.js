import { mount } from '@vue/test-utils'
import Calculator from '../components/Calculator'

describe('Calculator test', ()=>{
    it('test operand1 input value', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('test operand2 input value', async ()=>{
        const wrapper = mount(Calculator)
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        expect(wrapper.vm.operand2).toBe(2)
    })
})

describe('Calculator test methods', ()=>{
    it('test sum', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('12')

        const sumOperationBtn = wrapper.find('button[name="+"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(112)
    })
    it('test subt', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('12')

        const sumOperationBtn = wrapper.find('button[name="-"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(88)
    })
    it('test mult', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('12')

        const sumOperationBtn = wrapper.find('button[name="*"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1200)
    })
    it('test divide', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('10')

        const sumOperationBtn = wrapper.find('button[name="/"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(10)
    })
    it('test powbtn', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('2')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('10')

        const sumOperationBtn = wrapper.find('button[name="^"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1024)
    })
    it('test fulldiv', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('10')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('3')

        const sumOperationBtn = wrapper.find('button[name="//"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })
    it('test divide error', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')
        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('0')

        const sumOperationBtn = wrapper.find('button[name="/"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.error).toBe("Делить на 0 нельзя")
    })
})
describe('Calculator test keyboard', ()=>{
    it('test keyb1', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="1"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("11")
    })
    it('test keyb2', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="2"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("12")
    })
    it('test keyb3', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="3"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("13")
    })
    it('test keyb4', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="4"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("14")
    })
    it('test keyb5', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="5"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("15")
    })
    it('test keyb6', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="6"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("16")
    })
    it('test keyb7', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="7"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("17")
    })
    it('test keyb8', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="8"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("18")
    })
    it('test keyb9', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="9"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("19")
    })
    it('test keyb0', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        const nextInputValue = wrapper.find('button[name="0"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("10")
    })
    it('test keybRem', async ()=>{
        const wrapper = mount(Calculator)
        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('10')

        const nextInputValue = wrapper.find('button[name="<"]')
        nextInputValue.trigger('click')

        expect(wrapper.vm.operand1).toBe("1")
    })
})
