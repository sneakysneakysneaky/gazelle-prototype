import UserClasses from 'UserClasses/collections/UserClasses'

Meteor.publish('userClasses', function () {
    return UserClasses.find();
});