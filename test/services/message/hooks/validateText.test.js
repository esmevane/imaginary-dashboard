'use strict';

const assert = require('assert');
const validateText = require('../../../../src/services/message/hooks/validateText.js');

describe('message validateText hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    validateText()(mockHook);

    assert.ok(mockHook.validateText);
  });
});
