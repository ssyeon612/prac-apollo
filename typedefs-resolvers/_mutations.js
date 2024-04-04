const { gql } = require("apollo-server");

const typeDefs = gql`
    type Mutation {
        deleteEquiment(id: String): Equiment
    }
`;

module.exports = typeDefs;
