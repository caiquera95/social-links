import React from 'react';
import './links.css';

import {BsGithub, BsLinkedin, BsFacebook, BsSpotify, BsInstagram } from 'react-icons/bs';

import {FiInstagram} from 'react-icons/fi';

export default function Links(){
    return(

        <div className='container_links'>

            <a className="links-facebook" href="https://www.facebook.com/caiquech13/" rel="noopener noreferrer" target="_blank">
                <div className='facebook'>
                    <div className='box'><BsFacebook /> Facebook</div>
                </div>
            </a>

            <a className="links-github" href="https://github.com/caiquera95" rel="noopener noreferrer" target="_blank">
                    <div className='github'>
                        <div className='box'><BsGithub /> GitHub</div>
                    </div>
            </a>

            <a className="links-instagram" href="https://www.instagram.com/caiqueera95/" rel="noopener noreferrer" target="_blank">
                    <div className='instagram'>
                        <div className='box'><FiInstagram /> Instagram</div>
                    </div>
            </a>

            <a className="links-linkedin" href="https://www.linkedin.com/in/caique-antonio1195" rel="noopener noreferrer" target="_blank">
                    <div className='linkedin'>
                        <div className='box'><BsLinkedin /> LinkedIn</div>
                    </div>
            </a>

            <a className="links-spotify" href="https://open.spotify.com/user/cah95-br?si=79440ef0902f4a1e" rel="noopener noreferrer" target="_blank">
                    <div className='spotify'>
                        <div className='box'><BsSpotify /> Spotify</div>
                    </div>
            </a>


             {/* <div className="github">
                <div className="box" href="https://github.com/caiquera95">   
                    <BsGithub />
                    <a href="https://github.com/caiquera95" rel="noopener noreferrer" target="_blank">GitHub</a>
                </div>
            </div> */}

            {/* <div className="linkedin">
                <div className='box'>
                    <BsLinkedin />
                    <a href="https://www.linkedin.com/in/caique-antonio1195" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                </div>
            </div> */}


            {/* <div className="facebook" >
                <div className='box'>
                    <a href="https://www.facebook.com/caiquech13/" rel="noopener noreferrer" target="_blank"><BsFacebook /> Facebook</a>
                </div>
            </div>  */}

            {/* <div className="spotify">
                <div className='box'>
                    <BsSpotify />
                    <a href="https://open.spotify.com/user/cah95-br?si=79440ef0902f4a1e" rel="noopener noreferrer" target="_blank">Spotify</a>
                </div>
            </div> */}

            <div className='about'>
                <span>Desenvolvido com <p className='heart'> ❤ </p> por  <p> @caiquera95 </p></span>
            </div>

        </div>
    )
}