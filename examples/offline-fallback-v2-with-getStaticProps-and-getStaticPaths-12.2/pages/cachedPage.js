import Link from "next/link";

export default function CachedPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>cached page</h1>
      <Link href={"/staticPage"}>staticPage</Link>
      <Link href={"/pageWithGetStaticProps"}>pageWithGetStaticProps</Link>
      <Link href={"/pageWithGetStaticPaths1"}>pageWithGetStaticPaths1</Link>
      <Link href={"/pageWithGetStaticPaths2"}>pageWithGetStaticPaths2</Link>
    </div>
  );
}
