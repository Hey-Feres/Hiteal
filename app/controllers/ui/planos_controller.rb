class Ui::PlanosController < ApplicationController
	before_action :check_assinatura

	def index
		# Item 1
		@gym = current_user.gym
		@planos = @gym.planos
		inputs_attributes
		sidebar
	end
	
	private
		def sidebar
			# Item 2
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/555555/square.png",
				title: "Planos",
				list_items: [
					{ title: "Todos os Planos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Adesão", id: "adesao-toggler", url: "#", first_item: false, last_item: false },
					{ title: "Adicionar Plano", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
				]
			}
		end

		def inputs_attributes
			# Item 3
			@inputs_attributes = {
				edit: {
					nome: {
						label: "Nome", 
						loader_id: "plano-edit-nome-loader", 
						done_id: "plano-edit-nome-check", 
						error_id: "plano-edit-nome-error", 
						placeholder: "Nome do plano", 
						input_id: "plano-edit-nome", 
						value: ''
					},
					valor: {
						label: "Valor",
						loader_id: "plano-edit-valor-loader",
						done_id: "plano-edit-valor-check",
						error_id: "plano-edit-valor-error", 
						placeholder: "R$",
						input_id: "plano-edit-valor",
						value: ''
					},
					periodo: {
						label: "Periodo", 
						loader_id: "plano-edit-periodo-loader", 
						done_id: "plano-edit-periodo-check", 
						error_id: "plano-edit-periodo-error", 
						placeholder: "Periodo", 
						input_id: "plano-edit-periodo", 
						value: ''
					},
					id: {
						label: "ID", 
						input_id: "plano-edit-id",
						disabled: true,
						value: ''
					}
				},
				novo: {
					nome: {
						label: "Nome",
						placeholder: "Nome do plano",
						input_id: "plano-novo-nome",
						value: ''
					},
					valor: {
						label: "Valor",
						placeholder: "R$",
						input_id: "plano-novo-valor",
						value: ''
					},
					periodo: {
						label: "Periodo",
						placeholder: "Periodo",
						input_id: "plano-novo-periodo",
						value: ''
					},
				}
			}
		end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	- Atribuimos a variavel @gym a Gym do usuario logado
# 	- Atribuimos a variavel @planos os planos da Gym do usuario logado
# Item 2 ________________________________________________________________________________
# 	- Os itens com first_item = true ou last_item = true contam 
# 	com esses atributos para ajustes do hover no css do list wraper no compoent sidebar
# 	- Muitos items podem nao contar com uma url pois alguns botoes serao apenas para 
# 	hide e show no script
# Item 3 ________________________________________________________________________________
# 	- A variavel inputs_attributes é um hash de hashes com os valores dos inputs e 
# 	respectivos icones da  view Gym
#  	- Todo o processamento dos inputs é feito na classe gym.js
#  	- Caso nao tenha um valor definido nos values, definimos como uma string vazia
