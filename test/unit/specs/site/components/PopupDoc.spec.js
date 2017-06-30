import Vue from 'vue';
import PopupDoc from '@/components/PopupDoc';

let popupDoc;

describe('PopupDoc', () => {
    beforeEach((done) => {
        popupDoc = new Vue(PopupDoc);
        done();
    });

    describe('when constructed', () => {
        it('should have position top left', (done) => {
            expect(popupDoc.position).to.deep.equal({ value: 'top left', text: 'Top Left' });
            done();
        });
        it('should have trigger click', (done) => {
            expect(popupDoc.trigger).to.deep.equal({ value: 'click', text: 'Click' });
            done();
        });
        it('should have transition horizontal flip', (done) => {
            expect(popupDoc.transition).to.deep.equal({ value: 'horizontal flip', text: 'Horizontal Flip' });
            done();
        });
        it('should have positions', (done) => {
            const expectedPositions = [
                { value: 'top left', text: 'Top Left' },
                { value: 'top center', text: 'Top Center' },
                { value: 'top right', text: 'Top Right' },
                { value: 'bottom left', text: 'Bottom Left' },
                { value: 'bottom center', text: 'Bottom Center' },
                { value: 'bottom right', text: 'Bottom Right' },
                { value: 'right center', text: 'Right Center' },
                { value: 'left center', text: 'Left Center' },
            ];
            expect(popupDoc.positions).to.deep.equal(expectedPositions);
            done();
        });
        it('should have transitions', (done) => {
            const expectedTransitions = [
                { value: 'horizontal flip', text: 'Horizontal Flip' },
                { value: 'vertical flip', text: 'Vertical Flip' },
                { value: 'fade up', text: 'Fade Up' },
                { value: 'fade', text: 'Fade' },
                { value: 'scale', text: 'Scale' },
            ];
            expect(popupDoc.transitions).to.deep.equal(expectedTransitions);
            done();
        });
        it('should have triggers', (done) => {
            const expectedTriggers = [
                { value: 'click', text: 'Click' },
                { value: 'hover', text: 'Hover' },
            ];
            expect(popupDoc.triggers).to.deep.equal(expectedTriggers);
            done();
        });
    });

    describe('when requested popupOptions', () => {
        it('should return a computed options', (done) => {
            const expectedOptions = {
                closable: false,
                duration: 500,
                position: popupDoc.position.value,
                transition: popupDoc.transition.value,
            };
            expect(popupDoc.popupOptions).to.deep.equal(expectedOptions);
            done();
        });
    });
});
