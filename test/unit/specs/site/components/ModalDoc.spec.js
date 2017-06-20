import Vue from 'vue';
import ModalDoc from '@/components/ModalDoc';

let modalDoc;

describe('ModalDoc', () => {
    beforeEach((done) => {
        modalDoc = new Vue(ModalDoc);
        done();
    });

    describe('when constructed', () => {
        it('should have showBasicModal false', (done) => {
            expect(modalDoc.showBasicModal).to.equal(false);
            done();
        });
        it('should have showLongModal false', (done) => {
            expect(modalDoc.showLongModal).to.equal(false);
            done();
        });
    });

    describe('when requested to changeModalStatus', () => {
        it('should change property status', () => {
            modalDoc.changeModalStatus('showBasicModal', true);
            expect(modalDoc.showBasicModal).to.equal(true);
        });
    });
});
