class Ui::PlanosController < ApplicationController
	def index
		@gym = current_user.gym
		@planos = @gym.planos
		@sidebar_items = {
			img:"",
			title: "Planos",
			list_items: [
				{ title: "Todos os Planos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Adesão", id: "adesao-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar Plano", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
	end
end