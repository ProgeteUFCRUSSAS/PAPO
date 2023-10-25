import axios from 'axios'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import csv from 'csvtojson'

interface IPsychologistProviderProps {
  children: ReactNode
}

interface IPsychologistData {
  jsonData: any[]
}

const PsychologistContext = createContext({} as IPsychologistData)

export function PsychologistProvider({ children }: IPsychologistProviderProps) {
  const [jsonData, setJsonData] = useState<any[]>([])

  useEffect(() => {
    const csvUrl = '/dados_psicologos.csv' // Substitua pelo URL do arquivo CSV desejado

    axios
      .get(csvUrl)
      .then(response => {
        const csvData = response.data

        csv()
          .fromString(csvData)
          .then(jsonArray => {
            setJsonData(jsonArray)
          })
        // .catch(error => {
        //   console.error('Erro ao converter CSV em JSON:', error)
        // })
      })
      .catch(error => {
        console.error('Erro ao obter o arquivo CSV:', error)
      })
  }, [])

  return (
    <PsychologistContext.Provider value={{ jsonData }}>
      {children}
    </PsychologistContext.Provider>
  )
}

export const usePsychologistContext = () => useContext(PsychologistContext)
