
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../gqlgen/graph/schema.graphqls",
  documents: "\"app/**/*.tsx\"",
  generates: {
    "libs/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
