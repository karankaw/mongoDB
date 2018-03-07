
//https://stackoverflow.com/questions/4582354/mongodb-query-to-select-records-having-a-given-key

db.getCollection('allLatestUniqueClients').find(
{
'Saving Account' : {$exists: 1}
}
)

How to check of 