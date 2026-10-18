import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image
        alt="Page not found | 404"
        width={500}
        height={500}
        src="/imgs/p-404.png"
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
