import React, { Component } from 'react';
import './css/marketing.css';
import $ from 'jquery';

class App extends Component {

	constructor() {
		super();
		this.state = { lista: [], preco: 0,quantidade:''};
		this.setPreco = this.setPreco.bind(this);
		this.setQtde = this.setQtde.bind(this);
	}

	componentDidMount() {
		$.ajax({
			url: "https://api.adsim.co/crm/api/v1/refrigerante/listar",
			dataType: 'json',
			success: function (resposta) {
				this.setState({ lista: resposta });
			}.bind(this)
		}
		);
	}

	setPreco(evento) {
		this.setState({ preco: evento.target.value })
	}

	setQtde(evento) {
		this.setState({quantidade: evento.target.value })
	}

	render() {
		return (
			<div>
				<div class="header">
					<div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
						<a class="pure-menu-heading" href = "http://www.github.com/brennoaq">Brenno Araujo Queiroz</a>
						<ul class="pure-menu-list">
							<li class="pure-menu-item pure-menu-selected"><a href = "http://www.github.com/brennoaq" class="pure-menu-link">Inicio</a></li>
						</ul>
					</div>
				</div>

				<div class="splash-container">
					<div class="splash">
						<h1 class="splash-head">GO Inside</h1>
					</div>
				</div>

				<div class="content-wrapper">
					<div class="content">
						<h2 class="content-head is-center">Desafio Técnico JavaScript</h2>
						<div class="pure-g">
							<table>
								<tr>
									<td>
										<select onChange={this.setPreco} value={this.state.preco}>
											<option value="Selecione uma opção">Selecione uma opção</option>
											{
												this.state.lista.map(function (refri) {
													return (
														<option key={refri.id} value={refri.valor}>
															{refri.sabor + " - " + refri.quantidade}
														</option>
													);
												})
											}
										</select>
									</td>
									<td>
										{
											<input type="text" name="preco" value={"R$ " + this.state.preco} disabled />
										}
									</td>
								</tr>
								<tr>
									<td>
										Quantidade:
									  </td>
									<td>
										<input type="text" name="quantia"  placeholder=" Digite a quantidade" value={this.state.quantidade} onChange={this.setQtde} />
									</td>
								</tr>
								<tr>
									<td>
										<h3>Total</h3>
									</td>
									<td>
										<label>{this.state.preco * this.state.quantidade}</label>
									</td>
								</tr>
					  </table>
					</div>
				</div>
			</div>
	  </div >
  )
	};
}



export default App;
