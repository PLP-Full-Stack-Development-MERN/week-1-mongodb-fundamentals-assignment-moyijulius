
## Prerequisites
Ensure you have MongoDB installed on your system.

## Setting Up the Database
1. Open your terminal or command prompt.
2. Start the MongoDB service:
   ```sh
   mongod
   ```
3. Open another terminal and start the MongoDB shell:
   ```sh
   mongo
   ```

## Creating the Library Database
1. Switch to or create the `library` database:
   ```sh
   use library
   ```
2. Insert books into the `books` collection:
   ```sh
   db.books.insertMany([
       { title: "Sun set", author: "Alex", publishedYear: 1999, genre: "Classic Fiction", ISBN: "7889993039" },
       { title: "Upcoming", author: "Julius", publishedYear: 2002, genre: "Old Version", ISBN: "7876555233" },
       { title: "Last Night", author: "James", publishedYear: 1980, genre: "New Fiction", ISBN: "8888899765" },
       { title: "Old Days", author: "Ruben Yarak", publishedYear: 1991, genre: "Simple Edition", ISBN: "7888999786" },
       { title: "Fox and Cock", author: "Joyce Aliza", publishedYear: 2000, genre: "Clean Version", ISBN: "76665655345" }
   ]);
   ```

## Querying the Database
- Retrieve all books:
  ```sh
  db.books.find()
  ```
- Find a book by author:
  ```sh
  db.books.findOne({ author: "Julius" })
  ```
- Find books published after 2000:
  ```sh
  db.books.find({ publishedYear: { $gte: 2000 } })
  ```
- Update the published year of a book:
  ```sh
  db.books.updateOne({ title: "Fox and Cock" }, { $set: { publishedYear: 2023 } })
  ```
- Add a rating field to all books:
  ```sh
  db.books.updateMany({}, { $set: { rating: 5 } })
  ```
- Delete a book by ISBN:
  ```sh
  db.books.deleteOne({ ISBN: "7888999786" })
  ```
- Remove all books of a certain genre:
  ```sh
  db.books.deleteMany({ genre: "Classic Fiction" })
  ```

## Creating an E-Commerce Database
1. Switch to the `ecommerce` database:
   ```sh
   use ecommerce
   ```
2. Insert a user into the `users` collection:
   ```sh
   db.users.insertOne({
       name: "Julius Moyi",
       email: "julius@gmail.com",
       password: "hashed_password",
       addresses: [{ street: "100 Main Street", city: "Nairobi", zip: "20001", country: "Kenya" }],
       createdAt: new Date()
   })
   ```
3. Insert a product into the `products` collection:
   ```sh
   db.products.insertOne({
       name: "Wireless Mouse",
       description: "Ergonomic wireless mouse with USB receiver",
       price: 50,
       category: "Electronics",
       stock: 30,
       createdAt: new Date()
   })
   ```
4. Insert an order into the `orders` collection:
   ```sh
   db.orders.insertOne({
       userId: ObjectId("67a5d9f47ffbdd2e9e4d794a"),
       products: [{
           productId: ObjectId("67a5dc467ffbdd2e9e4d794b"),
           name: "Wireless Mouse",
           price: 50,
           quantity: 2
       }],
       totalAmount: 100,
       status: "Pending",
       orderDate: new Date()
   })
   ```

## Aggregation Queries
- Find the total number of books per genre:
  ```sh
  db.books.aggregate([
      { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
  ])
  ```
- Calculate the average published year of all books:
  ```sh
  db.books.aggregate([
      { $group: { _id: null, avgPublishedYear: { $avg: "$publishedYear" } } }
  ])
  ```
- Identify the top-rated book:
  ```sh
  db.books.aggregate([
      { $sort: { rating: -1 } },
      { $limit: 1 }
  ])
  ```

## Indexing
- Create an index on the `author` field to optimize query performance:
  ```sh
  db.books.createIndex({ author: 1 })
  ```

### Benefits of Indexing
1. Significantly reduces query time by allowing MongoDB to find documents faster.
2. Improves the performance of sorting operations.
3. Enhances search efficiency, especially on large datasets.

## Conclusion
This guide provides a step-by-step approach to setting up and running a MongoDB database for both a library and an e-commerce platform. 

