import {PortableText} from '@portabletext/react'
import React from 'react';
const myPortableTextComponents = {
  types: {
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

const PlainText = ({ props }) => (
  <div>
    <PortableText value={props} components={myPortableTextComponents}/>
  </div>
  
);

export default PlainText;