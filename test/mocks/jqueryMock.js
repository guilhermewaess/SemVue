/* eslint-disable */
const components = {
    get modal() { return sinon.stub().returns(this) },
};

module.exports = sinon.stub().returns(components);
