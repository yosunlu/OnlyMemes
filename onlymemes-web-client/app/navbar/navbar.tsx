'use client';

import SignIn from "./signIn";
import Link from "next/link";

import styles from "./navbar.module.css";
// import Upload from "./upload";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";


function NavBar() {
    // Initialize user state
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChangedHelper((user) => {
        setUser(user);
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, [] /* No dependencies, never rerun */);
  
  
    return (
      <nav className={styles.nav}>
        <Link href="/">
          <span className={styles.logoContainer}>
            <img className={styles.logo} width={100} height={110}
             src="/pngegg.png" alt="Logo"/>
          </span>
        </Link>
        <SignIn user={user} />
      </nav>
    );
  }
  
  export default NavBar;