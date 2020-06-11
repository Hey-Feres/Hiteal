class Api::V1::AulasController < ApplicationController
	before_action :set_aula, except: [:create, :index, :search]
	def index
		@aulas = Aula.paginate(params[:page],params[:gym_id])
		render json: @aulas			
	end

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
	    render json: @aula, head: :no_content
	end

	def search
		@aulas = Aula.search(params[:aula][:search],params[:aula][:page],params[:aula][:gym_id])
		render json: @aulas
	end

	private
	    def set_aula
	      @aula = Aula.find(params[:id]) 
	    end

	    def aula_params
	      params.require(:aula).permit(:gym_id, :nome, :descricao, :repete, :intervalo_repeticao, :data_inicio ,:duracao,:search,:page)
	    end
end
