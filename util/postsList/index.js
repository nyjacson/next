import ReactHtmlParser from 'react-html-parser';

export function PostsList(props) {
  const list = props.posts.map(p => (
    <div key={p.id}>
      <div>{ReactHtmlParser(p.id)}</div>
      <div>{ReactHtmlParser(p.title)}</div>
      <div>{ReactHtmlParser(p.content)}</div>
      <div>{ReactHtmlParser(p.excerpt)}</div>
    </div>)
  )
  return (
    <div>
      {list}
    </div>)
}