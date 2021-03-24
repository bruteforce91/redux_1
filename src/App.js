import axios from 'axios'
import { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'
import './App.css';
import SimpleCard from "./SimpleCard";
import HeroForm from './HeroForm';
import {fetchAllHeroes} from "./store/actions"
import {useDispatch, useSelector} from "react-redux";
axios.defaults.headers.post['Content-Type'] = 'application/json'


function App() {
  const [heroes, setHeroes] = useState([])
  const [showFormModal, setShowFormModal] = useState(false)
  const [newHero, setNewHero] = useState({})
  const dispatch=useDispatch()
  const state=useSelector(state => state)
  //heroes=useSelector(state => state.heroes)
 
 
  useEffect(()=>{
    if(state!==undefined){
      setHeroes(state.heroes)
    }
  },[state])


  // const getAllHeroes = async () => {
  //   const { data: heroes } = await axios.get('http://localhost:3000/heroes')
  //   setHeroes(heroes)
  // }

  useEffect(() => {
    dispatch(fetchAllHeroes())
    //getAllHeroes()
  },[])

  //validate form
  const checkForm = () => newHero.name && newHero.powers.length>0 && newHero.image && newHero.alterEgo

  const onInputChange = (e) => {
    setNewHero(hero => ({...hero, [e.target.name]: e.target.value }))
  }

  const closeForm = () => {
    setNewHero({})
    setShowFormModal(false)
  }

  const addNewHero = async e => {
    e.preventDefault()
    // if(checkForm()) {
    //   await axios.post('http://localhost:3000/heroes', newHero)
    //   //dispatch(fetchAllHeroes)
    // } else {
    //   throw new Error ('Form not Valid')
    // }
  }

  return (
      <div className={"App"}>
        {heroes && <div className={"PostsContainer"}>{heroes.map(hero => (<SimpleCard fetchAll={()=>{}} hero={hero} key={hero.id}/>))}</div> } 
         <HeroForm hero={newHero} show={showFormModal} handleClose={closeForm} onInputChange={onInputChange} addNewHero={addNewHero}/>
        <Button className={'addButton'} size={'lg'} variant={'primary'} onClick={() => setShowFormModal(true)}> + </Button>
      </div>
  );
}

export default App;
