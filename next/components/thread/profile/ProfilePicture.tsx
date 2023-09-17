import { FragmentType, graphql, useFragment } from "@/libs/gql";
import Image from "next/image";
import styles from "./Picture.module.css";

const fragmentDefinition = graphql(`
  fragment ProfilePicture on User {
    profilePicture
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function ProfilePicture(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  return (
    <Image
      className={styles.profilepic}
      src={fragment.profilePicture ? fragment.profilePicture : noProfilePic}
      width={40}
      height={40}
      alt={"user profile pic"}
    />
  );
}
