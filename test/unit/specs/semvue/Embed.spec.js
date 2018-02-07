/* eslint disable no-use-before-define: 0 */
import Vue from 'vue';
import { SemVueEmbed } from '@/semvue';

let embed;
let validProps;
const EmbedConstructor = Vue.extend(SemVueEmbed);

const helper = {
    createProgress() {
        embed = new EmbedConstructor({ propsData: validProps }).$mount();
    },
};

describe('Progress', () => {
    beforeEach((done) => {
        $().reset();
        validProps = { id: 'id', dataUrl: 'url' };
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
            const invalidProps = { dataUrl: 'url' };
            new EmbedConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "id"'); // eslint-disable-line
            done();
        });
        it('should throw exception when doesnt have dataUrl prop', (done) => {
            const invalidProps = { id: 'id' };
            new EmbedConstructor({ propsData: invalidProps }).$mount();
            expect(console.error).to.have.been.calledWithMatch('[Vue warn]: Missing required prop: "dataUrl"'); // eslint-disable-line
            done();
        });
        it('should have dataPlaceHolder as string empty', (done) => {
            expect(embed.dataPlaceholder).to.equal('');
            done();
        });
        it('should have autoplay false', (done) => {
            expect(embed.autoplay).to.equal(false);
            done();
        });
        it('should have customClass as string empty', (done) => {
            expect(embed.customClass).to.equal('');
            done();
        });
        it('should have options as object empty', (done) => {
            expect(embed.options).to.deep.equal({});
            done();
        });
    });

    describe('when mounted', () => {
        beforeEach((done) => {
            embed = new EmbedConstructor({ propsData: validProps });
            sinon.spy(embed, 'startEmbed');
            embed.$mount();
            done();
        });
        afterEach((done) => {
            embed.startEmbed.restore();
            done();
        });
        it('should startEmbed', (done) => {
            embed.$nextTick(() => {
                expect(embed.startEmbed).to.have.callCount(1);
                done();
            });
        });
    });

    describe('when requested to start embed', () => {
        beforeEach((done) => {
            $().reset();
            embed.startEmbed();
            done();
        });
        it('should configure embed with autoplay', (done) => {
            embed.$nextTick(() => {
                const configurationCall = $().embed.args[0][0];
                expect(configurationCall.autoplay).to.equal(embed.autoplay);
                done();
            });
        });
        it('should call jquery selector with id', (done) => {
            embed.$nextTick(() => {
                expect($).to.have.been.calledWith(`#${validProps.id}`);
                done();
            });
        });
        describe('and have options sent on props', () => {
            beforeEach((done) => {
                $().reset();
                validProps.options = {
                    optionToOverride: 'abc',
                };
                embed = new EmbedConstructor({ propsData: validProps }).$mount();

                embed.startEmbed();
                done();
            });
            it('should configure embed with the new options', (done) => {
                embed.$nextTick(() => {
                    const configurationCall = $().embed.args[0][0];
                    expect(configurationCall.optionToOverride).to.equal('abc');
                    done();
                });
            });
        });
    });


    describe('when dateUrl is changed', () => {
        beforeEach((done) => {
            sinon.spy(embed, 'startEmbed');

            embed.dataUrl = 'newUrl';
            done();
        });
        afterEach((done) => {
            embed.startEmbed.restore();
            done();
        });
        it('should startEmbed', (done) => {
            embed.$nextTick(() => {
                expect(embed.startEmbed).to.have.callCount(1);
                done();
            });
        });
    });
});
