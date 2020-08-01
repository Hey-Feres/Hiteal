class ApplicationController < ActionController::Base
	before_action :authenticate_user!
	before_action :registra_pagamento
	
	protect_from_forgery unless: -> { request.format.json? }
	
	skip_before_action :verify_authenticity_token

	private
		def check_assinatura
			assinatura_vencida_redirect = false
			if current_user.gym.present? # Se o user tiver vinculado a uma academia
				gym = Gym.find(current_user.gym.id)
				if DateTime.now > gym.periodo_teste.vencimento # Se o periodo de teste estiver vencido
					if gym.assinatura.nil? # Se a gym nao tiver assinatura
						redirect_to ui_assinaturas_inativa_path and return
					elsif DateTime.now > gym.assinatura.vencimento # Se a assinatura estiver vencida
						redirect_to ui_assinaturas_inativa_path and return
					end
				end
			end
		end

		def registra_pagamento
			if params[:preference_id]
				if Pagamento.where(mp_pagamento_id: params[:payment_id]).last.nil?
					dados_pagamento = { 
						mp_pagamento_id: params[:payment_id],
						mp_order_id: params[:merchant_order_id], 
						status: params[:payment_status] == "approved" ? "aprovado" : "recusado",
						gym_id: current_user.gym.id,
						valor: current_user.gym.alunos.count * 2.0
					}
					Pagamento.registrar(dados_pagamento)
					atualiza_assinatura
				end
			end
		end

		def atualiza_assinatura
			Assinatura.atualizar(current_user.gym.id)
		end
end
