// @flow

import React from 'react';
import ReactHtmlParser from 'react-html-parser';

type Props = {
  post: Object
};

export function PostPage(props: Props) {
  return (
    <div key={props.post.id} className="p-3 border">
      <div>{ReactHtmlParser(props.post.id)}</div>
      <div>{ReactHtmlParser(props.post.title)}</div>
      <div>{ReactHtmlParser(props.post.content)}</div>
    </div>
  );
}
