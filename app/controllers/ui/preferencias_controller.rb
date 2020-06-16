class Ui::PreferenciasController < ApplicationController
	def index
		# Item 1
		@gym = current_user.gym
		# Item 2
		@sidebar_items = {
			img:"",
			title: "Preferencias",
			list_items: [
				{ title: "Wallpaper", id: "wallpaper-toggler", url: "#", first_item: true, last_item: true },
			]
		}
		
		@inputs_attributes = {
			search: {
				label: "",
				width: "30%",
				placeholder: "Buscar no Unsplash",
				input_id: "search", 
				value: ""
			}
		}
	end
end

