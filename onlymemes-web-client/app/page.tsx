import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';



export default async function Home() {
  const videos = await getVideos();
  const videos_1 = await getVideos();
  // this is service side
  // console.log(videos) 這邊會顯示在terminal, 不會在web client, 因為這是在server side跑的
  return (
    <div>
      <div className={styles.top_line}></div>
      <p className={styles.userID}> yushanlu</p>
      <div className={styles.container}>
        {
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`}>
              <Image src={'/thumbnail5.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
      <div className={styles.line}></div>
      <p className={styles.userID} color="gray">leuyosun</p>
      <div className={styles.container}>
        {
          videos_1.map((video) => (
            <Link href={`/watch?v=${video.filename}`}>
              <Image src={'/thumbnail3.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
      <div className={styles.line}></div>
      <p className={styles.userID} color="gray">yosunlu</p>
      <div className={styles.container}>
        {
          videos_1.map((video) => (
            <Link href={`/watch?v=${video.filename}`}>
              <Image src={'/thumbnail4.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
      <div className={styles.line}></div>
      <p className={styles.userID} color="gray">shuijielee</p>
      <div className={styles.container}>
        {
          videos_1.map((video) => (
            <Link href={`/watch?v=${video.filename}`}>
              <Image src={'/thumbnail2.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
      <div className={styles.line}></div>
      <p className={styles.userID} color="gray">leeshuijee</p>
      <div className={styles.container}>        
        {
          videos_1.map((video) => (
            <Link href={`/watch?v=${video.filename}`}>
              <Image src={'/thumbnail1.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
            
    </div>
  )
}
