import React from 'react';
import Head from "next/head";
import Link from 'next/link'


const Layout = ({title = '', description = '', children}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <header>
                <div className="nav-logo">
                    <img src='/logo.svg' alt="Logo"/>
                </div>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
            </header>

            <div className="container">
                {children}
            </div>

            <footer>
                Blog on Next.JS
            </footer>
        </>
    );
}

export default Layout;