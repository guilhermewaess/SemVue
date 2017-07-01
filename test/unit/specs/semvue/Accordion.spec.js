import Vue from 'vue';
import { Accordion } from '@/semvue/index';

let accordion;
let validProps;
const AccordionConstructor = Vue.extend(Accordion);

describe('Accordion', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { accordionId: 'accordionId' };
        accordion = new AccordionConstructor({ propsData: validProps }).$mount();
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
        it('should have options as object empty', (done) => {
            expect(accordion.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            accordion = new AccordionConstructor({ propsData: validProps });
            sinon.spy(accordion, 'startAccordion');
            accordion.$mount();
            done();
        });
        afterEach((done) => {
            accordion.startAccordion.restore();
            done();
        });
        it('should startAccordion', (done) => {
            accordion.$nextTick(() => {
                expect(accordion.startAccordion).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when requested to start rating', () => {
        beforeEach((done) => {
            $().reset();
            accordion.startAccordion();
            done();
        });
        it('should call jquery selector with ratingId', (done) => {
            expect($).to.have.been.calledWith(`#${validProps.accordionId}`);
            done();
        });

        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.options = {
                    optionToOverride: 'abc',
                };
                accordion = new AccordionConstructor({ propsData: validProps });

                accordion.startAccordion();
                done();
            });
            it('should configure rating with the new options', (done) => {
                const configurationCall = $().accordion.args[0][0];
                expect(configurationCall.optionToOverride).to.equal('abc');
                done();
            });
        });
    });
});
