import Vue from 'vue';
import DropdownDoc from '@/components/DropdownDoc';

let dropdownDoc;

describe('DropdownDoc', () => {
    beforeEach((done) => {
        dropdownDoc = new Vue(DropdownDoc);
        done();
    });

    describe('when constructed', () => {
        it('should have dropdownOptions with default options', (done) => {
            expect(dropdownDoc.dropdownOptions).to.equal(dropdownDoc.defaultOptions);
            done();
        });
        it('should have selectedValue with first element of defaultOptions', (done) => {
            expect(dropdownDoc.selectedValue).to.equal(dropdownDoc.defaultOptions[0]);
            done();
        });
        it('should have iconProperty with iconClass', (done) => {
            expect(dropdownDoc.iconProperty).to.equal('iconClass');
            done();
        });
        it('should have defaultOptions', (done) => {
            const expectedOptions = [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m mobile phone 2' },
                { iconClass: 'whatsapp', value: 3, text: 'Hello, I\'m whats phone 3' },
            ];
            expect(dropdownDoc.defaultOptions).to.deep.equal(expectedOptions);
            done();
        });
        it('should have anotherOptions', (done) => {
            const expectedOptions = [
                { iconClass: 'volume control phone', value: 1, text: 'Hello, I\'m THE NEW normal phone 1' },
                { iconClass: 'mobile', value: 2, text: 'Hello, I\'m THE NEW mobile phone 2' },
                { iconClass: 'whatsapp', value: 3, text: 'Hello, I\'m THE NEW whats phone 3' },
            ];
            expect(dropdownDoc.anotherOptions).to.deep.equal(expectedOptions);
            done();
        });
        it('should have optionsWithoutText', (done) => {
            const expectedOptions = [
                { iconClass: 'volume control phone', value: 1 },
                { iconClass: 'mobile', value: 2 },
                { iconClass: 'whatsapp', value: 3 },
            ];
            expect(dropdownDoc.optionsWithoutText).to.deep.equal(expectedOptions);
            done();
        });
    });

    describe('when requested to changeOptions', () => {
        beforeEach((done) => {
            dropdownDoc.iconProperty = '';
            done();
        });
        it('should change dropdownOptions with anotherOptions if actual options is defaultOptions', () => {
            dropdownDoc.dropdownOptions = dropdownDoc.defaultOptions;
            dropdownDoc.changeOptions();
            expect(dropdownDoc.dropdownOptions).to.deep.equal(dropdownDoc.anotherOptions);
        });
        it('should change dropdownOptions with defaultOptions if actual options is anotherOptions', () => {
            dropdownDoc.dropdownOptions = dropdownDoc.anotherOptions;
            dropdownDoc.changeOptions();
            expect(dropdownDoc.dropdownOptions).to.deep.equal(dropdownDoc.defaultOptions);
        });
        it('should restore iconProperty', (done) => {
            dropdownDoc.changeOptions();
            expect(dropdownDoc.iconProperty).to.equal('iconClass');
            done();
        });
    });

    describe('when requested to changeToOnlyIcons', () => {
        beforeEach((done) => {
            dropdownDoc.iconProperty = '';
            dropdownDoc.changeToOnlyIcons();
            done();
        });
        it('should change dropdownOptions with optionWithoutText', () => {
            expect(dropdownDoc.dropdownOptions).to.deep.equal(dropdownDoc.optionsWithoutText);
        });
        it('should restore iconProperty', (done) => {
            expect(dropdownDoc.iconProperty).to.equal('iconClass');
            done();
        });
    });

    describe('when requested to changeToOnlyText', () => {
        it('should change dropdownOptions with defaultOptions', () => {
            dropdownDoc.dropdownOptions = dropdownDoc.anotherOptions;
            dropdownDoc.changeToOnlyText();
            expect(dropdownDoc.dropdownOptions).to.deep.equal(dropdownDoc.defaultOptions);
        });
        it('should change iconProperty with empty string', () => {
            dropdownDoc.changeToOnlyText();
            expect(dropdownDoc.iconProperty).to.equal('');
        });
    });

    describe('when requested to changeToIconsAndText', () => {
        beforeEach((done) => {
            dropdownDoc.iconProperty = '';
            dropdownDoc.dropdownOptions = dropdownDoc.anotherOptions;
            dropdownDoc.changeToIconsAndText();
            done();
        });
        it('should change dropdownOptions with defaultOptions', () => {
            expect(dropdownDoc.dropdownOptions).to.deep.equal(dropdownDoc.defaultOptions);
        });
        it('should restore iconProperty', (done) => {
            expect(dropdownDoc.iconProperty).to.equal('iconClass');
            done();
        });
    });
});
