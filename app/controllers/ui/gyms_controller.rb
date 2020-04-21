class Ui::GymsController < ApplicationController
	def index
		@gym = current_user.gym
		# Item 1
		@sidebar_items = {
			img:"http://t0.gstatic.com/images?q=tbn:ANd9GcTVtaf929Lh1GpXfg_j11fhYkgNezEpzCou_EQsxMn4vYboHCtNQuTAWO2-A7oi_RlB7P4qVZvZn77mJFGePD4",
			title: "Gym",
			list_items: [
				{ title: "Dados da Gym", id: "dados-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Endereço", id: "endereco-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Imagens", id: "imagens-toggler", url: "#", first_item: false, last_item: true }
			]
		}
		# Item 2
		@inputs_attributes = {
			gym_nome: {
				label: "Nome da Gym", 
				loader_id: "gym-nome-loader", 
				done_id: "gym-nome-check", 
				error_id: "gym-nome-error", 
				placeholder: "Nome da Gym", 
				input_id: "gym-nome", 
				value: @gym.nome
			},
			gym_razao_social: {
				label: "Razão Social", 
				loader_id: "gym-razao-social-loader", 
				done_id: "gym-razao-social-check", 
				error_id: "gym-razao-social-error", 
				placeholder: "Razão Social", 
				input_id: "razao-social", 
				value: @gym.razao_social
			},
			gym_cnpj: {
				label: "CNPJ", 
				loader_id: "gym-cnpj-loader", 
				done_id: "gym-cnpj-check", 
				error_id: "gym-cnpj-error", 
				placeholder: "CNPJ", 
				input_id: "cnpj", 
				value: @gym.cnpj
			}
		}
	end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	- Os itens com first_item = true ou last_item = true contam 
# 	com esses atributos para ajustes do hover no css do list wraper no compoent sidebar
# 	- Muitos items podem nao contar com uma url pois alguns botoes serao apenas para 
# 	hide e show no script
# Item 2 ________________________________________________________________________________
# 	- A variavel inputs_attributes é um hash de hashes com os valores dos inputs e 
# 	respectivos icones da  view Gym
#  	- Todo o processamento dos inputs é feito na classe gym.js
