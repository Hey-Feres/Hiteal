class Api::V1::AppSugestoesUpdatesController < ApplicationController
	before_action :set_sugestao, except: [:create, :index]

	def index
		@sugestoes = AppSugestaoUpdate.paginate(params[:page])
		render json: @sugestoes
	end

	def show
		render json: @sugestao, include: :user
	end

	def create
	    @sugestao = AppSugestaoUpdate.new(sugestao_params)
	    if @sugestao.save
	      render json: @sugestao, status: :created
	    else
	      render json: @sugestao.errors, status: :unprocessable_entity
	    end
	end

	def update
		if @sugestao.update(sugestao_params)
		  render json: @sugestao, status: :created
		else
		  render json: @sugestao.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @sugestao.destroy
	    render json: @sugestao, head: :no_content
	end

	def destaques
		@sugestoes = AppSugestaoUpdate.destaques
		render json: @sugestoes
	end

	private
	    def set_sugestao
	    	@sugestao = AppSugestaoUpdate.find(params[:id]) 
	    end

	    def sugestao_params
	      	params.require(:app_sugestao_update).permit(:user_id, :votos, :feito, :titulo, :descricao)
	    end
end



