import DS from 'ember-data';
import User from './user';


export default User.extend({

  ues: DS.hasMany('ue')
});
