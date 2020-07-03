class Pagamento < ApplicationRecord
	require 'mercadopago.rb'

	enum status: { aprovado: "aprovado", recusado: "recusado" }
	
	belongs_to :gym

	def self.preference user_email, numero_alunos, root
  		# Instaciando client na API do Mercado Pago
  		mp = MercadoPago.new("TEST-3592923139848018-121121-2c93c4e7f2a041d6014c181e4e9690e4-213337266")
		# Calculando valor da mensalidade
		valor = numero_alunos * 2.00
		# Montado a cobrança
		preference_data = {
		   	"items": [{ "title": "Assinatura Hiteal", "unit_price": valor, "quantity": 1 }],
			"payer": { "email": user_email },
			"payment_methods": { "excluded_payment_types": [ { "id": "ticket" } ] },
			"binary_mode": true
		}
		# Criando a cobrança na API do Mercado Pago
		preference = mp.create_preference(preference_data)
		preference_id = preference["response"]["id"]
		return preference_id
	end
end