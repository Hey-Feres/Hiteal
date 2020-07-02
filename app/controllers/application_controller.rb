class ApplicationController < ActionController::Base
	before_action :authenticate_user!

	protect_from_forgery unless: -> { request.format.json? }
	
	skip_before_action :verify_authenticity_token
	#timing = Benchmark.measure { Aviso.all }

	private
		def check_assinatura
			if current_user.gym.present?
				gym = Gym.find(current_user.gym.id)
				hoje = DateTime.now
				vencimento_assinatura = gym.assinatura.nil? ? "" : gym.assinatura.vencimento
				vencimento_periodo_teste = gym.periodo_teste.vencimento
				# Se o periodo de teste estiver vencido
				if hoje > vencimento_periodo_teste
					# Se a assinatura estiver vencida
					if hoje > vencimento_assinatura
						redirect_to ui_assinaturas_inativa_url
					end
				end
			end
		end
end
