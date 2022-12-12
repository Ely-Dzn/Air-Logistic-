import React from 'react';
import Heading  from '../Heading';
import {Main,Navbar,Toolbar} from './style';
import Feed from '../Componets/feed';
//import Main from './Componets/main';

export default function Home() {

    return (
      <div> 
        <Heading/>
        <Main className='main'>
          
          <Feed/>
        </Main>
        <div>
          <Toolbar className='toolbar'>tool</Toolbar>
        </div>
      </div>

)

}
