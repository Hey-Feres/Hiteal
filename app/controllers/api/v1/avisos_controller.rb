class Api::V1::AvisosController < ApplicationController
	before_action :set_aviso, except: [:create,:index,:search]
	def index
		@avisos = Aviso.paginate(params[:page],params[:gym_id])
		render json: @avisos
	end
	
	def search
		@avisos = Aviso.search(params[:aviso][:search],params[:aviso][:page],params[:aviso][:gym_id])
		render json: @avisos
	end

	def show
		render json: @aviso
	end

	def create
	    @aviso = Aviso.new(aviso_params)
	    if @aviso.intervalo_exibicao.present?
			@aviso.intervalo_exibicao = @aviso.intervalo_exibicao.to_datetime
	    end
	    if @aviso.save
	      render json: @aviso, status: :created
	    else
	      puts @aviso.errors.inspect
	      render json: @aviso.errors, status: :unprocessable_entity
	    end	
	end

	def update
		if params[:aviso][:intervalo_exibicao].present?
			params[:aviso][:intervalo_exibicao] = params[:aviso][:intervalo_exibicao].to_datetime
		end		
		if @aviso.update(aviso_params)
		  render json: @aviso, status: :created
		else
		  render json: @aviso.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @aviso.destroy
	    render json: @aviso, head: :no_content
	end
	
	private
	    def set_aviso
	      @aviso = Aviso.find(params[:id]) 
	    end

	    def aviso_params
	      params.require(:aviso).permit(:gym_id,:nome,:conteudo,:fixado,:intervalo_exibicao,:search,:page)
	    end
end
