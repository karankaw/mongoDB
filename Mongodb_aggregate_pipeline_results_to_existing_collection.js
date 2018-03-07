// use this https://stackoverflow.com/questions/28741457/how-do-i-append-mongo-db-aggregation-results-to-an-existing-collection
​
for (var i = 0; i <15; i++) {
 db.evenProductSumClients.insert(db.runCommand(
 {
   aggregate: "allLatestUniqueClients",
   pipeline: 
   [
     { $match : { productSum : i } },
     { $sample: { size: 2000 } },
   ]
 }).result)
}