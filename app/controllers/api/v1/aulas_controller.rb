class Api::V1::AulasController < ApplicationController
	before_action :set_aula, except: [:create, :index, :search]
	def index
		@aulas = Aula.paginate(params[:page],params[:gym_id])
		render json: @aulas			
	end

	def show
		render json: @aula, include: { funcionario: {only: :nome} }
	end

	def create
	    @aula = Aula.new(aula_params)
	    @aula.data_inicio = @aula.data_inicio.to_datetime
	    @aula.horario = @aula.horario.to_time
	    if @aula.save
	      render json: @aula, status: :created
	    else
	      puts @aula.errors.inspect
	      render json: @aula.errors, status: :unprocessable_entity
	    end	
	end

	def update
		if params[:aula][:data_inicio].present?
			params[:aula][:data_inicio] = params[:aula][:data_inicio].to_datetime
		end
		if params[:aula][:horario].present?
			params[:aula][:horario] = params[:aula][:horario].to_time
		end
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
	      params.require(:aula).permit(:gym_id, :nome, :descricao, :repete, :intervalo_repeticao, :data_inicio ,:duracao, :horario, :professor_id, :search, :page)
	    end
end
