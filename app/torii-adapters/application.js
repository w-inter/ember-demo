// app/torii-adapters/application.js
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
    firebaseApp: Ember.inject.service()
});
