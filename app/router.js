import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});


Router.map(function() {
    this.mount('thingy-frontend', { as: 'thingy', path: 'thingy' });
});

export default Router;
