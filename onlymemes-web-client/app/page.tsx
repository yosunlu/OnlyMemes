import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';



// export default async function Home() {
//   const videos = await getVideos();
//   return (
//     <main className="container">
//       {videos.map((video) => (
//         <Link href={`/watch?v=${video.filename}`} key={video.filename}>
//           <Image src={'/thumbnail.webp'} alt='video' width={180} height={120} className={styles.thumbnail}/>
//         </Link>
//       ))}
//     </main>
//   );
// }

export default async function Home() {
  const videos = await getVideos();
  // this is service side
  // console.log(videos) 這邊會顯示在terminal, 不會在web client, 因為這是在server side跑的
  return (
    <main>
      {
        videos.map((video) => (
          <Link href={`/watch?v=${video.filename}`}>
            <Image src={'/thumbnail.webp'} alt='video' width={180} height={120}
              className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  )
}
