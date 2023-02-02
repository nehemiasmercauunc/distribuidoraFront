import { Component } from "react";



class Dolar extends Component {
    state = {
        dolar: 0
    }

    //llamar api de dolarsi para obtener el valor del dolar
    componentDidMount() {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dolar: data[0].casa.venta })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div>
                <li className="nav-item no-arrow">
                    <a className="nav-link" href="#" role="button">
                        <span className=" text-gray-600 small">Dólar Venta: {this.state.dolar}</span>
                        <span className="fas fa-comment-dollar"></span>
                    </a>
                </li>
            </div>
        );
    }
}

export default Dolar;