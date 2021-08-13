import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const AllPosts = () => {
    const [allPostsData, setAllPosts] = useState([])

    useEffect(()=> {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                info,
                techOne,
                techTwo,
                techThree,
                slug,
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }`
        ).then((data) => setAllPosts(data))
        .catch(console.error);

    }, [])

    return (
         <div className="card-container">
            {allPostsData && allPostsData.map((post, index) => (
                    <div className="card" key={index}>
                        <Link to={'/'+ post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <LazyLoadImage className="card__img" src={post.mainImage.asset.url} effect="blur" width="100%" alt="blog image"/>
                            </span>
                            <div className="card__title">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="card__info">
                                <p>{post.info}</p>
                            </div>
                            <div className="card__tech">
                                <p>{post.techOne}</p>
                                <p>{post.techTwo}</p>
                                <p>{post.techThree}</p>
                            </div>
                        </Link>
                    </div>
            ))}
        </div>
    )
}

export default AllPosts
