class Api::V1::AssinaturasController < ApplicationController
	before_action :set_assinatura, only: :update

	def create
	    @assinatura = Assinatura.new(assinatura_params)
	    if @assinatura.save
	      render json: @assinatura, status: :created
	    else
	      render json: @assinatura.errors, status: :unprocessable_entity
	    end
	end

	def update	
		if @assinatura.update(assinatura_params)
		  render json: @assinatura, status: :created
		else
		  render json: @assinatura.errors, status: :unprocessable_entity
		end
	end

	private
	    def set_assinatura
	    	@assinatura = Assinatura.find(params[:id])
	    end

	    def assinatura_params
	    	params.require(:assinatura).permit(:gym_id, :valor, :vencimento, :status)
	    end
end
