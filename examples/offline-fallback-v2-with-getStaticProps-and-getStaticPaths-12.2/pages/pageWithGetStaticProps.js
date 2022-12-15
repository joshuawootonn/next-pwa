import Link from "next/link";

export function getStaticProps() {
  return {
    props: {
      page: "PageWithGetStaticProps",
      linkTo: "staticPage",
    },
  };
}

export default function PageWithGetStaticProps({ page, linkTo }) {
  return (
    <div>
      <h1> {page}</h1>
      <Link href={linkTo}>{linkTo}</Link>
    </div>
  );
}
