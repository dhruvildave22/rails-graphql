import React from 'react';
import { render } from 'react-dom';
import AddItemForm from '../components/AddItemForm';
import Library from '../components/Library';
import Provider from '../components/Provider';
import UserInfo from '../components/UserInfo';

render(
  <Provider>
    <UserInfo />
    <AddItemForm />
    <Library />
  </Provider>, document.querySelector('#root'));