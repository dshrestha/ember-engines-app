import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    keyForAttribute: function(attr) {
        return Ember.String.underscore(attr);
    },
    payloadKeyFromModelName: function(modelName) {
        return Ember.String.underscore(modelName);
    }
});
