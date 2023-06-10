import React from 'react';
import { Head } from '@inertiajs/react';

const Sidebar = () => {
    return (
        <div>
            <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="sidebar-brand-icon">
                        <img src="/assets/ruangadmin/img/logo/logo2.png" />
                    </div>
                    <div className="sidebar-brand-text mx-3">ANALISIS SVM</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Beranda</span></a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Analisi Sentimen
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
                        aria-expanded="true" aria-controls="collapseBootstrap">
                        <i className="far fa-fw fa-window-maximize"></i>
                        <span>Laporan</span>
                    </a>
                    <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Bootstrap UI</h6>
                            <a className="collapse-item" href="#">Data Sentimen</a>
                            <a className="collapse-item" href="#">Data Lainnya</a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-palette"></i>
                        <span>Crawling Data</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-palette"></i>
                        <span>Pre-processing Step</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-palette"></i>
                        <span>Spell Correction</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-palette"></i>
                        <span>Check Pembobotan Kata</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-palette"></i>
                        <span>Settings</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />
            </ul>
        </div>
    )
}

export default Sidebar
