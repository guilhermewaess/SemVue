import Vue from 'vue';
import { Rating } from '@/semvue';

let rating;
let validProps;
const RatingConstructor = Vue.extend(Rating);

const helper = {
    createRating() {
        rating = new RatingConstructor({ propsData: validProps }).$mount();
    },
};

describe('Rating', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { ratingId: 'ratingId', currentRating: 1, maxRating: 4 };
        helper.createRating();
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
        it('should throw exception when doesnt have ratingId prop', (done) => {
            const invalidProps = { currentRating: 1, maxRating: 4 };
            new RatingConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "ratingId"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have currentRating prop', (done) => {
            const invalidProps = { ratingId: 'ratingId', maxRating: 4 };
            new RatingConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "currentRating"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have maxRating prop', (done) => {
            const invalidProps = { ratingId: 'ratingId', currentRating: 1 };
            new RatingConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "maxRating"'); // eslint-disable-line
            done();
        });
        it('should have type as string empty', (done) => {
            expect(rating.type).to.equal('');
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(rating.customClass).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(rating.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            rating = new RatingConstructor({ propsData: validProps });
            sinon.spy(rating, 'startRating');
            rating.$mount();
            done();
        });
        afterEach((done) => {
            rating.startRating.restore();
            done();
        });
        it('should startRating', (done) => {
            rating.$nextTick(() => {
                expect(rating.startRating).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when requested to start rating', () => {
        beforeEach((done) => {
            $().reset();
            rating.startRating();
            done();
        });
        it('should call jquery selector with ratingId', (done) => {
            rating.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.ratingId}`);
                done();
            });
        });
        it('should configure rating with initialRating', (done) => {
            rating.$nextTick(() => {
                const configurationCall = $().rating.args[0][0];
                expect(configurationCall.initialRating).to.equal(validProps.currentRating);
                done();
            });
        });
        it('should configure rating with maxRating', (done) => {
            rating.$nextTick(() => {
                const configurationCall = $().rating.args[0][0];
                expect(configurationCall.maxRating).to.equal(validProps.maxRating);
                done();
            });
        });
        it('should configure rating with onRate function', (done) => {
            rating.$nextTick(() => {
                const configurationCall = $().rating.args[0][0];
                const jsonOnChangeFunction = JSON.stringify(configurationCall.onRate);
                const jsonDropdownOnChangeFunction = JSON.stringify(rating.onRate);
                expect(jsonOnChangeFunction).to.deep.equal(jsonDropdownOnChangeFunction);
                done();
            });
        });

        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.options = {
                    optionToOverride: 'abc',
                };
                helper.createRating();

                rating.startRating();
                done();
            });
            it('should configure rating with the new options', (done) => {
                rating.$nextTick(() => {
                    const configurationCall = $().rating.args[0][0];
                    expect(configurationCall.optionToOverride).to.equal('abc');
                    done();
                });
            });
        });

        describe('when onRate is executed', () => {
            let spy;
            beforeEach((done) => {
                spy = sinon.spy();
                rating.$once('update:currentRating', spy);
                rating.onRate(3);
                done();
            });
            it('should trigger update:currentRating event only once', (done) => {
                expect(spy).to.have.been.callCount(1);
                done();
            });
            it('should trigger a event update:currentRating with new rate', (done) => {
                expect(spy).to.have.been.calledWith(3);
                done();
            });
        });

        describe('when currentRating is changed', () => {
            beforeEach((done) => {
                sinon.spy(rating, 'startRating');
                rating.currentRating = 3;
                done();
            });
            afterEach((done) => {
                rating.startRating.restore();
                done();
            });
            it('should start rating again', (done) => {
                rating.$nextTick(() => {
                    expect(rating.startRating).to.have.callCount(1);
                    done();
                });
            });
        });
    });
});
