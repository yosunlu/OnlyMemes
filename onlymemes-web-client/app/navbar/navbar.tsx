import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className="(styles)">
            <Link href="/">
                <Image width={120} height={120}
                    src="/pngegg.png" alt="Logo"/>              
            </Link>
        </nav>
    );
}