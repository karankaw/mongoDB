//https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/
/**
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
**/

//https://stackoverflow.com/questions/36792649/whats-the-difference-between-insert-insertone-and-insertmany-method

//db.<collection>.insertMany  // Array of docs, each docs get separately inserted you pass 1 Array having 4 Docs, U get 4 Docs in Collection
//db.getCollection('collection').insertOne   // just 1 Doc , you pass  just 1 Doc having 4 Arrays, It will still be 1 Doc

db.createCollection('students')

db.students.insertMany(
[
{
  "_id": 1,
  "alias": [ "The American Cincinnatus", "The American Fabius" ],
  "mobile": "555-555-5555",
  "nmae": { "first" : "george", "last" : "washington" }
},

{
  "_id": 2,
  "alias": [ "My dearest friend" ],
  "mobile": "222-222-2222",
  "nmae": { "first" : "abigail", "last" : "adams" }
},

{
  "_id": 3,
  "alias": [ "Amazing grace" ],
  "mobile": "111-111-1111",
  "nmae": { "first" : "grace", "last" : "hopper" }
}
]
)




