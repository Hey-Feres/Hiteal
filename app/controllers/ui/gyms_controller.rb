class Ui::GymsController < ApplicationController
	def index
		@gym = current_user.gym
		@sidebar_items = {
			img:"http://t0.gstatic.com/images?q=tbn:ANd9GcTVtaf929Lh1GpXfg_j11fhYkgNezEpzCou_EQsxMn4vYboHCtNQuTAWO2-A7oi_RlB7P4qVZvZn77mJFGePD4",
			title: "Gym",
			list_items: [
				{ title: "Dados da Gym", id: "dados-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Endereço", id: "endereco-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Imagens", id: "imagens-toggler", url: "#", first_item: false, last_item: true }
			]
		}
	end
end

# Documentacao
# - Os itens com first_item = true ou last_item = true contam 
# com esses atributos para ajustes do hover no css do list wraper no compoent sidebar
# - Muitos items podem nao contar com uma url pois alguns botoes serao apenas para hide e show no script