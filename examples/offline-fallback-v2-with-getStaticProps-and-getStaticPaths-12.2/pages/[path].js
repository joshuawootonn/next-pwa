import Link from "next/link";

export function getStaticPaths() {
  return {
    paths: [
      { params: { path: "PageWithGetStaticPaths1" } },
      { params: { path: "PageWithGetStaticPaths2" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export function getStaticProps(ctx) {
  return {
    props: {
      page: ctx.params.path,
      linkTo: "staticPage",
    },
    revalidate: 1,
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
