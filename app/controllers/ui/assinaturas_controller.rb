class Ui::AssinaturasController < ApplicationController
	before_action :check_assinatura, only: :index
	before_action :set_preference

	def index
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/555555/pullups.png",
			title: "Assinatura",
			list_items: [
				{ title: "Assinatura", id: "assinatura-toggler", url: "#", first_item: true, last_item: false },
				{ title: "Assinatura", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
	end

	def inativa
	end

	def whatToDisplay
		if DateTime.now < current_user.gym.periodo_teste.vencimento # Ve se o periodo de teste ta ativo
			#.html_content
		end
	end

	private
		def set_preference
	    	@preference_id = Pagamento.preference(current_user.email, current_user.gym.alunos.count, root_url)
		end
end

