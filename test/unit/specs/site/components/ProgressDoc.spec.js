import Vue from 'vue';
import ProgressDoc from '@/components/ProgressDoc';

let progressDoc;

const helper = {
    createProgressMock() {
        return {
            increment: sinon.spy(),
            decrement: sinon.spy(),
            complete: sinon.spy(),
            reset: sinon.spy(),
            setActive: sinon.spy(),
        };
    },
};

describe('ProgressDoc', () => {
    beforeEach((done) => {
        progressDoc = new Vue(ProgressDoc);
        progressDoc.$refs.progress = helper.createProgressMock();
        progressDoc.$refs.topSegmentProgress = helper.createProgressMock();
        progressDoc.$refs.bottomSegmentProgress = helper.createProgressMock();
        done();
    });
    describe('when requested to increment', () => {
        beforeEach((done) => {
            progressDoc.increment();
            done();
        });
        it('should increment progress', () => {
            expect(progressDoc.$refs.progress.increment).to.have.callCount(1);
        });
        it('should increment topSegmentProgress', () => {
            expect(progressDoc.$refs.topSegmentProgress.increment).to.have.callCount(1);
        });
        it('should increment bottomSegmentProgress', () => {
            expect(progressDoc.$refs.bottomSegmentProgress.increment).to.have.callCount(1);
        });
    });
    describe('when requested to decrement', () => {
        beforeEach((done) => {
            progressDoc.decrement();
            done();
        });
        it('should decrement progress', () => {
            expect(progressDoc.$refs.progress.decrement).to.have.callCount(1);
        });
        it('should decrement topSegmentProgress', () => {
            expect(progressDoc.$refs.topSegmentProgress.decrement).to.have.callCount(1);
        });
        it('should decrement bottomSegmentProgress', () => {
            expect(progressDoc.$refs.bottomSegmentProgress.decrement).to.have.callCount(1);
        });
    });
    describe('when requested to complete', () => {
        beforeEach((done) => {
            progressDoc.complete();
            done();
        });
        it('should complete progress', () => {
            expect(progressDoc.$refs.progress.complete).to.have.callCount(1);
        });
        it('should complete topSegmentProgress', () => {
            expect(progressDoc.$refs.topSegmentProgress.complete).to.have.callCount(1);
        });
        it('should complete bottomSegmentProgress', () => {
            expect(progressDoc.$refs.bottomSegmentProgress.complete).to.have.callCount(1);
        });
    });
    describe('when requested to reset', () => {
        beforeEach((done) => {
            progressDoc.reset();
            done();
        });
        it('should reset progress', () => {
            expect(progressDoc.$refs.progress.reset).to.have.callCount(1);
        });
        it('should reset topSegmentProgress', () => {
            expect(progressDoc.$refs.topSegmentProgress.reset).to.have.callCount(1);
        });
        it('should reset bottomSegmentProgress', () => {
            expect(progressDoc.$refs.bottomSegmentProgress.reset).to.have.callCount(1);
        });
    });
    describe('when requested to setState', () => {
        beforeEach((done) => {
            progressDoc.setState('setActive');
            done();
        });
        it('should setState progress', () => {
            expect(progressDoc.$refs.progress.setActive).to.have.been.callCount(1);
        });
        it('should setState topSegmentProgress', () => {
            expect(progressDoc.$refs.topSegmentProgress.setActive).to.have.been.callCount(1);
        });
        it('should setState bottomSegmentProgress', () => {
            expect(progressDoc.$refs.bottomSegmentProgress.setActive).to.have.been.callCount(1);
        });
    });
    describe('when requested to setTotal', () => {
        it('should setTotal to 10 when actual is 100', () => {
            progressDoc.setTotal();
            expect(progressDoc.total).to.equal(10);
        });
        it('should setTotal to 100 when actual is 10', () => {
            progressDoc.total = 10;
            progressDoc.setTotal();
            expect(progressDoc.total).to.equal(100);
        });
    });
});
