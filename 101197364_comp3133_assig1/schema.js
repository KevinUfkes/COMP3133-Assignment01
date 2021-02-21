const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     id: ID!
     name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
   }

   type User {
       id: ID!
       username: String!
       password: String!
       email: String!
   }

   type Booking {
       id: ID!
       hotel_id: String!
       booking_date: String!
       booking_start: String!
       booking_end: String!
       user_id: String!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByID(id: ID!): Hotel
     getHotelByCity(city: String!): [Hotel]

     getUser: [User]
     getUserByID(id: ID!): User

     getBooking: [Booking]
     getBookingByID(id: ID!): Booking
   }

   type Mutation {
     addHotel(name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel

     updateHotel(id: String!,
        name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel

     deleteHotel(id: ID!): Hotel

     addUser(username: String!
        password: String!
        email: String!): User

    addBooking(hotel_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: String!): Booking

   }
`