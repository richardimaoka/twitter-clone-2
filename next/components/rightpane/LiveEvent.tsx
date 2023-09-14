import Image from "next/image";

export function LiveEvent() {
  return (
    <div>
      <div>
        <div>Event</div>
        <div>New Yrok Fashion Week</div>
      </div>
      <div>
        <Image src="/images/nyfw.jpg" width={300} height={200} alt={"nyfw"} />
      </div>
    </div>
  );
}
