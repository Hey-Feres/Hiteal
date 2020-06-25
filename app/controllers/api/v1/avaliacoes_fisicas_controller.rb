class Api::V1::AvaliacoesFisicasController < ApplicationController
	before_action :set_avaliacao, only: [ :show, :destroy ]
	def index
		@avaliacaos = AvaliacaoFisica.paginate(params[:page], params[:aluno_id])
		render json: @avaliacaos
	end

	def show
		render json: @avaliacao, include: :aluno
	end

	def create
		puts "***************************"
		puts params
	    @avaliacao = AvaliacaoFisica.new(avaliacao_params)
	    if @avaliacao.save
	      	render json: @avaliacao, status: :created
	    else
	    	puts @avaliacao.errors.inspect
	      	render json: @avaliacao.errors, status: :unprocessable_entity
	    end	
	end

	def destroy
	    @avaliacao.destroy
	    render json: @avaliacao, head: :no_content
	end
	
	def recentes
		@recentes = AvaliacaoFisica.recentes(params[:aluno_id])
		render json: @recentes
	end

	private
	    def set_avaliacao
	    	@avaliacao = AvaliacaoFisica.find(params[:id]) 
	    end

	    def avaliacao_params
	      	params.require(:avaliacao_fisica).permit(
		      	:aluno_id, :user_id, :historico_clinico, :historico_familiar, 
		      	:limitacoes, :pressao_arterial, :frequencia_cardiaca, :massa_corporal, 
		      	:estatura, :relacao_cintura_quadril, :indice_massa_corporal, :observacoes,
		      	avaliacao_fisica_perimetro_attributes: [ :torax, :cintura, :abdomen, :quadril, 
		      		:antebraco_esquerdo, :antebraco_direito, :braco_esquerdo, :braco_direito, 
		      		:coxa_esquerda, :coxa_direita, :panturrilha_esquerda, :panturrilha_direita
		      	],
		      	avaliacao_fisica_ccdc_attributes: [
					:subscapular, :triciptal, :peitoral, :axilar_media, :supra_iliaca, 
					:abdominal, :coxa, :gordura_atual, :peso_gordo, :peso_magro
		      	]
	      	)
	    end
end


