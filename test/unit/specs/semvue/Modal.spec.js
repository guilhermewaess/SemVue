import Vue from 'vue';
import { Modal } from '@/semvue/index';

let modal;
let validProps;
const ModalConstructor = Vue.extend(Modal);

describe('Modal', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { modalId: 'modalId', showModal: false };
        modal = new ModalConstructor({ propsData: validProps }).$mount();
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
        it('should have closable true', (done) => {
            expect(modal.closable).to.equal(true);
            done();
        });
        it('should have type as string empty', (done) => {
            expect(modal.type).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(modal.options).to.deep.equal({});
            done();
        });
    });

    describe('when showModal prop changes', () => {
        beforeEach((done) => {
            sinon.spy(modal, 'toggleModal');
            modal.showModal = true;
            done();
        });
        afterEach((done) => {
            modal.toggleModal.restore();
            done();
        });
        it('should toggleModal', (done) => {
            modal.$nextTick(() => {
                expect(modal.toggleModal).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when request to toggleModal', () => {
        beforeEach((done) => {
            modal.toggleModal();
            done();
        });
        it('should call jquery selector with modalId', (done) => {
            modal.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.modalId}`);
                done();
            });
        });

        describe('and show modal is true', () => {
            beforeEach(() => {
                modal.showModal = true;
                $().reset();
                modal.toggleModal();
            });
            it('should show modal', (done) => {
                modal.$nextTick(() => {
                    expect($().modal).to.have.been.calledWith('show');
                    done();
                });
            });
            it('should configure modal with closable', (done) => {
                modal.$nextTick(() => {
                    const configurationCall = $().modal.args[0][0];
                    expect(configurationCall.closable).to.equal(modal.closable);
                    done();
                });
            });
            it('should configure modal with onHidden function', (done) => {
                modal.$nextTick(() => {
                    const configurationCall = $().modal.args[0][0];
                    const jsonCallHiddenFunction = JSON.stringify(configurationCall.onHidden);
                    const jsonModalHiddenFunction = JSON.stringify(modal.onHiddenCallback);
                    expect(jsonCallHiddenFunction).to.deep.equal(jsonModalHiddenFunction);
                    done();
                });
            });
        });

        describe('and show modal is false', () => {
            it('should hide modal', (done) => {
                modal.$nextTick(() => {
                    expect($().modal).to.have.been.calledWith('hide');
                    done();
                });
            });
        });

        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.showModal = true;
                validProps.options = {
                    optionToOverride: 'abc',
                };
                modal = new ModalConstructor({ propsData: validProps }).$mount();
                modal.toggleModal();
                done();
            });
            it('should configure modal with the new options', (done) => {
                modal.$nextTick(() => {
                    const configurationCall = $().modal.args[0][0];
                    expect(configurationCall.optionToOverride).to.equal('abc');
                    done();
                });
            });
        });
    });

    describe('when onHiddenCallback is executed', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            modal.$once('update:showModal', spy);
            modal.onHiddenCallback();
            done();
        });
        it('should trigger event only once', (done) => {
            expect(spy).to.have.been.callCount(1);
            done();
        });
        it('should trigger a event update:showModal with false', (done) => {
            expect(spy).to.have.been.calledWith(false);
            done();
        });
    });
});
