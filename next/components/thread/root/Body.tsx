import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment Body on Tweet {
    body
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function Body(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return <div>{fragment.body}</div>;
}
