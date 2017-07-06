import Vue from 'vue';
import DimmerDoc from '@/components/DimmerDoc';

let dimmerDoc;

describe('DimmerDoc', () => {
    beforeEach((done) => {
        dimmerDoc = new Vue(DimmerDoc);
        done();
    });

    describe('when constructed', () => {
        it('should have showBasicDimmer false', (done) => {
            expect(dimmerDoc.showBasicDimmer).to.equal(false);
            done();
        });
        it('should have showLoadingDimmer false', (done) => {
            expect(dimmerDoc.showLoadingDimmer).to.equal(false);
            done();
        });
        it('should have showContentDimmer false', (done) => {
            expect(dimmerDoc.showContentDimmer).to.equal(false);
            done();
        });
        it('should have showAllParagraphsDimmer false', (done) => {
            expect(dimmerDoc.showAllParagraphsDimmer).to.equal(false);
            done();
        });
        it('should have showHoverDimmer false', (done) => {
            expect(dimmerDoc.showHoverDimmer).to.equal(false);
            done();
        });
        it('should have hoverDimmerOptions', (done) => {
            const options = { on: 'hover' };
            expect(dimmerDoc.hoverDimmerOptions).to.deep.equal(options);
            done();
        });
    });

    describe('when requested to changeDimmerVisibility', () => {
        it('should change property status', () => {
            dimmerDoc.changeDimmerVisibility('showBasicDimmer');
            expect(dimmerDoc.showBasicDimmer).to.equal(true);
        });
    });
});
