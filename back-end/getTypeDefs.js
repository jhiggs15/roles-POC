import fs from 'fs'
import path from 'path'

export const getTypeDefs = () => {
    const schemaPath = "./"
    const schemaFiles = ["schema"]
    const schemaExtension = [".graphql"]

    let schemas = []
    for(let schemaFile of schemaFiles) {
        schemas.push(fs.readFileSync(path.resolve(schemaPath, schemaFile + schemaExtension)).toString())
    }

    return schemas
}