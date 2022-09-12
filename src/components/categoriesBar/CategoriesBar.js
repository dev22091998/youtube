import React, {useState} from 'react'
import './_categoriesBar.scss'

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Getsby',
  'Poor Coder',
  'Shwetabh'
]


const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All')

  const handleClick = value => {
    setActiveElement(value)
  }
  return(
    <div className='CategoriesBar'>
      {
        keywords.map((value, i) => (
          <span
            key={i}
            onClick={()=> handleClick(value)}
            className={activeElement === value ? 'active' : ''}
          >
            { value }
          </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar