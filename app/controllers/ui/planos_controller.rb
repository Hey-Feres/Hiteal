class Ui::PlanosController < ApplicationController
	def index
		# Item 1
		@gym = current_user.gym
		@planos = @gym.planos
		# Item 2
		@sidebar_items = {
			img:"",
			title: "Planos",
			list_items: [
				{ title: "Todos os Planos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Adesão", id: "adesao-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar Plano", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
		# Item 3
		@inputs_attributes = {
			new_plano_nome: {
				label: "Nome", 
				loader_id: "plano-nome-loader", 
				done_id: "plano-nome-check", 
				error_id: "plano-nome-error", 
				placeholder: "Nome do plano", 
				input_id: "plano-nome", 
				value: ''
			},
			new_plano_valor: {
				label: "Valor", 
				loader_id: "plano-valor-loader", 
				done_id: "plano-valor-check", 
				error_id: "plano-valor-error", 
				placeholder: "Valor do plano", 
				input_id: "plano-valor", 
				value: ''			
			},
			new_plano_periodo: {
				label: "Periodo (Meses)",
				loader_id: "plano-periodo-loader", 
				done_id: "plano-periodo-check", 
				error_id: "plano-periodo-error",				
				placeholder: "Periodo",
				input_id: "plano-periodo", 
				value: ''
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
