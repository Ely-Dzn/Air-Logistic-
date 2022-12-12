import {Route,Routes} from 'react-router-dom';
import * as React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

export default function RouterMain() {

return(

<Routes>
	<Route path="/">
		
		<Route path="/" element={<Login />} />
		<Route path="/login" element={<Login />} />
	</Route>
	<Route path='/Home' element={<Home />}/>
</Routes>


);
}
