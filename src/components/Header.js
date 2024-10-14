import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div className="inner-content">
                    <div className="left-side">
                        <h2>Dê um Novo Estilo ao Seu Trabalho!</h2>
                        <p>Sucesso nem sempre tem haver com grandeza. Tem haver com constância. Trabalho duro constante supera o sucesso. A grandeza virá.</p>
                        <Link to='/products' className='see-more-btn'>
                            <span>Ver agora</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                    <div className="right-side">
                        <img src="../images/header-image.png" />
                    </div>
                </div>
            </header>
        </div>
    )
}
