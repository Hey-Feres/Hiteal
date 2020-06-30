class Ui::AssinaturasController < ApplicationController
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
		preference
	end

	private
		def preference
	    	begin
	    		@preference_id = Pagamento.preference(current_user.email, current_user.gym.alunos.count)
	    		puts "*************"
	    		puts @preference_id
			rescue => erro
			    retries += 1
			    if retries < 3
			        retry
			    else
			        return erro
			    end
			end
		end
end