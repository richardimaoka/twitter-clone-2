import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ProfilePicture } from "../profile/ProfilePicture";

const fragmentDefinition = graphql(`
  fragment ReplyForm on User {
    userName
    ...ProfilePicture
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function ReplyForm(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div>
      <ProfilePicture fragment={fragment} />
      <form>
        <input type="text" />
        <button type="button">返信</button>
      </form>
    </div>
  );
}
