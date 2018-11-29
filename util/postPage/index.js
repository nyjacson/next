import ReactHtmlParser from 'react-html-parser';
import styles from './postPage.scss';

export function PostPage(props) {
  return (
    <div key={props.post.id} class={`p-3 border`}>
      <div>{ReactHtmlParser(props.post.id)}</div>
      <div>{ReactHtmlParser(props.post.title)}</div>
      <div>
        {ReactHtmlParser(props.post.content)}
      </div>
    </div>
  )
}