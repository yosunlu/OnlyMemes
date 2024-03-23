'use client'; // 因為有用hooks, 要改成client side component

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
    // useState永遠回傳一個array; user會被初始化為null, setUser會改變user的state
  
    useEffect(() => { // 只會在這個function load的時候跑一次
      const unsubscribe = onAuthStateChangedHelper((user) => { 
        // user是參數，丟到setUser裡; user對應 callback: (user: User | null) => void 的user, setUser對應void
        setUser(user);
      });

      // 當signIn, signOut被點擊時，onAuthStateChangedHelper會監聽到，並且根據目前的user去setUser
  
      // Cleanup subscription on unmount
      return () => unsubscribe(); // 組件“卸載”時，會被調用; onAuthStateChangedHelper會回傳一個unscribe的function
    }, [] /* No dependencies, never rerun */); // 這裡面可以放user, 當user狀態改變，useEffect就會重新跑
  
  
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