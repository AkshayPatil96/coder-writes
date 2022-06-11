import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // console.log("running");
        fetch("http://localhost:3000/api/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
            });
    }, []);
    // let datas = "Learn javascript";
    // let data = datas.trim().toLowerCase().split(" ").join("-");
    // console.log(data);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blog) => {
                    return (
                        <>
                            <div
                                className={styles.blogItems}
                                key={`blog-${blog.title}`}
                            >
                                <Link href={`/blogpost/${blog.slug}`}>
                                    <h3 className={styles.blogTitle}>
                                        {blog.title}
                                    </h3>
                                </Link>
                                <p className={styles.blogDesc}>
                                    {blog.content.substr(0,140)}...
                                </p>
                            </div>
                        </>
                    );
                })}
                {/* <div className="blogItem">
                    <h3>How to learn JS in 2022</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="blogItem">
                    <h3>How to learn JS in 2022</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="blogItem">
                    <h3>How to learn JS in 2022</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div> */}
            </main>
        </div>
    );
};

export default Blog;
