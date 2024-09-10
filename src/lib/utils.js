import { client } from "@/lib/contentful";

export const getSingleFeature = async (id) => {
  const response = await client.getEntries({
    content_type: "features",
    "fields.id": id,
  });
  //   console.log(response.items[0]?.fields);
  return response.items[0]?.fields;
};
