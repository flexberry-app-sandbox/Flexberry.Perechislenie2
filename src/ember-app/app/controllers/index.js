import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.perechislenie.caption'),
          title: i18n.t('forms.application.sitemap.perechislenie.title'),
          children: [{
            link: 'i-i-s-perechislenie-тест-l',
            caption: i18n.t('forms.application.sitemap.perechislenie.i-i-s-perechislenie-тест-l.caption'),
            title: i18n.t('forms.application.sitemap.perechislenie.i-i-s-perechislenie-тест-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})