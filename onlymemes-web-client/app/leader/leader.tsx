'use client';
import styles from "./leader.module.css";

function Leaders() {
    return (
        <nav className={styles.leaderContainer}>
            <h2>Current Leaders</h2> {/* Larger text for the title */}
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            <img src="star.png"/>
            
            <ul>
                <li><span className="name">yushanlu</span>   <span className="number">20</span></li>
                <li><span className="name">leuyosun</span>   <span className="number">15</span></li>
                <li><span className="name">yosunlu</span>    <span className="number">11</span></li>
                <li><span className="name">shuijielee</span>  <span className="number">10</span></li>
                <li><span className="name">leeshuijee</span>   <span className="number">4</span></li>
            </ul>


        </nav>
    );
}

export default Leaders 