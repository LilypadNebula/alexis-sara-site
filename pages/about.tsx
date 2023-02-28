import { useTina } from "tinacms/dist/react";
import client from "../.tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export default function About(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <div className="text-white">
      <TinaMarkdown content={data.about_page.body as TinaMarkdownContent} />
    </div>
  );
}
export const getStaticProps = async () => {
  const tinaProps = await client.queries.about_page({
    relativePath: "index.json",
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};
