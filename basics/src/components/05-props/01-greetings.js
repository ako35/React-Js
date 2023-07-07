import React from 'react'
import Welcome1 from './02-welcome'
import Welcome2 from './03-welcome'
import Welcome3 from './04-welcome'

const Greetings = () => {
  return (
    <div>
        <Welcome1 firstName="Ali" lastName="Koç" disabled desc='Ben bir developerim'  />
        <Welcome1 firstName="Ahmet" lastName="Yüksel" desc='Ben bir developerim'  />
        <Welcome2 firstName="Ayse" lastName="Bal" desc='Ben bir sekreterim' />
        <Welcome3 firstName="Fatma" lastName="Sen" />
    </div>
  )
}

export default Greetings