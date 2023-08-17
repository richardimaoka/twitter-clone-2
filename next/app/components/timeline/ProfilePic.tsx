import Image from "next/image";
import styles from "./style.module.css";
import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TimelineProfilePicFragment on Tweet {
    profilePicture
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ProfilePic = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  return (
    <div>
      <Image
        className={styles.profilepic}
        src={fragment.profilePicture ? fragment.profilePicture : noProfilePic}
        width={40}
        height={40}
        alt={"user profile pic"}
      />
    </div>
  );
};
