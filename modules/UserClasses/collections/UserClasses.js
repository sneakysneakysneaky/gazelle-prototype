//TODO Should the schema be exported?

const schema = new SimpleSchema({
    title: {
        type: String
    }
});

const UserClasses = new Meteor.Collection('userClasses');

export default UserClasses;