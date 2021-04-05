import React from 'react'
import { Link, Route } from 'react-router-dom'
import ItemSave from './item/ItemSave'
import ItemAll from './item/ItemAll'
import ItemOne from './item/ItemOne'
import ItemEdit from './item/ItemEdit'
import ReviewSave from './review/ReviewSave'
import ReviewAll from './review/ReviewAll'
import ReviewOne from './review/ReviewOne'
import ReviewEdit from './review/ReviewEdit'
import UserSave from './user/UserSave'
import UserAll from './user/UserAll'
import UserOne from './user/UserOne'
import UserEdit from './user/UserEdit'


const App = () => {
  return (<>
  <ul style={{width:200, margin: "0 auto", marginTop: 100}}>
  <li><Link to='/item-save'>Item Save</Link></li>
  <li><Link to='/item-all'>Item All</Link></li>
  </ul>
  
  <Route path='/' exact component={ItemSave}/>
  <Route path='/item-save' component={ItemSave} />
  <Route path='/item-all' component={ItemAll}/>
  <Route path='/item-one/:id' component={ItemOne}/>
  <Route path='/item-edit' component={ItemEdit}/>

  <ul style={{width:200, margin:"0 auto", marginTop:100}}>
  <li><Link to='/review-save'>Review Save</Link></li>
  <li><Link to='/review-all'>Review All</Link></li>
  </ul>
  <Route path='/' exact component={ReviewSave}/>
  <Route path='/review-save' component={ReviewSave}/>
  <Route path='/review-all' component={ReviewAll}/>
  <Route path='/review-one/:id' component={ReviewOne}/>
  <Route path='/review-edit' component={ReviewEdit}/>
  
  <ul style={{width:200, margin:"0 auto", marginTop:100}}>
  <li><Link to='/user-save'>User Save</Link></li>
  <li><Link to='/user-all'>User All</Link></li>
  </ul>
  <Route path='/' exact component={UserSave}/>
  <Route path='/user-save' component={UserSave}/>
  <Route path='/user-all' component={UserAll}/>
  <Route path='/user-one/:id' component={UserOne}/>
  <Route path='/user-edit' component={UserEdit}/>
  </>)
}

export default App