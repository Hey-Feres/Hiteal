class Ui::GymsController < ApplicationController
	before_action :check_assinatura

	def index
		# Item 1
		@gym =  current_user.gym.present? ? current_user.gym : Gym.new
		sidebar
		inputs_attributes
	end

	private
		def sidebar
			# Item 2
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/555555/barbell.png",
				title: "Gym",
				list_items: [
					{ title: "Dados da Gym", id: "dados-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Endereço", id: "endereco-toggler", url: "#", first_item: false, last_item: true },
				]
			}			
		end
		
		def inputs_attributes
			# Item 3
			@inputs_attributes = {
				gym_nome: {
					label: "Nome da Gym", 
					loader_id: "gym-nome-loader", 
					done_id: "gym-nome-check", 
					error_id: "gym-nome-error", 
					placeholder: "Nome da Gym", 
					input_id: "gym-nome", 
					value: @gym.present? ? @gym.nome : ""
				},
				gym_razao_social: {
					label: "Razão Social", 
					loader_id: "gym-razao-social-loader", 
					done_id: "gym-razao-social-check", 
					error_id: "gym-razao-social-error", 
					placeholder: "Razão Social", 
					input_id: "razao-social", 
					value: @gym.present? ? @gym.razao_social : ""
				},
				gym_cnpj: {
					label: "CNPJ", 
					loader_id: "gym-cnpj-loader", 
					done_id: "gym-cnpj-check", 
					error_id: "gym-cnpj-error", 
					placeholder: "CNPJ", 
					input_id: "cnpj", 
					value: @gym.present? ? @gym.cnpj : ""
				},
				gym_cep:{
					label: "CEP", 
					loader_id: "gym-cep-loader", 
					done_id: "gym-cep-check", 
					error_id: "gym-cep-error", 
					placeholder: "CEP",
					input_id: "cep",
					value: @gym.present? ? @gym.cep	: ""
				},			
				gym_cidade:{
					label: "Cidade", 
					loader_id: "gym-cidade-loader",
					done_id: "gym-cidade-check", 
					error_id: "gym-cidade-error", 
					placeholder: "Cidade",
					input_id: "cidade",
					value: @gym.present? ? @gym.cidade : ""
				},
				gym_estado:{
					label: "Estado", 
					loader_id: "gym-estado-loader", 
					done_id: "gym-estado-check", 
					error_id: "gym-estado-error", 
					placeholder: "Estado",
					input_id: "estado",
					value: @gym.present? ? @gym.estado : ""
				},
				gym_numero:{
					label: "Numero", 
					loader_id: "gym-numero-loader", 
					done_id: "gym-numero-check", 
					error_id: "gym-numero-error", 
					placeholder: "Numero",
					input_id: "numero",
					value: @gym.present? ? @gym.numero : ""
				},
				gym_rua:{
					label: "Rua", 
					loader_id: "gym-rua-loader", 
					done_id: "gym-rua-check", 
					error_id: "gym-rua-error", 
					placeholder: "Rua",
					input_id: "rua",
					value: @gym.present? ? @gym.rua : ""
				},			
				gym_lat:{
					label: "Latitude", 
					loader_id: "gym-latitude-loader", 
					done_id: "gym-latitude-check", 
					error_id: "gym-latitude-error", 
					placeholder: "Latitude",
					input_id: "latitude",
					value: @gym.present? ? @gym.lat : "",
					disabled: true
				},
				gym_lng:{
					label: "Longitude", 
					loader_id: "gym-longitude-loader", 
					done_id: "gym-longitude-check", 
					error_id: "gym-longitude-error", 
					placeholder: "Longitude",
					input_id: "longitude",
					value: @gym.present? ? @gym.lng : "",
					disabled: true
				}
			}			
		end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	- Atribuimos a variavel @gym a Gym do usuario logado, caso ainda nao tenha 
# 	instanciamos a classe 
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
