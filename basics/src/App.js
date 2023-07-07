import React from 'react'
import Apples, { Bananas1, Orange } from './components/01-my-house'
import Jsx1 from './components/02-jsx/01-jsx'
import Jsx2 from './components/02-jsx/02-jsx'
import Jsx3 from './components/02-jsx/03-jsx'
import Jsx4 from './components/02-jsx/04-jsx'
import InlineStyling from './components/03-styles/01-inline-styling'
import InternalStyling from './components/03-styles/02-internal-styling'
import ExternalStyling from './components/03-styles/03-external-styling'
import ExternalModuleStyling from './components/03-styles/04-external-module-styling'
import SassScss from './components/03-styles/05-sass-scss'
import DijitalSaatUygulamasi1 from './components/04-dijital-saat-uygulamasi1/dijital-saat-uygulamasi1'

const App = () => {
  return (
    <div>
        <Apples />
        <Bananas1 />
        <Orange />
        <Jsx1 />
        <Jsx2 />
        <Jsx3 />
        <Jsx4 />
        <InlineStyling />
        <InternalStyling />
        <ExternalStyling />
        <ExternalModuleStyling />
        <SassScss />
        <DijitalSaatUygulamasi1 />

        <br />
        <br />
        <br />
    </div>
  )
}

export default App