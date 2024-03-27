import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';



export default async function Home() {
  const videos = await getVideos();
  // this is service side
  // console.log(videos) 這邊會顯示在terminal, 不會在web client, 因為這是在server side跑的
  return (
    <div>
      <div className={styles.top_line}></div>
      <p className={styles.userID}> yushanlu</p>
      <div className={styles.container}>
        {
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`} key ={video.id}>
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
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`} key ={video.id}>
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
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`} key ={video.id}>
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
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`} key ={video.id}>
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
          videos.map((video) => (
            <Link href={`/watch?v=${video.filename}`} key ={video.id}>
              <Image src={'/thumbnail1.png'} alt='video' width={180} height={120}
                className={styles.thumbnail}/>
            </Link>
          ))
        }
      </div>
            
    </div>
  )
}

// node js: on the server side, every request will be cached
// including requests made by firebase function call getVideos()
export const revalidate = 30; // disables cache; if not disabled, newly uploaded video will not show on the site
// because getVideo request will be cached

// still cache, but refetech these request API (getVideo) every 30 seconds 
// because its rendered the same for every user, no need to revalidate it every single time
// every 30 second re-render this page, cache the page, send cache copy to user
// getVideo loading will be less

//  This means that for any request made within these 30 seconds, your server will serve the cached data rather than calling getVideos() again
// Once this time elapses, the next request will trigger a new call to getVideos(), refreshing the cached content.