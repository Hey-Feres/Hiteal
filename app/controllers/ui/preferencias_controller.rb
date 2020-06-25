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
			{id: "wallpaper_1", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1591793116510-97484ab3f36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_2", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1591453512076-8d4ebecd58e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_3", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1588263713263-63df0b48aff5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_6", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1584610559454-14c70cd3b869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
			{id: "wallpaper_7", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1583339972074-a01b1a10b693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_8", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1546100549-b310664521aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_9", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1500042963151-dd617fcc1dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_10", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1500042825080-66d3b701f10f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
			{id: "wallpaper_11", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_12", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1500042450384-8b7947f4eec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_13", author: "Daniele Levis Pelusi", src: "https://images.unsplash.com/photo-1500042221431-070712d92035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
			{id: "wallpaper_14", author: "Dippyaman Nath", src: "https://images.unsplash.com/photo-1590503002569-c09d4ddfd698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_15", author: "Dippyaman Nath", src: "https://images.unsplash.com/photo-1591241899186-9d75d9218a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_16", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_17", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577554105754-602c7bc6adaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_18", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_19", author: "Rodion Kutsaev", src: "https://images.unsplash.com/photo-1577003833154-a92bbd63ae13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_20", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1587327903256-2265e70b5660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_21", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813053974-9a46e6c9edd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_22", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813670779-e2c91288272d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_23", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1586813331420-07464ae3de65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_24", author: "Alex Beaz", src: "https://images.unsplash.com/photo-1587327931388-4765a8cb89c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_25", author: "Ron Whitaker", src: "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_26", author: "Carl Barcelo", src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
			{id: "wallpaper_27", author: "Zen Bear Yoga", src: "https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1620&q=80"},
			{id: "wallpaper_28", author: "Fezbot2000", src: "https://images.unsplash.com/photo-1463704131914-97e5aaa0e339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},

		]
	end
end