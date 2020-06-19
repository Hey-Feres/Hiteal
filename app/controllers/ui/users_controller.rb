class Ui::UsersController < ApplicationController
	def index
		# Item 1
		@user = current_user
		# Item 2
		sidebar
		# Item 3
		inputs_attributes
	end

	private
		def sidebar
			@sidebar_items = {
				img:"https://img.icons8.com/ios-filled/40/555555/conference-background-selected.png",
				title: "Usuário",
				list_items: [
					{ title: "Seus Dados", id: "dados-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Gerenciar", id: "gerenciar-toggler", url: "#", first_item: false, last_item: false },
					{ title: "Adicionar", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
				]
			}			
		end
		def inputs_attributes
			@inputs_attributes = {
				edit: {
					nome: {
						label: "Nome",
						placeholder: "Seu Nome",
						loader_id: "user-edit-nome-loader",
						done_id: "user-edit-nome-check",
						error_id: "user-edit-nome-error",
						input_id: "user-edit-nome",
						value: @user.nome
					},
					email: {
						label: "Email",
						placeholder: "Seu Email",
						loader_id: "user-edit-email-loader",
						done_id: "user-edit-email-check",
						error_id: "user-edit-email-error",
						input_id: "user-edit-email",
						value: @user.email
					},
					member_since: {
						label: "Membro desde",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-since",
						value: @user.created_at.strftime("%d/%m/%Y")
					},
					id: {
						label: "ID da sua Conta",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-id",
						value: @user.id	
					},
					gym_id: {
						label: "ID da sua Gym",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-gym-id", 
						value: @user.gym_id
					},
					senha: {
						label: "Senha",
						placeholder: "Editar Senha",
						loader_id: "user-edit-senha-loader",
						done_id: "user-edit-senha-check",
						error_id: "user-edit-senha-error",
						select_id: "user-edit-senha"
					},
					admin: {
						label: "Admin",
						loader_id: "user-edit-admin-loader",
						done_id: "user-edit-admin-check",
						error_id: "user-edit-admin-error",
						input_id: "user-edit-admin"
					}
				},
				edit_other_users: {
					nome: {
						label: "Nome",
						placeholder: "Seu Nome",
						loader_id: "user-edit-other-nome-loader",
						done_id: "user-edit-other-nome-check",
						error_id: "user-edit-other-nome-error",
						input_id: "user-edit-other-nome",
						value: ""
					},
					email: {
						label: "Email",
						placeholder: "Seu Email",
						loader_id: "user-edit-other-email-loader",
						done_id: "user-edit-other-email-check",
						error_id: "user-edit-other-email-error",
						input_id: "user-edit-other-email",
						value: ""
					},
					member_since: {
						label: "Membro desde",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-other-since",
						value: ""
					},
					id: {
						label: "ID da sua Conta",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-other-id",
						value: ""	
					},
					gym_id: {
						label: "ID da sua Gym",
						placeholder: "",
						disabled: true,
						input_id: "user-edit-other-gym-id", 
						value: @user.gym_id
					},
					admin: {
						label: "Admin",
						loader_id: "user-edit-other-admin-loader",
						done_id: "user-edit-other-admin-check",
						error_id: "user-edit-other-admin-error",
						input_id: "user-edit-other-admin"
					}					
				},
				novo: {
					nome: {
						label: "Nome", 
						placeholder: "Nome",
						input_id: "novo-user-nome"
					},
					email: {
						label: "Email", 
						placeholder: "Email", 
						input_id: "novo-user-email"
					},
					admin: {
						label: "Admin",
						select_id: "novo-user-admin-status",
					},
					senha: {
						label: "Senha",
						placeholder: "Senha",
						input_id: "novo-user-senha"
					}
				}
			}
		end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	- Atribuimos a variavel @user o usuario logado
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
