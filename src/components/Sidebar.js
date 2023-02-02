import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="sidebar-brand-text mx-3"></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <div id="adminContainer">
                <div className="sidebar-heading">
                    Admin.
                </div>

                <li id="linkProductos" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProductos" aria-expanded="true" aria-controls="collapseProductos">
                        <i className="fas fa-fw fa-shopping-basket"></i>
                        <span>Productos</span>
                    </a>
                    <div id="collapseProductos" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <Link className="collapse-item" to="/products">Crear Nuevo</Link>
                            <Link className="collapse-item" to="/products">Productos</Link>
                        </div>
                    </div>
                </li>

                <li id="linkCombos" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCombos" aria-expanded="true" aria-controls="collapseCombos">
                        <i className="fas fa-fw fa-atom"></i>
                        <span>Combos</span>
                    </a>
                    <div id="collapseCombos" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Combos/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/Combos">Combos</a>
                        </div>
                    </div>
                </li>

                <li id="linkVentas" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVentas" aria-expanded="true" aria-controls="collapseVentas">
                        <i className="fas fa-fw fa-shopping-cart"></i>
                        <span>Ventas</span>
                    </a>
                    <div id="collapseVentas" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Ventas/Create">Crear Nueva</a>
                            <a className="collapse-item" href="~/Ventas">Listado</a>
                        </div>
                    </div>
                </li>


                <li id="linkFacturas" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFacturas" aria-expanded="true" aria-controls="collapseFacturas">
                        <i className="fas fa-fw fa-file-invoice"></i>
                        <span>Facturas</span>
                    </a>
                    <div id="collapseFacturas" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Facturas">Listado</a>
                        </div>
                    </div>
                </li>


                <li id="linkClientes" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseClientes" aria-expanded="true" aria-controls="collapseClientes">
                        <i className="fas fa-fw fa-street-view"></i>
                        <span>Clientes</span>
                    </a>
                    <div id="collapseClientes" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Clientes/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/Clientes">Listado</a>
                        </div>
                    </div>
                </li>

                <li id="linkRemitos" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseArqueos" aria-expanded="true" aria-controls="collapseArqueos">
                        <i className="fas fa-fw fa-money-bill-alt"></i>
                        <span>Arqueos</span>
                    </a>
                    <div id="collapseArqueos" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Arqueos">Listado</a>
                        </div>
                    </div>
                </li>

                <li id="linkRemitos" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseRemitos" aria-expanded="true" aria-controls="collapseRemitos">
                        <i className="fas fa-fw fa-file-pdf"></i>
                        <span>Remitos</span>
                    </a>
                    <div id="collapseRemitos" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Remitos/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/Remitos">Listado</a>
                        </div>
                    </div>
                </li>
                <li id="linkNotasCredito" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNotasCredito" aria-expanded="true" aria-controls="collapseNotasCredito">
                        <i className="fas fa-fw fa-file-import"></i>
                        <span>Notas Crédito</span>
                    </a>
                    <div id="collapseNotasCredito" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/NotaCreditos/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/NotaCreditos">Listado</a>
                        </div>
                    </div>
                </li>
                <li id="linkMarcas" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMarcas" aria-expanded="true" aria-controls="collapseMarcas">
                        <i className="fas fa-fw fa-barcode"></i>
                        <span>Marcas</span>
                    </a>
                    <div id="collapseMarcas" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Marcas/Create">Crear Nueva</a>
                            <a className="collapse-item" href="~/Marcas">Listado</a>
                        </div>
                    </div>
                </li>
                <li id="linkTipoProductos" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTipoProductos" aria-expanded="true" aria-controls="collapseTipoProductos">
                        <i className="fas fa-fw fa-cubes"></i>
                        <span>Tipo Productos</span>
                    </a>
                    <div id="collapseTipoProductos" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/TipoProductos/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/TipoProductos">Listado</a>
                        </div>
                    </div>
                </li>
                <li id="linkTransportistas" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTransportistas" aria-expanded="true" aria-controls="collapseUsuarios">
                        <i className="fas fa-fw fa-truck"></i>
                        <span>Transportistas</span>
                    </a>
                    <div id="collapseTransportistas" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/Transportistas/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/Transportistas">Listado</a>
                        </div>
                    </div>
                </li>

                <li id="linkUsuarios" className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUsuarios" aria-expanded="true" aria-controls="collapseUsuarios">
                        <i className="fas fa-fw fa-users-cog"></i>
                        <span>Usuarios</span>
                    </a>
                    <div id="collapseUsuarios" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Acciones:</h6>
                            <a className="collapse-item" href="~/AspNetUsers/Create">Crear Nuevo</a>
                            <a className="collapse-item" href="~/AspNetUsers">Listado</a>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider" />
            </div>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default Sidebar;