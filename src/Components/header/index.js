import React from 'react';
import './header.css';

import {BsGeoAltFill} from 'react-icons/bs';
import {TbHandRock} from 'react-icons/tb';
import {FiChevronsDown} from 'react-icons/fi';

import imgProfile from '../../assets/profile/profile1.png';

export default function Header(){
    return(
        <div className='container'>
            <img  src={imgProfile} className="image" />

            <h3>@caiquera95</h3>

            <div className='location'>
                <BsGeoAltFill />
                <p>São Paulo - SP</p>
            </div>

            <div className='container_welcome'>
                <p>Bem-vindo(a) à minha Social Page! <TbHandRock/></p>
                <span>Confira meus links abaixo. <FiChevronsDown /></span>
            </div>
            
        </div>
    )
}