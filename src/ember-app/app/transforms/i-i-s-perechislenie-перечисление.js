import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import перечислениеEnum from '../enums/i-i-s-perechislenie-перечисление';

export default FlexberryEnum.extend({
  enum: перечислениеEnum,
  sourceType: 'IIS.Perechislenie.перечисление'
});
