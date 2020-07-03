class ApplicationController < ActionController::Base
	before_action :authenticate_user!

	protect_from_forgery unless: -> { request.format.json? }
	
	skip_before_action :verify_authenticity_token
	#timing = Benchmark.measure { Aviso.all }

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
end
