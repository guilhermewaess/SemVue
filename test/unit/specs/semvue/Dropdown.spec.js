import Vue from 'vue';
import { Dropdown } from '@/semvue/index';

let dropdown;
let validProps;
const DropdownConstructor = Vue.extend(Dropdown);

describe('Dropdown', () => {
    beforeEach((done) => {
        $().reset();
        validProps = {
            dropdownId: 'dropdownId',
            value: { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
            options: [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m mobile phone 2' },
            ],
        };
        dropdown = new DropdownConstructor({ propsData: validProps }).$mount();
        done();
    });
    describe('when constructed', () => {
        beforeEach((done) => {
            sinon.spy(console, 'error');
            done();
        });
        afterEach((done) => {
            console.error.restore(); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have dropdownId prop', (done) => {
            const invalidProps = {
                value: { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                options: [{ iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' }],
                iconProperty: 'iconClass',
                customClass: 'large',
            };
            new DropdownConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "dropdownId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have value prop', (done) => {
            const invalidProps = {
                dropdownId: 'dropdownId',
                options: [{ iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' }],
                iconProperty: 'iconClass',
                customClass: 'large',
            };
            new DropdownConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "value"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have options prop', (done) => {
            const invalidProps = {
                dropdownId: 'dropdownId',
                value: { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                iconProperty: 'iconClass',
                customClass: 'large',
            };
            new DropdownConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "options"'); // eslint-disable-line
            done();
        });
        it('should not throw exception when doesnt have optional props', (done) => {
            const invalidProps = {
                dropdownId: 'dropdownId',
                value: { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                options: [{ iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' }],
            };
            new DropdownConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.callCount(0); // eslint-disable-line
            done();
        });
        it('should have iconProperty as string empty', (done) => {
            expect(dropdown.iconProperty).to.equal('');
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(dropdown.customClass).to.equal('');
            done();
        });
        it('should call jquery selector with dropdownId', (done) => {
            dropdown.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.dropdownId}`);
                done();
            });
        });
    });

    describe('when requested to start dropdown', () => {
        beforeEach((done) => {
            $().reset();
            dropdown.startDropdown();
            done();
        });
        it('should call jquery selector with dropdownId', (done) => {
            dropdown.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.dropdownId}`);
                done();
            });
        });
        it('should configure dropdown with onChange function', (done) => {
            dropdown.$nextTick(() => {
                const configurationCall = $().dropdown.args[0][0];
                const jsonOnChangeFunction = JSON.stringify(configurationCall.onChange);
                const jsonDropdownOnChangeFunction = JSON.stringify(dropdown.updateValue);
                expect(jsonOnChangeFunction).to.deep.equal(jsonDropdownOnChangeFunction);
                done();
            });
        });
    });

    describe('when requested to findSelectedOption with string selectedValue', () => {
        beforeEach((done) => {
            dropdown.options = [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m mobile phone 2' },
            ];
            done();
        });
        it('should find option on options array', (done) => {
            const option = dropdown.findSelectedOption('2');
            expect(option).to.deep.equal(dropdown.options[1]);
            done();
        });
    });

    describe('when requested to findSelectedOption with number selectedValue', () => {
        it('should find option on options array', (done) => {
            const option = dropdown.findSelectedOption(2);
            expect(option).to.deep.equal(dropdown.options[1]);
            done();
        });
    });

    describe('when requested to updateValue', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            dropdown.$once('update:value', spy);
            dropdown.updateValue(2);
            done();
        });
        it('should trigger event only once', (done) => {
            expect(spy).to.have.been.callCount(1);
            done();
        });
        it('should trigger a event update:showModal with option object', (done) => {
            const selectedOption = dropdown.options[1];
            expect(spy).to.have.been.calledWith(selectedOption);
            done();
        });
    });

    describe('when evaluate if hasIcons', () => {
        it('should return true if iconProperty is not empty', (done) => {
            dropdown.iconProperty = 'iconClass';
            expect(dropdown.hasIcons).to.equal(true);
            done();
        });
        it('should return false if iconProperty is empty', (done) => {
            dropdown.iconProperty = '';
            expect(dropdown.hasIcons).to.equal(false);
            done();
        });
    });

    describe('when options is changed', () => {
        beforeEach((done) => {
            sinon.spy(dropdown, 'updateValue');
            dropdown.options = [
                { iconClass: 'mobile', value: 3, text: 'value 3' },
                { iconClass: 'icon volume phone', value: 4, text: 'value 4' },
            ];
            done();
        });
        afterEach((done) => {
            dropdown.updateValue.restore();
            done();
        });
        it('should request to updateValue with the first object on options array', (done) => {
            dropdown.$nextTick(() => {
                expect(dropdown.updateValue).to.have.been.calledWith(3);
                done();
            });
        });
    });
});
