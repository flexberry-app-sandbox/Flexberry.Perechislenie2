import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-perechislenie-тест-l');
  this.route('i-i-s-perechislenie-тест-e',
  { path: 'i-i-s-perechislenie-тест-e/:id' });
  this.route('i-i-s-perechislenie-тест-e.new',
  { path: 'i-i-s-perechislenie-тест-e/new' });
});

export default Router;
