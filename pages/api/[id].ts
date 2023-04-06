import type { NextApiRequest, NextApiResponse } from "next";
import { getUrl } from "@/utils/url-storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (id) {
    let url = getUrl(String(id));
    console.log(url);
    if (typeof url == "string") {
      if (url.includes("http")) return res.redirect(302, url);
      return res.redirect(302, "https://" + url);
    }
  }
  res.status(200).json({ message: "URL not found!" });
}
