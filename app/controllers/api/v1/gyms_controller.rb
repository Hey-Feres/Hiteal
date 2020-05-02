class Api::V1::GymsController < ApplicationController
	before_action :set_gym, except: [:create, :upload]
	
	def show
		render json: @gym
	end

	def create
	    @gym = Gym.new(gym_params)
	    @gym.imagens.attach(params[:gym][:imagens])

	    if @gym.save
	      render json: @gym, status: :created
	    else
	      render json: @gym.errors, status: :unprocessable_entity
	    end	
	end

	def upload
		@gym = current_user.gym
		@gym.imagens.attach(params[:file])
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


# Parameters: {"authenticity_token"=>"Lw/Dk6DCqHISsQhotPu1RmPwduSoAIbT8VilWf6Z+p2PrXXOayDQwpXmBC9nT9QxRpDHqRCQM/NOR1/I/N/Etw==", "imagens"=>["eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--22f96ab07a00ff1e608580ea336766c86c30d231"], "commit"=>"Save ", "id"=>"1"}
# Parameters: {"gym"=>{"add_image"=>"true", "imagens"=>"blob:http://localhost:3000/026c0f32-48e7-4482-8645-e158e90f8e7a"}, "id"=>"1"}