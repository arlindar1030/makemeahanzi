// Simple helpers for interacting with reactive variables.

ReactiveVar.prototype.pop = function() {
  const value = this.get();
  value.pop();
  this.set(value);
}

ReactiveVar.prototype.push = function(element) {
  const value = this.get();
  value.push(element);
  this.set(value);
}

// Our hacky implementation of a routing table. Iron Router is too slow...

Session.setDefault('route', 'search');

Handlebars.registerHelper('route', () => Session.get('route'));
