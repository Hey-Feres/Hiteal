class Api::V1::PlanosController < ApplicationController
	before_action :set_plano, except: :create
	
	def show
		render json: @plano
	end

	def create
	    @plano = Plano.new(plano_params)
	    if @plano.save
	      render json: @plano, status: :created
	    else
	      render json: @plano.errors, status: :unprocessable_entity
	    end	
	end

	def update
		if @plano.update(plano_params)
		  render json: @plano, status: :created
		else
		  render json: @plano.errors, status: :unprocessable_entity
		end
	end

	def destroy
	    @plano.destroy
	    render json: @plano, head: :no_content
	end
	
	private
	  def set_plano
	    @plano = Plano.find(params[:id])
	  end

		def plano_params
			params.require(:plano).permit(:gym_id, :nome, :valor, :periodo)
		end
end
