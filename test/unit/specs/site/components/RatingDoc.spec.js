import Vue from 'vue';
import RatingDoc from '@/components/RatingDoc';

let ratingDoc;

describe('DropdownDoc', () => {
    beforeEach((done) => {
        ratingDoc = new Vue(RatingDoc);
        done();
    });

    describe('when constructed', () => {
        it('should have currentRating 1', (done) => {
            expect(ratingDoc.currentRating).to.equal(1);
            done();
        });
        it('should have type star', (done) => {
            expect(ratingDoc.type).to.equal('star');
            done();
        });
    });

    describe('when requested to changeIconType', () => {
        it('should change the type of rating', (done) => {
            const newType = 'heart';
            ratingDoc.changeIconType(newType);
            expect(ratingDoc.type).to.equal(newType);
            done();
        });
    });

    describe('when requested to increaseRating', () => {
        beforeEach((done) => {
            ratingDoc.currentRating = 0;
            ratingDoc.increaseRating();
            done();
        });
        it('should increase currentRating', () => {
            expect(ratingDoc.currentRating).to.equal(1);
        });
        describe('and currentRating is 5', () => {
            beforeEach((done) => {
                ratingDoc.currentRating = 5;
                ratingDoc.increaseRating();
                done();
            });
            it('should set currentRating to 0', (done) => {
                expect(ratingDoc.currentRating).to.equal(0);
                done();
            });
        });
    });

    describe('when requested to decreaseRating', () => {
        beforeEach((done) => {
            ratingDoc.currentRating = 1;
            ratingDoc.decreaseRating();
            done();
        });
        it('should increase currentRating', () => {
            expect(ratingDoc.currentRating).to.equal(0);
        });
        describe('and currentRating is 0', () => {
            beforeEach((done) => {
                ratingDoc.currentRating = 0;
                ratingDoc.decreaseRating();
                done();
            });
            it('should set currentRating to 5', (done) => {
                expect(ratingDoc.currentRating).to.equal(5);
                done();
            });
        });
    });
});
