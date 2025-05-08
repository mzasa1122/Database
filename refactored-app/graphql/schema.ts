import gql from "graphql-tag";

const typeDefs = gql`
  type Weather {
    zip: String!
    weather: String!
    tempC: String!
    tempF: String!
    friends: [String!]!
  }

  type Query {
    # query by zip code
    weather(zip: String!): Weather
  }

  type Mutation {
    # “data” is the WeatherInput object we pass in
    weather(data: WeatherInput!): Weather
  }

  input WeatherInput {
    zip: String!
    weather: String!
    tempC: String!
    tempF: String!
    friends: [String!]!
  }
`;

export default typeDefs;