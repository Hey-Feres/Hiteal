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
				loader_id: "search-loader",
				placeholder: "Buscar",
				input_id: "search", 
				value: ""
			}
		}
	end
end