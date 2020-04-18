class Api::V1::AlunosController < ApplicationController
	before_action :set_aluno, except: :create
	
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
	
	private
	    def set_aluno
	      @aluno = Aluno.find(params[:id]) 
	    end

	    def aluno_params
	      params.require(:aluno).permit(:gym_id, :plano_id, :nome, :email, :senha, :nascimento)
	    end
end
