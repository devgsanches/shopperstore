import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="page-inner-content content">
                <div className="download-options">
                    <p>Baixe o nosso app</p>
                    <p>Baixe nosso app para Android e iOS</p>
                    <div>
                        <img src="/images/app-store.png" alt="App Store download" />
                        <img src="/images/play-store.png" alt="Play Store download" />
                    </div>
                </div>

                <div className="logo-footer">
                    <h1 className="logo">
                        SHOPPER <span>STORE</span>
                    </h1>
                    <p>
                        Nosso compromisso é oferecer produtos eletrônicos de alta qualidade e um atendimento excepcional. Nos dedicamos a entregar uma experiência de compra confiável e satisfatória, garantindo que cada cliente receba seus pedidos de forma rápida e segura. 📦🚀
                    </p>
                </div>

                <div className="links">
                    <h3>Links úteis</h3>
                    <ul>
                        <li>
                            <Link to="/">Cupons</Link>
                        </li>
                        <li>
                            <Link to="/">Blog posts</Link>
                        </li>
                        <li>
                            <Link to="/">Políticas</Link>
                        </li>
                        <li>
                            <Link to="/">Torne-se afiliado</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="page-inner-content">
                <hr />
                <p className='copyright'>Copyright 2024 - Guilherme Sanches</p>
            </div>
        </footer>
    )
}
