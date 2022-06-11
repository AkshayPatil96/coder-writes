import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogPost.module.css";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={styles.main}>
            <h1>{slug}</h1>
            <hr />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione ex, vel numquam omnis, recusandae vero cum, doloremque
                tenetur quae fugiat sed qui. Eaque laboriosam maxime nemo natus
                provident tempore ad.
            </p>
        </div>
    );
};

export default Slug;
