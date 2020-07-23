import React from 'react'
import Person from './Person'

function List() {
    /*eslint-disable no-unused-vars */
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(person => <li key={person.id}><Person person = {person}/></li>)
  return <ul>{personList}</ul>
}

export default List
