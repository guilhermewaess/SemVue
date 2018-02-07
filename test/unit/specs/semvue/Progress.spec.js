/* eslint disable no-use-before-define: 0 */
import Vue from 'vue';
import { SemVueProgress } from '@/semvue';

let progress;
let validProps;
const ProgressConstructor = Vue.extend(SemVueProgress);

const helper = {
    createProgress() {
        progress = new ProgressConstructor({ propsData: validProps }).$mount();
    },
};

describe('Progress', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { id: 'id', total: 100 };
        helper.createProgress();
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
            const invalidProps = { total: 100 };
            new ProgressConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "id"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have currentRating prop', (done) => {
            const invalidProps = { id: 'id' };
            new ProgressConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "total"'); // eslint-disable-line
            done();
        });
        it('should have incrementValue false', (done) => {
            expect(progress.incrementValue).to.be.null; // eslint-disable-line
            done();
        });
        it('should have progressLabelType as percent', (done) => {
            expect(progress.progressLabelType).to.equal('percent');
            done();
        });
        it('should have activeText as string empty', (done) => {
            expect(progress.activeText).to.equal('');
            done();
        });
        it('should have successText as string empty', (done) => {
            expect(progress.successText).to.equal('');
            done();
        });
        it('should have errorText as string empty', (done) => {
            expect(progress.errorText).to.equal('');
            done();
        });
        it('should have warningText as string empty', (done) => {
            expect(progress.warningText).to.equal('');
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(progress.customClass).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(progress.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            progress = new ProgressConstructor({ propsData: validProps });
            sinon.spy(progress, 'startProgress');
            progress.$mount();
            done();
        });
        afterEach((done) => {
            progress.startProgress.restore();
            done();
        });
        it('should startProgress', (done) => {
            progress.$nextTick(() => {
                expect(progress.startProgress).to.have.callCount(1);
                done();
            });
        });
        it('should create progressElement', (done) => {
            progress.$nextTick(() => {
                expect(progress.progressElement).to.be.defined; // eslint-disable-line
                done();
            });
        });
        it('should call jquery selector with ratingId', (done) => {
            progress.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.id}`);
                done();
            });
        });
    });

    describe('when requested to start progress', () => {
        beforeEach((done) => {
            $().reset();
            progress.startProgress();
            done();
        });
        it('should configure progress with text', (done) => {
            const expectedText = {
                active: progress.activeText,
                success: progress.successText,
                error: progress.errorText,
                warning: progress.warningText,
            };
            progress.$nextTick(() => {
                const configurationCall = $().progress.args[0][0];
                expect(configurationCall.text).to.deep.equal(expectedText);
                done();
            });
        });
        it('should configure progress with value', (done) => {
            progress.$nextTick(() => {
                const configurationCall = $().progress.args[0][0];
                expect(configurationCall.value).to.equal(progress.incrementValue);
                done();
            });
        });
        it('should configure progress with total', (done) => {
            progress.$nextTick(() => {
                const configurationCall = $().progress.args[0][0];
                expect(configurationCall.total).to.equal(validProps.total);
                done();
            });
        });
        it('should configure progress with label', (done) => {
            progress.$nextTick(() => {
                const configurationCall = $().progress.args[0][0];
                expect(configurationCall.label).to.equal(progress.progressLabelType);
                done();
            });
        });
    });

    describe('when request to setPercent', () => {
        beforeEach((done) => {
            $().progress.reset();
            done();
        });
        it('should call progress with setPercent', (done) => {
            progress.setPercent(10);
            expect($().progress).to.have.been.calledWith('set percent', 10);
            done();
        });
    });

    describe('when request to setProgress', () => {
        it('should call progress with setProgress', (done) => {
            progress.setProgress(10);
            expect($().progress).to.have.been.calledWith('set progress', 10);
            done();
        });
    });

    describe('when request to increment', () => {
        it('should call progress with increment', (done) => {
            progress.increment();
            expect($().progress).to.have.been.calledWith('increment');
            done();
        });
    });

    describe('when request to decrement', () => {
        it('should call progress with decrement', (done) => {
            progress.decrement();
            expect($().progress).to.have.been.calledWith('decrement');
            done();
        });
    });

    describe('when request to updateProgress', () => {
        it('should call progress with updateProgress', (done) => {
            progress.updateProgress(10);
            expect($().progress).to.have.been.calledWith('update progress', 10);
            done();
        });
    });

    describe('when request to complete', () => {
        it('should call progress with complete', (done) => {
            progress.complete();
            expect($().progress).to.have.been.calledWith('complete');
            done();
        });
    });

    describe('when request to complete', () => {
        it('should call progress with complete', (done) => {
            progress.complete();
            expect($().progress).to.have.been.calledWith('complete');
            done();
        });
    });

    describe('when request to reset', () => {
        it('should call progress with reset', (done) => {
            progress.reset();
            expect($().progress).to.have.been.calledWith('reset');
            done();
        });
    });

    describe('when request to setTotal', () => {
        it('should call progress with setTotal', (done) => {
            progress.setTotal(10);
            expect($().progress).to.have.been.calledWith('set total', 10);
            done();
        });
    });

    describe('when request to getText', () => {
        it('should call progress with getText', (done) => {
            progress.getText('text');
            expect($().progress).to.have.been.calledWith('get text', 'text');
            done();
        });
    });

    describe('when request to getNormalizedValue', () => {
        it('should call progress with getNormalizedValue', (done) => {
            progress.getNormalizedValue(10);
            expect($().progress).to.have.been.calledWith('get normalized value', 10);
            done();
        });
    });

    describe('when request to getPercent', () => {
        it('should call progress with getPercent', (done) => {
            progress.getPercent();
            expect($().progress).to.have.been.calledWith('get percent');
            done();
        });
    });

    describe('when request to getValue', () => {
        it('should call progress with getValue', (done) => {
            progress.getValue();
            expect($().progress).to.have.been.calledWith('get value');
            done();
        });
    });

    describe('when request to getTotal', () => {
        it('should call progress with getTotal', (done) => {
            progress.getTotal();
            expect($().progress).to.have.been.calledWith('get total');
            done();
        });
    });

    describe('when request to isComplete', () => {
        it('should call progress with isComplete', (done) => {
            progress.isComplete();
            expect($().progress).to.have.been.calledWith('is complete');
            done();
        });
    });

    describe('when request to isSuccess', () => {
        it('should call progress with isSuccess', (done) => {
            progress.isSuccess();
            expect($().progress).to.have.been.calledWith('is success');
            done();
        });
    });

    describe('when request to isWarning', () => {
        it('should call progress with isWarning', (done) => {
            progress.isWarning();
            expect($().progress).to.have.been.calledWith('is warning');
            done();
        });
    });

    describe('when request to isError', () => {
        it('should call progress with isError', (done) => {
            progress.isError();
            expect($().progress).to.have.been.calledWith('is error');
            done();
        });
    });

    describe('when request to isActive', () => {
        it('should call progress with isActive', (done) => {
            progress.isActive();
            expect($().progress).to.have.been.calledWith('is active');
            done();
        });
    });

    describe('when request to setActive', () => {
        it('should call progress with setActive', (done) => {
            progress.setActive();
            expect($().progress).to.have.been.calledWith('set active');
            done();
        });
    });

    describe('when request to setWarning', () => {
        it('should call progress with setWarning', (done) => {
            progress.setWarning();
            expect($().progress).to.have.been.calledWith('set warning');
            done();
        });
    });

    describe('when request to setSuccess', () => {
        it('should call progress with setSuccess', (done) => {
            progress.setSuccess();
            expect($().progress).to.have.been.calledWith('set success');
            done();
        });
    });

    describe('when request to setError', () => {
        it('should call progress with setError', (done) => {
            progress.setError();
            expect($().progress).to.have.been.calledWith('set error');
            done();
        });
    });

    describe('when request to setDuration', () => {
        it('should call progress with setDuration', (done) => {
            progress.setDuration(10);
            expect($().progress).to.have.been.calledWith('set duration', 10);
            done();
        });
    });

    describe('when request to setLabel', () => {
        it('should call progress with setLabel', (done) => {
            progress.setLabel('text');
            expect($().progress).to.have.been.calledWith('set label', 'text');
            done();
        });
    });

    describe('when request to setBarLabel', () => {
        it('should call progress with setBarLabel', (done) => {
            progress.setBarLabel('text');
            expect($().progress).to.have.been.calledWith('set bar label', 'text');
            done();
        });
    });

    describe('when request to removeActive', () => {
        it('should call progress with removeActive', (done) => {
            progress.removeActive();
            expect($().progress).to.have.been.calledWith('remove active');
            done();
        });
    });

    describe('when request to removeWarning', () => {
        it('should call progress with removeWarning', (done) => {
            progress.removeWarning();
            expect($().progress).to.have.been.calledWith('remove warning');
            done();
        });
    });

    describe('when request to removeSuccess', () => {
        it('should call progress with removeSuccess', (done) => {
            progress.removeSuccess();
            expect($().progress).to.have.been.calledWith('remove success');
            done();
        });
    });

    describe('when request to removeError', () => {
        it('should call progress with removeError', (done) => {
            progress.removeError();
            expect($().progress).to.have.been.calledWith('remove error');
            done();
        });
    });

    describe('when total is changed', () => {
        beforeEach((done) => {
            sinon.spy(progress, 'setActive');
            sinon.spy(progress, 'setTotal');
            sinon.spy(progress, 'reset');

            progress.total = 10;
            done();
        });
        afterEach((done) => {
            progress.setActive.restore();
            progress.setTotal.restore();
            progress.reset.restore();
            done();
        });
        it('should setTotal', (done) => {
            progress.$nextTick(() => {
                expect(progress.setTotal).to.have.been.calledWith(10);
                done();
            });
        });
        it('should reset progress', (done) => {
            progress.$nextTick(() => {
                expect(progress.reset).to.have.callCount(1);
                done();
            });
        });
        it('should set active', (done) => {
            progress.$nextTick(() => {
                expect(progress.setActive).to.have.callCount(1);
                done();
            });
        });
    });
});
