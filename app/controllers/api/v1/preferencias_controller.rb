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

