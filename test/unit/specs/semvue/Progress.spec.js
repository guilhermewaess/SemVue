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

describe.only('Progress', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { progressId: 'progressId', total: 100 };
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
        it('should throw exception when doesnt have progressId prop', (done) => {
            const invalidProps = { total: 100 };
            new ProgressConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "progressId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have currentRating prop', (done) => {
            const invalidProps = { progressId: 'progressId' };
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
                expect($).to.have.been.calledWith(`#${validProps.progressId}`);
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
});
