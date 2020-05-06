class Api::V1::GymsController < ApplicationController
	before_action :set_gym, except: [:create, :upload, :delete_upload]
	
	def show
		render json: @gym
	end

	def imagens
		@imagens = []
		@gym.imagens.map{|i| @imagens << i}
		render json: @imagens
	end

	def create
	    @gym = Gym.new(gym_params)
	    if @gym.save
	      render json: @gym, status: :created
	    else
	      render json: @gym.errors, status: :unprocessable_entity
	    end	
	end

	def upload
		@gym = current_user.gym
		@gym.imagens.attach(params[:file])
		redirect_to ui_gyms_path, notice: "Sua foto foi adicionada!"
	end
	
	def delete_upload
		@gym = current_user.gym
		if @gym.imagens.find(params[:blob_id]).purge
			render json: "Deleted", head: :no_content
		else
			render json: "Erro", head: :no_content
		end
	end	

	def update
		if @gym.update(gym_params)
			render json: @gym, status: :created
		else
			render json: @gym.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @gym.destroy
	    render json: "Destroyed", head: :no_content
	end
	
	private
	    def set_gym
	      @gym = Gym.find(params[:id]) 
	    end

	    def gym_params
	      params.require(:gym).permit(:nome,:razao_social,:cnpj,:rua,:cidade,:estado,:cep,:numero,:lat,:lng,:imagens,:delete_image,:add_image)
	    end
end
