import { useTina } from "tinacms/dist/react";
import client from "../.tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export default function Home(props) {
  const { data } = useTina<{ page: { body: TinaMarkdownContent } }>({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <>
      <p className="text-hotPink">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente illo
        nemo consequuntur cumque quo delectus porro ratione? Repellat asperiores
        mollitia omnis. Et quisquam harum ipsum aut, porro soluta mollitia ad.
      </p>

      <p className="text-softPink">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illo
        veniam earum enim laboriosam aspernatur molestias nisi atque. Minima
        dolores, expedita pariatur eius veritatis quia repellendus distinctio
        quasi praesentium? Voluptas.
      </p>

      <TinaMarkdown content={data.page.body} />
    </>
  );
}
export const getStaticProps = async () => {
  const tinaProps = await client.queries.page({ relativePath: "about.md" });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};
