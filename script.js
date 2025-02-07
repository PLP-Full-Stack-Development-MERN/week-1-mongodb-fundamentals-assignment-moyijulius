


//Database and Collection Creation

//use library;

//inserting Five books to a collection called books
db.books.insertMany([
 {
 title: "Sun set",
 author: "Alex",
puplishedYear: 1999,
genre: "Classic Fiction",
ISBN: "7889993039"
},
{
title: "Upcoming",
author: "Julius",
puplishedYear: 2002,
genre: "Old Version",
ISBN: "7876555233"
},
{
title: "Last Night",
author: "James",
puplishedYear: 1980,
genre: "New Fiction",
ISBN: "8888899765"
 },
 {
title: "Old Days",
 author: "Ruben Yarak",
 puplishedYear:1991,
genre: "simple Edition",
ISBN: "7888999786"
},
{
title: "Fox and cock",
author: "Joyce Aliza",
puplishedYear: 2000,
genre: "Clean version",
ISBN: "76665655345"
}]); // insert Five books 


db.books.find(); //retrieving all books in the collection

db.books.findOne({author:"Julius"});// query based on a specific author

db.books.find({puplishedYear:{$gte:2000}});//finding books that was published after 2000

db.books.updateOne({title:"Fox and cock"},{$set:{puplishedYear:2023}});//Update the puplishedyear of specific books

db.books.updateMany({},{$set:{rating:5}});//adding a field called rating and assigning default value

db.books.deleteOne({ISBN:"7888999786"});//deleting a book by its ISBN

db.boooks.deleteMany({genre:"Classic Fiction"});// removing all books of a certain genre

//creating a data model for ecommerce platform

//use ecommerce// creating ecommerce database


//create collections
//starting with users
db.users.insertOne({
    "name": "Julius Moyi",
    "email": "julius@gmail.com",
    "password": "hashed_password",
    "addresses": [ //embed addresses
        {
            "street": "100 Main Street",
            "city": "Nairobi",
            "zip": "20001",
            "country": "Kenya"
        }
    ],
    "createdAt": new Date()
})

//create products collections

db.products.insertOne({
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with USB receiver",
    "price": 50,
    "category": "Electronics",
    "stock": 30,
    "createdAt": new Date()
})

//create Orders collections

db.orders.insertOne({
    "userId": ObjectId("67a5d9f47ffbdd2e9e4d794a"),  // Replace with actual user ID
    "products": [
        {
            "productId": ObjectId("67a5dc467ffbdd2e9e4d794b"),  // Replace with actual product ID
            "name": "Wireless Mouse",
            "price": 50,
            "quantity": 2
        }
    ],
    "totalAmount": 100,
    "status": "Pending",
    "orderDate": new Date()
})

//Aggregation Pippline

//Aggregation to find total number of books per genre
db.books.aggregate([
     { 
        $group: { _id: "$genre", totalBooks: { $sum: 1 } 
        }
         }
] );

//average puplishedYear of all books

db.books.aggregate([
    {
        $group: {
            _id: null,// no grouping 
            avgPublishedYear: { $avg: "$publishedYear" }
        }
    }
])


//Identifying to rated-book

db.books.aggregate([
    {
        $sort: { rating: -1 }  // highest first
    },
    {
        $limit: 1  // Get only the top-rated book
    }
])

//Creating Index
db.books.createIndex({ author: 1 }); //index is in ascending order

//Importance of Creating index

//1. With an index, MongoDB directly finds relevant documents, reducing query time significantly.
//2.Queries using sort() on indexed fields are much faster. example db.books.find().sort({ author: 1 }) 
