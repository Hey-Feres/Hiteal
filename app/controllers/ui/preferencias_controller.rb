class Ui::PreferenciasController < ApplicationController
	def index
		# Item 1
		@gym = current_user.gym
		# Item 2
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/555555/settings.png",
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
		@wallpapers = [
			{id: "wallpaper_1", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575537e893a5d_32.%20Banana%20Mania.jpg"},
			{id: "wallpaper_2", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575862e893a21_01.%20Royal%20Heath.jpg"},
			{id: "wallpaper_3", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15752f8f893a27_05.%20Flax.jpg"},
			{id: "wallpaper_4", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575609c893a29_06.%20Wisteria.jpg"},
			{id: "wallpaper_5", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15755803893a2f_09.%20Light%20Sky%20Blue.jpg"},
			{id: "wallpaper_6", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15750ab3893a31_10.%20Mindaro.jpg"},
			{id: "wallpaper_7", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15758624893a33_11.%20Fuchsia.jpg"},
			{id: "wallpaper_8", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575de85893a35_12.%20Tumbleweed.jpg"},
			{id: "wallpaper_9", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a157511be893a37_13.%20Pale%20Violet%20Red.jpg"},
			{id: "wallpaper_10", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a157566d3893a39_14.%20Prim.jpg"},
			{id: "wallpaper_11", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575cb2f893a3b_15.%20Perfume.jpg"},
			{id: "wallpaper_12", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15754195893a3d_16.%20Medium%20Purple.jpg"},
			{id: "wallpaper_13", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a157570f2893a3f_17.%20Dark%20Salmon.jpg"},
			{id: "wallpaper_14", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15752a6f893a41_18.%20Buttercup.jpg"},
			{id: "wallpaper_15", author: "", src: "https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a157511e8893a43_19.%20Can%20Can.jpg"},
			{id: "wallpaper_16", author: "Wengang Zhai", src: "https://images.unsplash.com/photo-1592880475728-31c2b5b617ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_17", author: "Dippyaman Nath", src: "https://images.unsplash.com/photo-1591241899186-9d75d9218a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_18", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_19", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577554105754-602c7bc6adaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_20", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_21", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577003833154-a92bbd63ae13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_22", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1587327903256-2265e70b5660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_23", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813053974-9a46e6c9edd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_24", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813670779-e2c91288272d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_25", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813331420-07464ae3de65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_26", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1587327931388-4765a8cb89c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},	
		]
	end
end