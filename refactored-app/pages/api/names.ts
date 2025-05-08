import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import type { ResponseItemType } from "../../custom";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: ResponseItemType[];

  try {
    const response = await fetch(url);
    data = (await response.json()) as ResponseItemType[];
  } catch {
    res.status(500).send("Error");
    return;
  }

  const names = data
    .map(item => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");
  res.status(200).send(names);
}