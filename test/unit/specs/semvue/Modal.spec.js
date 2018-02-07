import Vue from 'vue';
import { Modal } from '@/semvue/index';

let modal;
let validProps;
const ModalConstructor = Vue.extend(Modal);

describe('Modal', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { id: 'id', showModal: false };
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
        it('should throw exception when doesnt have id prop', (done) => {
            const invalidProps = { showModal: false };
            new ModalConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "id"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have showModal prop', (done) => {
            const invalidProps = { id: 'id' };
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
        it('should call jquery selector with id', (done) => {
            modal.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.id}`);
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
                    const jsonModalHiddenFunction = JSON.stringify(modal.onHidden);
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
                    onHidden: sinon.spy(),
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
            it('should configure modal onHidden function with customCallback', (done) => {
                modal.$nextTick(() => {
                    const onHidden = modal.onHidden.bind(modal, validProps.options.onHidden);
                    const configurationCall = $().modal.args[0][0];
                    const jsonCallHiddenFunction = JSON.stringify(configurationCall.onHidden);
                    const jsonModalHiddenFunction = JSON.stringify(onHidden);

                    expect(jsonCallHiddenFunction).to.deep.equal(jsonModalHiddenFunction);
                    done();
                });
            });
        });
    });

    describe('when onHidden is executed', () => {
        let customCallback;
        let showModalSpy;
        beforeEach((done) => {
            customCallback = sinon.spy();
            showModalSpy = sinon.spy();
            modal.$once('update:showModal', showModalSpy);
            done();
        });
        describe('and doesnt have customCallback', () => {
            beforeEach((done) => {
                modal.onHidden();
                done();
            });
            it('should trigger update:showModal only once', (done) => {
                expect(showModalSpy).to.have.been.callCount(1);
                done();
            });
            it('should trigger a event update:showModal with false', (done) => {
                expect(showModalSpy).to.have.been.calledWith(false);
                done();
            });
            it('should not call customCallback', () => {
                expect(customCallback).to.have.been.callCount(0);
            });
        });
        describe('and have customCallBack', () => {
            beforeEach((done) => {
                modal.onHidden(customCallback);
                done();
            });
            it('should trigger update:showModal only once', (done) => {
                expect(showModalSpy).to.have.been.callCount(1);
                done();
            });
            it('should trigger a event update:showModal with false', (done) => {
                expect(showModalSpy).to.have.been.calledWith(false);
                done();
            });
            it('should call customCallback', () => {
                expect(customCallback).to.have.been.callCount(1);
            });
        });
    });
});
