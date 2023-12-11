import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-perechislenie-тест', 'Unit | Serializer | i-i-s-perechislenie-тест', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-perechislenie-тест',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-perechislenie-перечисление',

    'model:i-i-s-perechislenie-тест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
