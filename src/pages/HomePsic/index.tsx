import { useState } from 'react'

import { Footer } from '../../components/Footer'
import { PsychologistCard } from '../../components/PsychologistCard'
import { BiSearch } from 'react-icons/bi'
import * as S from './styles'

export function HomePsic() {
  const [openFilterPsycs, setOpenFilterPsycs] = useState(false)
  return (
    <S.PagePsyc>
      <S.TitleWithIconFilter>
        <h1>Psicologos</h1>

        <div className="area-filter">
          {openFilterPsycs && (
            <input
              type="text"
              placeholder="Nome ou area de atuação"
              className="input-filter-psyc"
            />
          )}
          <button
            className="icon"
            type="button"
            onClick={() => setOpenFilterPsycs(prevState => !prevState)}
          >
            <BiSearch />
          </button>
        </div>
      </S.TitleWithIconFilter>

      <PsychologistCard />
      <PsychologistCard />
      <PsychologistCard />

      <Footer />
    </S.PagePsyc>
  )
}
