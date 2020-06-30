class Ui::AssinaturasController < ApplicationController
	def index
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/555555/pullups.png",
			title: "Assinatura",
			list_items: [
				{ title: "Assinatura", id: "assinatura-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Assinatura", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
	end
end