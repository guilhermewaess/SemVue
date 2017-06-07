import Vue from 'vue';
import { Accordion } from '@/semvue/semvue';

let accordion;
let validProps;
const AccordionConstructor = Vue.extend(Accordion);

describe('Accordion', () => {
    beforeEach(() => {
        $().reset();
        validProps = { accordionId: 'accordionId' };
        accordion = new AccordionConstructor({ propsData: validProps }).$mount();
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
        it('should throw exception when doesnt have accordionId prop', (done) => {
            const invalidProps = {};
            new AccordionConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "accordionId"'); // eslint-disable-line
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(accordion.customClass).to.equal('');
            done();
        });
        it('should call jquery selector with accordionId', (done) => {
            accordion.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.accordionId}`);
                done();
            });
        });
    });
});
