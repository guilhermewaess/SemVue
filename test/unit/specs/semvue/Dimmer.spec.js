import Vue from 'vue';
import { Dimmer } from '@/semvue';

let dimmer;
let validProps;
const DimmerConstructor = Vue.extend(Dimmer);

describe('Dimmer', () => {
    beforeEach((done) => {
        $().reset();
        validProps = {
            dimmerId: 'dimmerId',
            showDimmer: false,
            targetSelector: '.my-dimmer',
        };
        dimmer = new DimmerConstructor({ propsData: validProps }).$mount();
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
        it('should throw exception when doesnt have dimmerId prop', (done) => {
            const invalidProps = {
                showDimmer: false,
                targetSelector: '.my-dimmer',
            };
            new DimmerConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "dimmerId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have showDimmer prop', (done) => {
            const invalidProps = {
                dimmerId: 'dimmerId',
                targetSelector: '.my-dimmer',
            };
            new DimmerConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "showDimmer"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have targetSelector prop', (done) => {
            const invalidProps = {
                dimmerId: 'dimmerId',
                showDimmer: false,
            };
            new DimmerConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "targetSelector"'); // eslint-disable-line
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(dimmer.customClass).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(dimmer.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            dimmer = new DimmerConstructor({ propsData: validProps });
            sinon.spy(dimmer, 'toggleDimmer');
            dimmer.$mount();
            done();
        });
        afterEach((done) => {
            dimmer.toggleDimmer.restore();
            done();
        });
        it('should toggleDimmer', (done) => {
            dimmer.$nextTick(() => {
                expect(dimmer.toggleDimmer).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when requested to toggleDimmer', () => {
        beforeEach((done) => {
            $().reset();
            dimmer.toggleDimmer();
            done();
        });
        it('should call jquery selector with targetSelector', (done) => {
            dimmer.$nextTick(() => {
                expect($).to.have.been.calledWith(`${validProps.targetSelector}`);
                done();
            });
        });

        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.options = {
                    onHide: sinon.spy(),
                    optionToOverride: 'abc',
                };
                dimmer = new DimmerConstructor({ propsData: validProps }).$mount();

                dimmer.toggleDimmer();
                done();
            });
            it('should configure dimmer with the new options', (done) => {
                dimmer.$nextTick(() => {
                    const configurationCall = $().dimmer.args[0][0];
                    expect(configurationCall.optionToOverride).to.equal('abc');
                    done();
                });
            });
            it('should configure dimmer onHide function with customCallback', (done) => {
                dimmer.$nextTick(() => {
                    const onHide = dimmer.onHide.bind(dimmer, validProps.options.onHide);
                    const configurationCall = $().dimmer.args[0][0];
                    const jsonCallHiddenFunction = JSON.stringify(configurationCall.onHide);
                    const jsondimmerHiddenFunction = JSON.stringify(onHide);
                    expect(jsonCallHiddenFunction).to.deep.equal(jsondimmerHiddenFunction);
                    done();
                });
            });
        });
    });

    describe('when onHide is executed', () => {
        let customCallback;
        let showDimmerSpy;
        beforeEach((done) => {
            customCallback = sinon.spy();
            showDimmerSpy = sinon.spy();
            dimmer.$once('update:showDimmer', showDimmerSpy);
            done();
        });
        describe('and doesnt have customCallback', () => {
            beforeEach((done) => {
                dimmer.onHide();
                done();
            });
            it('should trigger update:showdimmer only once', (done) => {
                expect(showDimmerSpy).to.have.callCount(1);
                done();
            });
            it('should trigger a event update:showdimmer with false', (done) => {
                expect(showDimmerSpy).to.have.calledWith(false);
                done();
            });
            it('should not call customCallback', () => {
                expect(customCallback).to.have.callCount(0);
            });
        });
        describe('and have customCallBack', () => {
            beforeEach((done) => {
                dimmer.onHide(customCallback);
                done();
            });
            it('should trigger update:showdimmer only once', (done) => {
                expect(showDimmerSpy).to.have.callCount(1);
                done();
            });
            it('should trigger a event update:showdimmer with false', (done) => {
                expect(showDimmerSpy).to.have.calledWith(false);
                done();
            });
            it('should call customCallback', () => {
                expect(customCallback).to.have.callCount(1);
            });
        });
    });

    describe('when showDimmer is changed', () => {
        beforeEach((done) => {
            sinon.spy(dimmer, 'toggleDimmer');
            dimmer.showDimmer = true;
            done();
        });
        afterEach((done) => {
            dimmer.toggleDimmer.restore();
            done();
        });
        it('should toggle dimmer again', (done) => {
            dimmer.$nextTick(() => {
                expect(dimmer.toggleDimmer).to.have.callCount(1);
                done();
            });
        });
    });
});
