import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import SignUp from './SignUp';
import './index.css';
import Movies from './Movies';

/*
// Before ES6
var App = function (){
  return "Hello world";
}

// With arrow functions
var App = () => {
  return "Hello world";
}

// One statement function
var App = () => "Hello world";

// Function with parameters
var App = ({name}) => "Hello " + name;
*/

export default function App() {
  return (
    <div className='bg-purple-700 w-full h-full'>
      <Header />
      <SignUp />
      <Movies />  
      <Footer />
    </div>

  )
}