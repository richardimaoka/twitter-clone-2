"use client";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ProfilePicture } from "../profile/ProfilePicture";
import styles from "./ReplyForm.module.css";
import { useState } from "react";

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
  const [value, setValue] = useState("");

  return (
    <div className={styles.component}>
      <div className={styles.picture}>
        <ProfilePicture fragment={fragment} />
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="返信をポスト"
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <button
          className={styles.button}
          disabled={value.length === 0}
          type="button"
        >
          返信
        </button>
      </form>
    </div>
  );
}
