const { gql } = require("graphql-tag");

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Query {
    getProducts: [Product]
  }

  type Mutation {
    addProduct(name: String!, description: String!, price: Float!): Product
  }
`;
