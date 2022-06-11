// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default function handler(req, res) {
    fs.readFile(
        `blogs/${req.query.slug}.json`,
        { encoding: "utf-8" },
        (err, data) => {
            if (err) {
                res.status(500).json("blog not found");
            }
            console.log(req.query);
            res.status(200).json(JSON.parse(data));
        }
    );
}
