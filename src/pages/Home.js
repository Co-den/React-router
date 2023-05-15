import {Fragment} from 'react';
import Meal from '../components/Meals/Meals';
import Menu from '../components/layout/Menu';


const Home = () => {
  return (
    <Fragment>
      <Meal />
      <Menu />
    </Fragment>
  )
}

export default Home;