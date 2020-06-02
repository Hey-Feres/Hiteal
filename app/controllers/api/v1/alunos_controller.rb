class Api::V1::AlunosController < ApplicationController
	before_action :set_aluno, except: [:create, :index]

	def index
		@alunos = Aluno.paginate(params[:page],params[:gym_id])
		render json: @alunos
	end

	def show
		render json: @aluno
	end

	def create
	    @aluno = Aluno.new(aluno_params)
	    @aluno.nascimento = @aluno.nascimento.to_datetime
	    if @aluno.save
	      render json: @aluno, status: :created
	    else
	      render json: @aluno.errors, status: :unprocessable_entity
	    end	
	end

	def update
		if @aluno.update(aluno_params)
		  render json: @aluno, status: :created
		else
		  render json: @aluno.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @aluno.destroy
	    render json: "Destroyed", head: :no_content
	end
	
	def search
		@alunos = Aluno.search(params[:search])
		render json: @alunos
	end

	private
	    def set_aluno
	      @aluno = Aluno.find(params[:id]) 
	    end

	    def aluno_params
	      params.require(:aluno).permit(:gym_id, :plano_id, :nome, :email, :senha, :nascimento, :search)
	    end
end
