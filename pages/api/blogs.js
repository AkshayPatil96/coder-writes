// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogs");
    let files;
    let allblogs = [];

    for (let index = 0; index < data.length; index++) {
        const blog = data[index];
        console.log(blog);
        files = await fs.promises.readFile("blogs/" + blog, "utf-8");
        allblogs.push(JSON.parse(files));
    }
    res.status(200).json(allblogs);
}
