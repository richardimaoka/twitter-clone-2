import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment Reply on Tweet {
    id
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function Reply(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return <div>reply</div>;
}
