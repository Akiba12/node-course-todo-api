const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result,err) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Problems with deleting todos');
    // });
    // -----------------------------
    db.collection('Users').deleteMany({name: 'Sam'}).then((result) => {
        console.log(result);
    });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result,err) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("The ToDos wasn't deleted");
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // ------------------------------
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("58dc418f49a61405f2106238")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});
