import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetBody on Tweet {
    body
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function TweetBody(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return <div>{fragment.body}</div>;
}
