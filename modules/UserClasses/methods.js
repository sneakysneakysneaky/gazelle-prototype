import UserClasses from 'UserClasses/collections/UserClasses'

Meteor.methods({
    'UserClasses.add': function(userClass) {
        check(userClass.title, String);
        UserClasses.insert({
            title: userClass.title
        })
    }
});