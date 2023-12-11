import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  _11: DS.attr('i-i-s-perechislenie-перечисление')
});

export let ValidationRules = {
  _11: {
    descriptionKey: 'models.i-i-s-perechislenie-тест.validations._11.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('тестE', 'i-i-s-perechislenie-тест', {
    _11: attr('_11', { index: 0 })
  });

  modelClass.defineProjection('тестL', 'i-i-s-perechislenie-тест', {
    _11: attr('_11', { index: 0 })
  });
};
