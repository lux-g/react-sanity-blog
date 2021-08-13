import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'


const OnePost = () => {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == $slug]{
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                 }
               },
             body,
            "name": author->name,
            "authorImage": author->image
           }`,
            { slug }
          )
          .then((data) => setPostData(data[0]))
          .catch(console.error);
      }, [slug]);


    return (
      <div className="post-wrapper">
        {postData ? (
            <div className="post-container">
                <div>
                  <h1 className="title"><span>{postData.title}</span></h1>
                <div>
                </div>
                </div>
                <div>
                <BlockContent className="block-content"
                    blocks={postData.body}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                />
                </div>
            </div>
          ) : (
            <div className="loading">Loading...</div>
          ) }
      </div>
    )
}

export default OnePost
