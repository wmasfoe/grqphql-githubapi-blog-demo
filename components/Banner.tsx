import Image from 'next/image'
import NoSSR from 'react-no-ssr'
import styles from '../styles/About.module.css'

export type BannerPropsType = {
  url?: string
  alt?: string
  title?: string
  text?: string
}
const Banner = (props: BannerPropsType) => {
  const { url, alt, title, text } = props
  if(!url) return <></>
  return <div className={styles.container}>
    <Image src={url} layout='fill' alt={alt} />
    {
      !!title && <div className={styles.abs}>
      <span>{ title }</span>
      <span>「 { text } 」</span>
    </div>
    }
  </div>
}

export default Banner
