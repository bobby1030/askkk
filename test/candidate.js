// Generated by LiveScript 1.2.0
var assert, ref$, ask, firebase, keys;
assert = require('assert');
ref$ = require('./askkk'), ask = ref$.ask, firebase = ref$.firebase;
keys = require('prelude-ls').keys;
describe('Candidate', function(){
  return describe('get', function(){
    var x$;
    x$ = it;
    x$('should get candidate info for given id.', function(done){
      return ask.getCandidate("-JFxrKQo3Qg19zsW73b1", function(data){
        assert.equal(data["state"], 'join');
        assert.equal(data["partyEng"], 'NONE');
        return done();
      });
    });
    x$('should get a list of all candidate info when id is null', function(done){
      return ask.getCandidate(null, function(data){
        assert.equal(keys(data).length, 5);
        assert.equal(data[0].name, '柯文哲');
        assert.equal(data[1].name, '連勝文');
        return done();
      });
    });
    return x$;
  });
});