/* eslint-disable */
const jqueryMock = {};

jqueryMock.accordion = sinon.stub().returns(jqueryMock);
jqueryMock.dimmer = sinon.stub().returns(jqueryMock);
jqueryMock.dropdown = sinon.stub().returns(jqueryMock);
jqueryMock.modal = sinon.stub().returns(jqueryMock);
jqueryMock.popup = sinon.stub().returns(jqueryMock);
jqueryMock.rating = sinon.stub().returns(jqueryMock);

jqueryMock.reset = () => {
    jqueryMock.accordion.reset();
    jqueryMock.dimmer.reset();
    jqueryMock.dropdown.reset();
    jqueryMock.modal.reset();
    jqueryMock.popup.reset();
    jqueryMock.rating.reset();
}

module.exports = sinon.stub().returns(jqueryMock);
