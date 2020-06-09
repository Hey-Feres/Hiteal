class Ui::AvisosController < ApplicationController
	def index
		@sidebar_items = {
			img:"https://img.icons8.com/ios/50/FFFFFF/barbell.png",
			title: "Avisos",
			list_items: [
				{ title: "Todos", id: "todos-toggler", url: "#", first_item: true, last_item: false },
				#{ title: "Endereço", id: "endereco-toggler", url: "#", first_item: false, last_item: false },
				{ title: "Adicionar", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
			]
		}
		@inputs_attributes = {
			search: {
				label: "",
				width: "30%",
				placeholder: "Buscar",
				input_id: "search", 
				value: ""
			},
			#  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
			editar_dados: {
				id: {
					label: "ID",
					input_id: "aviso-editar-id",
					disabled: true
				},
				nome: {
					label: "Nome",
					placeholder: "Nome",
					loader_id: "aviso-editar-nome-loader",
					done_id: "aviso-editar-nome-check",
					error_id: "aviso-editar-nome-error",
					input_id: "aviso-editar-nome",
					value: ""					
				},
				conteudo: {
					label: "Conteúdo",
					placeholder: "Conteúdo",
					loader_id: "aviso-editar-conteudo-loader",
					done_id: "aviso-editar-conteudo-check",
					error_id: "aviso-editar-conteudo-error",
					input_id: "aviso-editar-conteudo",
					value: ""
				},
				intervalo_exibicao: {
					label: "Exibir até",
					placeholder: "Exibir até",
					loader_id: "aviso-editar-exibicao-loader",
					done_id: "aviso-editar-exibicao-check",
					error_id: "aviso-editar-exibicao-error",
					input_id: "aviso-editar-exibicao",
					value: ""
				},
				fixado: {
					label: "Fixado",
					loader_id: "aviso-editar-fixado-loader",
					done_id: "aviso-editar-fixado-check",
					error_id: "aviso-editar-fixado-error",
					input_id: "aviso-editar-fixado"
				}
			}
			#  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
		}
	end
end