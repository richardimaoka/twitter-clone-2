import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment ReplyContentBody on Tweet {
    body
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function ContentBody(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return <div>{fragment.body}</div>;
}
