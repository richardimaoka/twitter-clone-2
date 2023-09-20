import { FragmentType, graphql, useFragment } from "@/libs/gql";
import Image from "next/image";
import styles from "./Picture.module.css";

const fragmentDefinition = graphql(`
  fragment Picture on Tweet {
    picturePath
    pictureWidth
    pictureHeight
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function Picture(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  if (
    !fragment.picturePath ||
    !fragment.pictureWidth ||
    !fragment.pictureHeight
  )
    return <></>;

  return (
    <div>
      <Image
        className={styles.tweetpic}
        src={fragment.picturePath}
        width={fragment.pictureWidth}
        height={fragment.pictureHeight}
        alt={"tweet pic"}
      />
    </div>
  );
}
