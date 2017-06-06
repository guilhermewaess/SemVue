import Vue from 'vue';
import Modal from '@/semvue/semvue';

let modal;
let validProps;
const ModalConstructor = Vue.extend(Modal);

describe('Modal', () => {
    beforeEach(() => {
        validProps = { modalId: 'modalId', showModal: false };
        modal = new ModalConstructor({ propsData: validProps }).$mount();
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
        it('should throw exception when doesnt have modalId prop', (done) => {
            const invalidProps = { showModal: false };
            new ModalConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "modalId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have showModal prop', (done) => {
            const invalidProps = { modalId: 'modalId' };
            new ModalConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "showModal"'); // eslint-disable-line
            done();
        });
        it('should have shouldActivate equals prop showModal', (done) => {
            expect(modal.shouldActivate).to.equal(validProps.showModal);
            done();
        });
        it('should have closable true', (done) => {
            expect(modal.closable).to.equal(true);
            done();
        });
        it('should have modalType as string empty', (done) => {
            expect(modal.modalType).to.equal('');
            done();
        });
    });

    describe('when showModal prop changes to true', () => {
        beforeEach((done) => {
            modal.showModal = true;
            done();
        });
        it('should call jquery selector with modalId', (done) => {
            modal.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.modalId}`);
                done();
            });
        });
    });
});
