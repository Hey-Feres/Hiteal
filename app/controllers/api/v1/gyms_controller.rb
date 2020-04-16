class Api::V1::GymsController < ApplicationController
	before_action :set_gym, except: :create
	
	def show
		render json: @gym
	end

	def create
	    @gym = Gym.new(gym_params)
	    if @gym.save
	      render json: @gym, status: :created
	    else
	      render json: @gym.errors, status: :unprocessable_entity
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
	      params.require(:gym).permit(:nome,:razao_social,:cnpj,:cidade,:estado,:cep,:numero,:lat,:lng)
	    end
end
