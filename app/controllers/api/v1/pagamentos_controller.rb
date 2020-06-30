class Api::V1::PagamentosController < ApplicationController
	def create

	end

	private
	    def pagamento_params
	    	params.require(:pagamento).permit!#(:gym_id, :valor, :vencimento, :status, :description, :transaction_amount, :installments)
	    end
end
