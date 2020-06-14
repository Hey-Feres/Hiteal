class Api::V1::AulasController < ApplicationController
	before_action :set_aula, only: [ :show, :update, :destroy ]
	def index
		@aulas = Aula.paginate(params[:page],params[:gym_id])
		render json: @aulas			
	end

	def show
		render json: @aula, include: { funcionario: {only: :nome}, alunos: { only: :nome }, aula_presencas: {only: :created_at} }
	end

	def create
	    @aula = Aula.new(aula_params)
	    @aula.data_inicio = @aula.data_inicio.to_datetime
	    @aula.horario = @aula.horario.to_time
	    if @aula.save
	      render json: @aula, status: :created
	    else
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
	
	def proximas
		@aulas = Aula.proximas(current_user.gym_id, params[:search_month], params[:search_year])
		render json: @aulas
	end

	def confirmar_presenca
		@presenca = AulaPresenca.salvar_presenca(params[:aula][:aluno_id],params[:aula][:aula_id])
		if @presenca.save
			render json: @presenca, status: :created
		else
			render json: @presenca.errors, status: :unprocessable_entity
		end
	end
	
	def cancelar_presenca
		@presenca = AulaPresenca.find(params[:aula_presenca_id]).destroy
		render json: @presenca
	end

	private
	    def set_aula
	      @aula = Aula.find(params[:id]) 
	    end

	    def aula_params
	      params.require(:aula).permit(:gym_id, :nome, :descricao, :repete, :intervalo_repeticao, :data_inicio ,:duracao, :horario, :professor_id, :search, :page, :search_month, :search_year, :aula_presenca_id, :aluno_id, :aula_id)
	    end
end
