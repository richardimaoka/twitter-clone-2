import { Scalars } from "./libs/gql/graphql";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../gqlgen/graph/schema.graphqls",
  documents: ["app/**/*.tsx"],
  generates: {
    "libs/gql/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: `export type TimeString = string & { /*this type is defined in codegen.ts*/ __timeStringBrand: any  };`,
          },
        },
      ],
      config: {
        // avoidOptionals: true,
        nonOptionalTypename: true, //__typename should always exist
        enumsAsTypes: true,
        dedupeFragments: true, //GraphQL】 There can be only one fragment named XxxFragment error - https://zenn.dev/bicstone/articles/graphql-dedupe-fragments, https://github.com/dotansimha/graphql-code-generator/issues/8670
        scalars: {
          Time: "TimeString",
        },
      },
    },
    "libs/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
  watch: ["app/**/*.tsx", "../gqlgen/graph/schema.graphqls"],
  hooks: { afterOneFileWrite: ["npx prettier --write"] },
};

export default config;
