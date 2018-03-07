db.allLatestUniqueClients.find({productSum: 12})
db.allLatestUniqueClients.find({productSum: {$gt: 10}}).sort({productSum:-1})