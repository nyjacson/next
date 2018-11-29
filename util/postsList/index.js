import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import styles from './postsList.scss';

export function PostsList(props) {
  const list = props.posts.map(p => (
    <div key={p.id} class={`p-3 border ${styles.wrapper}`}>
      <div>{ReactHtmlParser(p.id)}</div>
      <div>{ReactHtmlParser(p.title)}</div>
      <div>
        {ReactHtmlParser(p.excerpt)}<Link href={{ pathname: 'post', query: { id: p.id }}}><a>もっと読む</a></Link>
      </div>
    </div>)
  )
  return (
    <div>
      {list}
    </div>)
}