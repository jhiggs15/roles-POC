import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server"
import neo4j from "neo4j-driver"
import fs from 'fs'
import path from 'path'
const typeDefinitions = fs.readFileSync(path.join("./schema.graphql")).toString()

const driver = neo4j.driver(
    "bolt://localhost:7687",
    neo4j.auth.basic("jhiggs", "123"),
);

const neoSchema = await new Neo4jGraphQL({ 
    typeDefs : typeDefinitions, 
    driver ,
}).getSchema();

const server = new ApolloServer({ 
    schema: neoSchema,
    cache: "bounded",
    csrfPrevention: true,
    formatError: (error) => error, 
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });



