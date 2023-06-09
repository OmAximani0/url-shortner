// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import shortid from "shortid";
import { addUrl } from "@/utils/url-storage";

type ResponseData = {
  message: string;
};

shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$"
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method == "POST") {
    if (req.body.url) {
      let id = shortid.generate();
      const { url } = req.body;
      addUrl(id, url);
      return res.json({ message: String(process.env.DOMAIN + "/api/" + id) });
    } else {
      return res.status(200).json({ message: "URL not provided!" });
    }
  }
  res.status(200).json({ message: "Method not allowed!" });
}
