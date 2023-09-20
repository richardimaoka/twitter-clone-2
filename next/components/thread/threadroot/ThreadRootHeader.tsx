import Image from "next/image";
import styles from "./ThreadRootHeader.module.css";
import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment ThreadRootHeader on Tweet {
    userName
    userId
    profilePicture
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ThreadRootHeader = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  return (
    <div className={styles.header}>
      <div>
        <Image
          className={styles.profilepic}
          src={fragment.profilePicture ? fragment.profilePicture : noProfilePic}
          width={40}
          height={40}
          alt={"user profile pic"}
        />
      </div>
      <div>
        <div className={styles.username}>{fragment.userName}</div>
        <div className={styles.userid}>&#064;{fragment.userId}</div>
      </div>
    </div>
  );
};
