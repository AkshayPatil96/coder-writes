import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.main_nav}>
            <ul>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>
                <Link href={"/about"}>
                    <li>About</li>
                </Link>
                <Link href={"/blog"}>
                    <li>Blogs</li>
                </Link>
                <Link href={"/contact-us"}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
