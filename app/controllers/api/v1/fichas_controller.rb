class Api::V1::FichasController < ApplicationController
	before_action :set_ficha, except: [:create,:show,:search]
	before_action :set_fichas, only: [:show]

	def show
		render json: @fichas, include: [:aluno, :exercicio]
	end

	def create
	    @ficha = Ficha.new(ficha_params)
	    if @ficha.save
	      render json: @ficha, status: :created
	    else
	      render json: @ficha.errors, status: :unprocessable_entity
	    end
	end

	def destroy
	    @ficha.destroy
	    render json: @ficha, head: :no_content
	end

	def search
		@ficha = Ficha.search(params[:ficha][:dia],params[:ficha][:aluno_id])
		render json: @ficha
	end

	private
	    def set_ficha
	      @ficha = Ficha.find(params[:id])
	    end

	    def set_fichas
	      @fichas = Ficha.where(aluno_id: params[:aluno_id])
	    end

	    def ficha_params
		  params.require(:ficha).permit(:exercicio_id, :aluno_id, :repeticoes, :series, :dia)
	    end
end
