import {useEffect} from 'react'

// import All Of Data
import Logo from '../../data/data-layout/Header/data-Logo.js';
import IcoName from '../../data/data-layout/Header/data-IcoName.json'
import Market from '../../assets/img/core-img/market.png'

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'


const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo} />
    </>
  );
}

export default Header;