import React, { useState } from 'react'

import { Footer } from '../../components/Footer'
import { PsicContent } from '../../components/HomePsicContent'
import { PsicHero } from '../../components/HomePsicHero'
import { PsicFAQ } from '../../components/HomePsicFAQ'
import { PsychologistCard } from '../../components/PsychologistCard'
import { RiFilterLine, RiFilterOffLine } from 'react-icons/ri'

import * as S from './styles'

export function HomePsic() {
  const [filterPsycs, setFilterPsycs] = useState(false)
  return (
    <S.PagePsyc>
      {/* <PsicHero /> */}

      {/* <PsicContent />


      <PsicFAQ /> */}
      <div>
        <h1>Psicologos</h1>
      </div>

      <S.FilterPsyc></S.FilterPsyc>

      <PsychologistCard />
      <Footer />
    </S.PagePsyc>
  )
}
