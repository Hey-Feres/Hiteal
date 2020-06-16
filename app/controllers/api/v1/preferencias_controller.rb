class Api::V1::PreferenciasController < ApplicationController
	before_action :set_preferencia, except: [:create, :search_wallpapers, :wallpapers]
	
	def show
		render json: @preferencia
	end

	def update
		if @preferencia.update(preferencia_params)
			render json: @preferencia, status: :created
		else
			render json: @preferencia.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @preferencia.destroy
	    render json: @preferencia, head: :no_content
	end
	
	def search_wallpapers
		@wallpapers = Preferencia.search_wallpaper
		render json: @wallpapers
	end

	def wallpapers
  		url = URI('https://api.unsplash.com/photos/?client_id=9Ec3BbXzohq7oFt9MyTXbac7B1V3i9mSAU77GFStEiU')
		@wallpapers = JSON.parse(Net::HTTP.get_response(url).body)
		render json: @wallpapers
	end

	private
	    def set_preferencia
			@preferencia = Preferencia.find(params[:id]) 
	    end

		def preferencia_params
	    	params.require(:preferencia).permit(:wallpaper)
	    end
end


#	"id"=>"mL3VKb7dpmQ", 
#	"created_at"=>"2020-06-15T10:50:26-04:00", 
#	"updated_at"=>"2020-06-15T20:45:02-04:00", 
#	"promoted_at"=>"2020-06-15T20:45:02-04:00", 
#	"width"=>5472, "height"=>3648, 
#	"color"=>"#0F1010", 
#	"description"=>nil, 
#	"alt_description"=>"vegetable salad on white ceramic plate", 
#	"urls"=>{
#		"raw"=>"https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjQzN30", 
#		"full"=>"https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjQzN30", 
#		"regular"=>"https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MjQzN30", 
#		"small"=>"https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MjQzN30", 
#		"thumb"=>"https://images.unsplash.com/photo-1592232610506-9426553027d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0MjQzN30"
#	}, 
#	"links"=>{
#		"self"=>"https://api.unsplash.com/photos/mL3VKb7dpmQ", 
#		"html"=>"https://unsplash.com/photos/mL3VKb7dpmQ", 
#		"download"=>"https://unsplash.com/photos/mL3VKb7dpmQ/download", 
#		"download_location"=>"https://api.unsplash.com/photos/mL3VKb7dpmQ/download"
#	}, 
#	"categories"=>[], "likes"=>9, "liked_by_user"=>false, "current_user_collections"=>[], "sponsorship"=>nil, 
#	"user"=>{
#		"id"=>"VWRIyMNiPbg", "updated_at"=>"2020-06-16T00:03:24-04:00", "username"=>"donovan_valdivia", 
#		"name"=>"Andrew \"Donovan\" Valdivia", "first_name"=>"Andrew \"Donovan\"", "last_name"=>"Valdivia", 
#		"twitter_username"=>"dono.valdivia", 
#		"portfolio_url"=>nil, 
#		"bio"=>"Welcome to my adventures\r\n Los Angeles | Canon 6D  |  Instagram @duhhhitsdrew", "location"=>"Los Angeles", 
# @wallpapers.last["urls"]["thumb"]
# @wallpapers.last["urls"]["small"]
# @wallpapers.last["urls"]["regular"]
# @wallpapers.last["urls"]["full"]