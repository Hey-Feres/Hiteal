class Ui::UsersController < ApplicationController
	def index
		# Item 1
		@user = current_user
		#@user.admin? ? @usuarios = @user.gym.users : nil
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/FFFFFF/user.png",
			title: "Usuário",
			list_items: [
				{ title: "Dados do Usuário", id: "dados-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Gerenciar Usuários", id: "gerenciar-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar Usuário", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
		# Item 3
		@inputs_attributes = {
			user_nome: {
				label: "Nome", 
				loader_id: "user-nome-loader", 
				done_id: "user-nome-check", 
				error_id: "user-nome-error", 
				placeholder: "Seu Nome", 
				input_id: "user-nome", 
				value: @user.nome
			},
			user_email: {
				label: "Email", 
				loader_id: "user-email-loader", 
				done_id: "user-email-check", 
				error_id: "user-email-error", 
				placeholder: "Seu email", 
				input_id: "user-email", 
				value: @user.email				
			},
			user_since: {
				label: "Membro desde",
				placeholder: "",
				disabled: true,
				input_id: "user-since", 
				value: @user.created_at.strftime("%d/%m/%Y")
			},
			user_id: {
				label: "ID da sua Conta",
				placeholder: "",
				disabled: true,
				input_id: "user--id", 
				value: @user.id
			},
			user_gym_id: {
				label: "ID da sua Gym",
				placeholder: "",
				disabled: true,
				input_id: "user-gym-id", 
				value: @user.gym_id
			},
			new_user_nome: {
				label: "Nome",
				loader_id: "new-user-nome-loader", 
				done_id: "new-user-nome-check", 
				error_id: "new-user-nome-error", 
				placeholder: "Nome", 
				input_id: "new-user-nome", 
				value: ''
			},
			new_user_email: {
				label: "Email", 
				loader_id: "new-user-email-loader", 
				done_id: "new-user-email-check", 
				error_id: "new-user-email-error", 
				placeholder: "Email", 
				input_id: "new-user-email", 
				value: ''				
			},
			new_user_senha: {
				label: "Senha", 
				loader_id: "new-user-senha-loader", 
				done_id: "new-user-senha-check", 
				error_id: "new-user-senha-error", 
				placeholder: "Senha", 
				input_id: "new-user-senha", 
				value: ''		
			},
		}		
	end
end

# Documentacao
# Item 1 ________________________________________________________________________________
# 	
# 	
# Item 2 ________________________________________________________________________________
# 	
# 	
# Item 3 ________________________________________________________________________________
# 	
# 	
# Item 4 ________________________________________________________________________________
# 	
# 	
