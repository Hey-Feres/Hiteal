class Api::V1::AulasController < ApplicationController
	before_action :set_aula, except: :create
	
	def show
		render json: @aula
	end

	def create
	    @aula = Aula.new(aula_params)
	    @aula.data_inicio = @aula.data_inicio.to_datetime
	    if @aula.save
	      render json: @aula, status: :created
	    else
	      render json: @aula.errors, status: :unprocessable_entity
	    end	
	end

	def update
		if @aula.update(aula_params)
		  render json: @aula, status: :created
		else
		  render json: @aula.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @aula.destroy
	    render json: "Destroyed", head: :no_content
	end
	
	private
	    def set_aula
	      @aula = Aula.find(params[:id]) 
	    end

	    def aula_params
	      params.require(:aula).permit(:gym_id, :nome, :descricao, :repete, :intervalo_repeticao, :data_inicio ,:duracao)
	    end
end
