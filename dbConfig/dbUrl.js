//const dbURL = 'https://jsontestmartin.s3.eu-north-1.amazonaws.com/tullinge30sept.json'

//const dbURL = 'http://35.158.216.149:4000/api/kalender'
//const dbURL = 'http://3.120.247.104:4000/'
// const dbURL = 'https://uk934jff46.execute-api.eu-central-1.amazonaws.com/forsta'

//svenska kyrkan Martin Lindahl
//const dbURL = 'https://api.svenskakyrkan.se/calendarsearch/v4/SearchByParent?orgId=7681&apikey=b085d57a-4f3d-4742-933f-ce94a840c203	'

//svenska kyrkan Martin Lindahl filtrerad på long-lat
//const dbURL = 'https://api.svenskakyrkan.se/calendarsearch/v4/SearchBySpatial()?longitude=17.882806&latitude=59.212262&radius=3000&$top=100&apikey=b085d57a-4f3d-4742-933f-ce94a840c203'
const dbURL = 'https://api.svenskakyrkan.se/calendarsearch/v4/SearchBySpatial()?longitude=17.882806&latitude=59.212262&radius=3000&apikey=b085d57a-4f3d-4742-933f-ce94a840c203&$orderby=StartTime asc&$filter=Deleted eq false and StartTime gt 2020-03-26&$top=100'

module.exports = dbURL;