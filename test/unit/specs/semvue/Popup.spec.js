import Vue from 'vue';
import { Popup } from '@/semvue';

let popup;
let validProps;
const PopupConstructor = Vue.extend(Popup);

describe('Popup', () => {
    beforeEach((done) => {
        $().reset();
        validProps = {
            popupId: 'popupId',
            trigger: 'top left',
            targetSelector: '.my-icon',
        };
        popup = new PopupConstructor({ propsData: validProps }).$mount();
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
        it('should throw exception when doesnt have popupId prop', (done) => {
            const invalidProps = {
                trigger: 'top left',
                targetSelector: '.my-icon',
            };
            new PopupConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "popupId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have trigger prop', (done) => {
            const invalidProps = {
                popupId: 'popupId',
                targetSelector: '.my-icon',
            };
            new PopupConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "trigger"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have targetSelector prop', (done) => {
            const invalidProps = {
                popupId: 'popupId',
                trigger: 'top left',
            };
            new PopupConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "targetSelector"'); // eslint-disable-line
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(popup.customClass).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(popup.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            popup = new PopupConstructor({ propsData: validProps });
            sinon.spy(popup, 'startPopup');
            popup.$mount();
            done();
        });
        afterEach((done) => {
            popup.startPopup.restore();
            done();
        });
        it('should startPopup', (done) => {
            popup.$nextTick(() => {
                expect(popup.startPopup).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when requested to start popup', () => {
        beforeEach((done) => {
            $().reset();
            popup.startPopup();
            done();
        });
        it('should call jquery selector with targetSelector', (done) => {
            popup.$nextTick(() => {
                expect($).to.have.been.calledWith(`${validProps.targetSelector}`);
                done();
            });
        });
        it('should configure on with trigger', (done) => {
            const configurationCall = $().popup.args[0][0];
            expect(configurationCall.on).to.equal(validProps.trigger);
            done();
        });
        it('should configure target with targetSelector', (done) => {
            const configurationCall = $().popup.args[0][0];
            expect(configurationCall.target).to.equal(validProps.targetSelector);
            done();
        });
        it('should configure popup with popupId', (done) => {
            const configurationCall = $().popup.args[0][0];
            expect(configurationCall.popup).to.equal(`#${validProps.popupId}`);
            done();
        });
        it('should configure inline with false', (done) => {
            const configurationCall = $().popup.args[0][0];
            expect(configurationCall.inline).to.equal(false);
            done();
        });

        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.options = {
                    optionToOverride: 'abc',
                };
                popup = new PopupConstructor({ propsData: validProps }).$mount();

                popup.startPopup();
                done();
            });
            it('should configure rating with the new options', (done) => {
                popup.$nextTick(() => {
                    const configurationCall = $().popup.args[0][0];
                    expect(configurationCall.optionToOverride).to.equal('abc');
                    done();
                });
            });
        });
    });

    describe('when trigger is changed', () => {
        beforeEach((done) => {
            sinon.spy(popup, 'startPopup');
            popup.trigger = 'top right';
            done();
        });
        afterEach((done) => {
            popup.startPopup.restore();
            done();
        });
        it('should start rating again', (done) => {
            popup.$nextTick(() => {
                expect(popup.startPopup).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when targetSelector is changed', () => {
        beforeEach((done) => {
            sinon.spy(popup, 'startPopup');
            popup.targetSelector = '.my-icon2';
            done();
        });
        afterEach((done) => {
            popup.startPopup.restore();
            done();
        });
        it('should start rating again', (done) => {
            popup.$nextTick(() => {
                expect(popup.startPopup).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when options is changed', () => {
        beforeEach((done) => {
            validProps.options = {
                optionToOverride: 'abc',
            };
            popup = new PopupConstructor({ propsData: validProps }).$mount();
            $().reset();
            sinon.spy(popup, 'startPopup');

            popup.options.optionToOverride = 'def';
            done();
        });
        afterEach((done) => {
            popup.startPopup.restore();
            done();
        });
        it('should start rating again', (done) => {
            popup.$nextTick(() => {
                expect(popup.startPopup).to.have.callCount(1);
                done();
            });
        });
    });
});
