import React from 'react'
import Item from './Item'

const Main = () => {
  return (
    <div className='main'>
        <Item url="https://jsonplaceholder.typicode.com/comments" saveData='comments'/>
        <Item url="https://jsonplaceholder.typicode.com/photos"
        saveData='photos'/>
        <Item url="https://jsonplaceholder.typicode.com/todos"
        saveData='todos'/>
        <Item url="https://jsonplaceholder.typicode.com/posts"
        saveData='posts'/>
    </div>
  )
}

export default Main
