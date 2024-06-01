import React from 'react'

const MyArticles = ({Header}) => {
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4 ">
        <Header urlName="My Articles"/>
        <div>My Articles</div>
      </div>
    </>
  )
}

export default MyArticles
