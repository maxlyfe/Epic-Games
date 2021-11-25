import Slider from '../../components/Slider/Slider';
import Search from '../../components/Search/Search';
import Container from '../../components/Container/Container';
import './Home.css';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted){
        setGames(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])


  return (
    <div className='home'>
      <Slider 
      id='d6df6488-f05e-48b3-b856-52f34a5bb3bb'
      classificationNumber='L'
      classificarionText='Corrida'
      />
      <Search />
      <Container title='Destaques'>
        {
          games.map(game => (
            <Card 
              id={game.id}
              image={game.image}
              title={game.name}
              preco={game.price}
              key={game.id}
            />
          ))
        }
      </Container>
    </div>
  )
}