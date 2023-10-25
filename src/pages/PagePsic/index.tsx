import Profile from '../../assets/profileDefault.jpeg'
import ImageOffice from '../../assets/imageOffice.svg'
import { FaGoogle } from 'react-icons/fa'
import {
  BsInstagram,
  BsFacebook,
  BsTiktok,
  BsTelegram,
  BsLinkedin
} from 'react-icons/bs'
import * as P from './styles'

export function PagePsic() {
  const chooseIconSocialMedia = (type: string) => {
    return type === 'email' ? (
      <FaGoogle />
    ) : type === 'instagram' ? (
      <BsInstagram />
    ) : type === 'linkedin' ? (
      <BsLinkedin />
    ) : type === 'facebook' ? (
      <BsFacebook />
    ) : type === 'tiktok' ? (
      <BsTiktok />
    ) : type === 'telegram' ? (
      <BsTelegram />
    ) : (
      <></>
    )
  }

  return (
    <P.Container>
      <img
        src={ImageOffice}
        alt="Escritório com escrivania, cadeira e luminária."
        width={'100%'}
      />
      <P.ContainerPsic>
        <img
          src={Profile}
          alt="Imagem do psicologo vazia, mostrando apenas uma imagem de uma pessoa sem nada na face e cor cinza."
          className="image-profile-psic"
        />
        <P.DataPsic>
          <P.InfosPsic>
            <h2>Larissa Manoela Silva Batista Santos</h2>
            <h3>Psicologa/ Psiquiatra/ Pedagoga</h3>
            <h4>CRP - 0000000</h4>
          </P.InfosPsic>
          <P.BiographyPsic>
            <h2>Biografia</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
              odio accusantium eius soluta incidunt at dolorem, ad velit eum
              exercitationem necessitatibus ratione aperiam animi cum nulla
              adipisci sunt. Iure.
            </p>
          </P.BiographyPsic>
        </P.DataPsic>
        <P.LinksSocialMedia>
          <ul>
            <li>
              <a>
                <FaGoogle />
              </a>
            </li>
            <li>
              <a>
                <BsInstagram />
              </a>
            </li>
            <li>
              <a>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a>
                <BsTiktok />
              </a>
            </li>
            <li>
              <a>
                <BsTelegram />
              </a>
            </li>
            <li>
              <a>
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </P.LinksSocialMedia>
      </P.ContainerPsic>

      <P.ButtonScheduleAppoiment>
        <a href="#" target="_blank">
          Agendar consulta
        </a>
      </P.ButtonScheduleAppoiment>

      <P.FrameLocalization>
        <h2>Onde me encontrar ?</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7732035781128!2d-48.825275952508036!3d-26.236557772678925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deae5902412fa7%3A0xedb78df10af4fd08!2sMotel%20Vison!5e0!3m2!1spt-BR!2sbr!4v1674851414830!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="frame-localization-psic"
        ></iframe>
      </P.FrameLocalization>
    </P.Container>
  )
}
