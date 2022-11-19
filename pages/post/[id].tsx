import {
  NextPage,
  GetStaticPaths,
  GetStaticProps
} from 'next'
import Head from 'next/head'
import React, { useEffect, useRef, MutableRefObject } from 'react'
import { client, queryPostCount, queryPostDetail } from '../../apollo'
import config from '../../config'
import 'github-markdown-css'
import styles from './../../styles/postDetail.module.css'

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const { data } = await client.query({query: queryPostCount, variables: {
    name: 'blog',
    owner: 'wmasfoe'
  }})
  const res = []
  for(let i = 1; i <= data.repository.issues.totalCount; i++) {
    res.push(`/post/${i}`)
  }
  return {
    paths: res,
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps<{}> = async ({params}) => {
  let res = null;
  try {
    const { data } = await client.query({query: queryPostDetail, variables: {
      postId: +(params?.id || 1),
      owner: 'wmasfoe',
      repoName: 'blog'
    }})
    res = data
  } catch (e) {
    res = null
    console.error(e || `文章详情出错，id为: ${params?.id}，params为: ${JSON.stringify(params)}`)
  }
  return {
    props: {
      data: res
    },
    revalidate: 1000 * 60 * 60 * 24 // 每天更新缓存
  }
}

const Posts: NextPage = (props: any) => {
  const articleInfo = props.data.repository.issue
  const postBodyRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(postBodyRef.current === null || titleRef.current === null) return
    const bgColor = getComputedStyle(postBodyRef.current).backgroundColor
    titleRef.current.style.backgroundColor = bgColor
    document.documentElement.style.backgroundColor = bgColor
  }, [])

  return (
    <div ref={titleRef}>
      <Head>
        <title>{articleInfo.title}</title>
        <meta name="description" content={articleInfo.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles['post-title']}>{articleInfo.title}</h1>
      <article>
        <div ref={postBodyRef} className={`markdown-body ${styles['post-wrapper']}`} dangerouslySetInnerHTML={{__html: articleInfo.bodyHTML}}></div>
      </article>
    </div>
  )
}

export default Posts
