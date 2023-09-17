import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ContentHeader } from "./ContentHeader";
import { ContentBody } from "./ContentBody";
import { Reactions } from "../reactions/Reactions";

const fragmentDefinition = graphql(`
  fragment Reply on Tweet {
    ...ReplyContentHeader
    ...ReplyContentBody
    ...Reactions
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function Reply(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div>
      <div>LeftColumn</div>
      <div>
        {/*right column*/}
        <ContentHeader fragment={fragment} />
        <ContentBody fragment={fragment} />
        <Reactions fragment={fragment} />
      </div>
    </div>
  );
}
