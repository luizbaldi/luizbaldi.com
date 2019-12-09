const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql')

const schema = buildASTSchema(gql`
  type Music {
    id: ID,
    name: String,
    artist: String,
    duration: Int
  }

  type Query {
    musics: [Music],
    music(id: ID!): Music
  }

  type Mutation {
    addMusic(
      id: ID!,
      name: String!,
      artist: String!,
      duration: Int
    ): Music
  }
`)

module.exports = schema
