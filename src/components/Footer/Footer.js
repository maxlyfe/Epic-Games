import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <a href='https://www.facebook.com/epicgames/'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/epicgames/'><FaInstagramSquare /></a>
        <a href='https://twitter.com/EpicGamesBR'><FaTwitterSquare /></a>
        <a href='https://www.youtube.com/channel/UC5Qk8mWBwtMyEj7iQQYRk1A'><FaYoutubeSquare /></a>
      </div>
      <span>© 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o</span>
      <span>logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal</span>
      <span>Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros</span>
      <span>lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para</span>
      <span>além dos EUA são feitas através da Epic Games International, S.à r.l.   </span>
    </div>
  )
}