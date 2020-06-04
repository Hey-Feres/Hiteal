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
			aluno_editar_nome: {
				label: "Nome",
				placeholder: "Nome",
				input_id: "aluno-editar-nome", 
				value: ""
			},
			aluno_editar_email: {
				label: "Email",
				placeholder: "Email",
				input_id: "aluno-editar-email", 
				value: ""
			},
			aluno_editar_nascimento: {
				label: "Nascimento",
				placeholder: "Nascimento",
				input_id: "aluno-editar-nascimento", 
				value: ""
			},
			aluno_editar_sexo: {
				label: "Sexo",
				options: [
					{ title: "Masculino", value: 0, id: "Masculino" },
					{ title: "Feminino", value: 1, id: "Feminino" }
				]
			},
			aluno_editar_plano: {
				label: "Plano",
				options: current_user.gym.planos.map{|plano| { title: plano.nome, value: plano.nome, id: plano.id }}
			}			
		}
	end
end

