import React from 'react'
import Person from '../../../components/person'
import Decor from '../../../components/decor'
import Host from './host'

import Title from '../../../components/title.js'

export default Panelists

function PanelistList({panelists}) {
  return (
    <div className="panelist-list">
      {panelists.map((p, i) => <Person className="panelist panelist-list__panelist" {...p} key={i} />)}
    </div>
  )
}

function Panelists({panelists}) {
  return (
    <section className="panelists-section" id="panelists">
      <Decor />
      <div className="panelists-section__container">
        
        <Title name="Host" yellow />
        <Host />
        <Title name="Panelists" yellow />
        <PanelistList panelists={panelists} />
        <p className="panelists-section__caption">
          JavaScript Air has <a className="panelists-section__link"
            href="http://panelists.javascriptair.com">a panel</a> of
          some of the finest people the community has to offer
        </p>
      </div>
    </section>
  )
}
