import { Link } from 'react-router-dom';
import modulos from '../data';

const Home = () => {
    return (
        <section className='section'>
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Administración</h1>
                </div>
                <div className="row">
                    {modulos.map(modulo =>
                        <div key={modulo.name} className="col-xl-3 col-md-6 mb-4">
                            <Link className={`card border-left-${modulo.color} shadow h-100 py-2`} to={modulo.href}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${modulo.color} text-uppercase mb-1`}>{modulo.name}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800"><label id={`lbl${modulo.label}`}></label></div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`${modulo.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Home;
