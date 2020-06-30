class Ui::AvisosController < ApplicationController
	before_action :check_assinatura
	
	# Item 1
	def index
		@numero_paginas = Aviso.all.count / 20
		sidebar_items
		inputs_attributes
	end

	private
		# Item 2
		def sidebar_items
			@sidebar_items = {
				img:"https://img.icons8.com/ios/25/555555/sheet-of-paper.png",
				title: "Avisos",
				list_items: [
					{ title: "Todos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Adicionar", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
				]
			}
		end
		# Item 3
		def inputs_attributes
			@inputs_attributes = {
				search: {
					label: "",
					width: "30%",
					placeholder: "Buscar",
					input_id: "search", 
					value: ""
				},
				#  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
				editar_dados: {
					id: {
						label: "ID",
						input_id: "aviso-editar-id",
						disabled: true
					},
					nome: {
						label: "Nome",
						placeholder: "Nome",
						loader_id: "aviso-editar-nome-loader",
						done_id: "aviso-editar-nome-check",
						error_id: "aviso-editar-nome-error",
						input_id: "aviso-editar-nome",
						value: ""				
					},
					conteudo: {
						label: "Conteúdo",
						placeholder: "Conteúdo",
						loader_id: "aviso-editar-conteudo-loader",
						done_id: "aviso-editar-conteudo-check",
						error_id: "aviso-editar-conteudo-error",
						input_id: "aviso-editar-conteudo",
						value: ""
					},
					intervalo_exibicao: {
						label: "Exibir até",
						placeholder: "Exibir até",
						loader_id: "aviso-editar-exibicao-loader",
						done_id: "aviso-editar-exibicao-check",
						error_id: "aviso-editar-exibicao-error",
						input_id: "aviso-editar-exibicao",
						value: ""
					},
					fixado: {
						label: "Fixado",
						loader_id: "aviso-editar-fixado-loader",
						done_id: "aviso-editar-fixado-check",
						error_id: "aviso-editar-fixado-error",
						input_id: "aviso-editar-fixado"
					}
				},
				#  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
				novo_aviso: {
					nome: {
						label: "Nome",
						placeholder: "Nome",
						input_id: "aviso-nome",
						value: ""
					},
					conteudo: {
						label: "Conteúdo",
						placeholder: "Conteúdo",
						input_id: "aviso-conteudo",
						value: ""
					},
					intervalo_exibicao: {
						label: "Exibir até",
						placeholder: "Exibir até",
						input_id: "aviso-exibicao",
						value: ""
					},
					fixado: {
						label: "Fixado",
						input_id: "aviso-fixado"
					}				
				}
			}			
		end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	- A action index referencia o index html que esta na pasta views/ui/avisos, todas as  
# 	variaveis declaradas nessa action ficam disponiveis no index html
# 	- Atribuimos à variavel @numero_paginas o numero total de registros da class Aviso e
# 	dividimos por 20 pois a paginacao da api divide as paginas com 20 registros cada
# 	- Chamamos as actions sidebar_items e inputs_attributes ondem sao declaradas variaveis
# 	de composicao da UI
# Item 2 ________________________________________________________________________________
# 	- Os itens com first_item = true ou last_item = true contam 
# 	com esses atributos para ajustes do hover no css do list wraper no compoent sidebar
# 	- Muitos items podem nao contar com uma url pois alguns botoes serao apenas para 
# 	hide e show no script
# Item 3 ________________________________________________________________________________
# 	- A variavel inputs_attributes é um hash de hashes com os valores dos inputs e 
# 	respectivos icones da  view
#  	- Todo o processamento dos inputs é feito na class Aviso.js
#  	- Caso nao tenha um valor definido nos values, definimos como uma string vazia
