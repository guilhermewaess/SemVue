/* eslint-disable */
const jqueryMock = {};

jqueryMock.modal = sinon.stub().returns(jqueryMock);
jqueryMock.accordion = sinon.stub().returns(jqueryMock);

jqueryMock.reset = () => {
    jqueryMock.modal.reset();
}

module.exports = sinon.stub().returns(jqueryMock);
