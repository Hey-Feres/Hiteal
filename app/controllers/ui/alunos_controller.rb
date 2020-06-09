class Ui::AlunosController < ApplicationController
	def index
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/FFFFFF/barbell.png",
			title: "Alunos",
			list_items: [
				{ title: "Gerenciar Alunos", id: "gerenciar-toggler", url: "#", first_item: true, last_item: false },
				#{ title: "Endereço", id: "endereco-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar Aluno", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
		@total_alunos = Aluno.where(gym_id: current_user.gym_id).count
		@inputs_attributes = {
			search: {
				label: "",
				width: "30%",
				placeholder: "Buscar",
				input_id: "search", 
				value: ""
			},
			aluno_editar_id: {
				label: "ID",
				input_id: "aluno-editar-id",
				disabled: true
			},
			aluno_editar_nome: {
				label: "Nome",
				placeholder: "Nome",
				loader_id: "aluno-editar-nome-loader",
				done_id: "aluno-editar-nome-check",
				error_id: "aluno-editar-nome-error",
				input_id: "aluno-editar-nome",
				value: ""
			},
			aluno_editar_email: {
				label: "Email",
				placeholder: "Email",
				loader_id: "aluno-editar-email-loader",
				done_id: "aluno-editar-email-check",
				error_id: "aluno-editar-email-error",
				input_id: "aluno-editar-email", 
				value: ""
			},
			aluno_editar_nascimento: {
				label: "Nascimento",
				loader_id: "aluno-editar-nascimento-loader",
				done_id: "aluno-editar-nascimento-check",
				error_id: "aluno-editar-nascimento-error",
				input_id: "aluno-editar-nascimento",
				value: ""
			},
			aluno_editar_sexo: {
				label: "Sexo",
				loader_id: "aluno-editar-sexo-loader",
				done_id: "aluno-editar-sexo-check",
				error_id: "aluno-editar-sexo-error",
				select_id: "aluno-editar-sexo",
				options: [
					{ title: "Masculino", value: "masculino" },
					{ title: "Feminino", value: "feminino" }
				]
			},
			aluno_editar_plano: {
				label: "Plano",
				loader_id: "aluno-editar-plano-loader",
				done_id: "aluno-editar-plano-check",
				error_id: "aluno-editar-plano-error",
				select_id: "aluno-editar-plano",
				options: current_user.gym.planos.map{|plano| { title: plano.nome, value: plano.id }}
			},
			novo_aluno_nome: {
				label: "Nome",
				placeholder: "Nome",
				loader_id: "novo-aluno-nome-loader",
				done_id: "novo-aluno-nome-check",
				error_id: "novo-aluno-nome-error",
				input_id: "novo-aluno-nome",
				value: ""
			},
			novo_aluno_email: {
				label: "Email",
				placeholder: "Email",
				loader_id: "novo-aluno-email-loader",
				done_id: "novo-aluno-email-check",
				error_id: "novo-aluno-email-error",
				input_id: "novo-aluno-email", 
				value: ""
			},
			novo_aluno_nascimento: {
				label: "Nascimento",
				placeholder: "Nascimento",
				loader_id: "novo-aluno-nascimento-loader",
				done_id: "novo-aluno-nascimento-check",
				error_id: "novo-aluno-nascimento-error",
				input_id: "novo-aluno-nascimento",
				value: ""
			},
			novo_aluno_sexo: {
				label: "Sexo",
				loader_id: "novo-aluno-sexo-loader",
				done_id: "novo-aluno-sexo-check",
				error_id: "novo-aluno-sexo-error",
				select_id: "novo-aluno-sexo",
				options: [
					{ title: "Masculino", value: "masculino" },
					{ title: "Feminino", value: "feminino" }
				]
			},
			novo_aluno_plano: {
				label: "Plano",
				loader_id: "novo-aluno-plano-loader",
				done_id: "novo-aluno-plano-check",
				error_id: "novo-aluno-plano-error",
				select_id: "novo-aluno-plano",
				options: current_user.gym.planos.map{|plano| { title: plano.nome, value: plano.id }}
			}			
		}
	end
end

