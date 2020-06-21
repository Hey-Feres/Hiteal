class Ui::AvaliacoesFisicasController < ApplicationController
	def index
		# Item 1
		sidebar
		# Item 2
		inputs_attributes
	end

	private
		def sidebar
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/555555/like.png",
				title: "Avaliações Físicas",
				sidebar_with_search: true,
				search_input: {
					input_id: "search-aluno",
					placeholder: "Busque Alunos"
				}
			}			
		end
		def inputs_attributes

		end
end
