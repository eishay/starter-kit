This clone demonstrates a problem I have when having prototype.js loaded in the same page of ember.
Ember's initialization flow is distrupted and the internal Ember objects (Application, View etc) are undefined. 

    Uncaught TypeError: Object #<Object> has no method 'each'
    collectprototype.js:864
    initMixinember-0.9.5.js:5927
    Mixin.createember-0.9.5.js:6175
    getember-0.9.5.js:6394
    (anonymous function)

With ember.min:

    Enumerable.collect() at prototype.js:485
    n() at ember-0.9.5.min.js:10
    b.create() at ember-0.9.5.min.js:10
    (anonymous function)() at ember-0.9.5.min.js:10
    (anonymous function)() at ember-0.9.5.min.js:10
