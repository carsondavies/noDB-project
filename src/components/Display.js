import React from 'react'
import Tanks from './Tanks'
import Support from './Support'
import Damage from './Damage'
import MiddleDisplay from './MiddleDisplay'


export default function Display(props) {



  return (
    <div className='display-container'>
      < Tanks tanks={props.tanks} setMiddleHero={props.setMiddleHero} />
      < Support support={props.support} setMiddleHero={props.setMiddleHero} />
      < MiddleDisplay editHero={props.editHero} deleteHero={props.deleteHero} heroes={props.heroes} middleHero={props.middleHero} />
      < Damage damage={props.damage} setMiddleHero={props.setMiddleHero} />
    </div>
  )
}

