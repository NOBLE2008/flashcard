import React from 'react'

const Flashcard = ({detail, id, reveal}) => {
  return (
    <div onClick={reveal(id)} className={detail.reaveled === true ? 'selected': ''}>
        {detail.reaveled ? detail.answer : detail.question}
    </div>
  )
}

export default Flashcard
