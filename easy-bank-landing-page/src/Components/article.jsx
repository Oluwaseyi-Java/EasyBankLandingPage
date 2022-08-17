import React from 'react'
import { UIData } from '../API'


const Article = () => {
  return (
    <article className='Articles'>
      <h2>Latest Articles</h2>
      <div className='Cards'>
        {UIData.articles.map((item, index) => {
          return (
            <div className='Card' key={index}>
              <div className='img'>
              <img src={require("../images/"+item.img+".jpg")} alt='pic'/>
              </div>
              <div className='text'>
                <p>{item.name}</p>
                <h3>{item.title}</h3>
                <p className='content'>{ item.content}</p>
              </div>
            </div>
          )
        })}
      </div>

    </article>
  )
}

export default Article