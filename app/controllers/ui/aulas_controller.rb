class Ui::AulasController < ApplicationController
	def index
		sidebar_items
		input_attributes
		@numero_paginas = Aula.all.count / 20
	end

	private
		def sidebar_items
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/FFFFFF/barbell.png",
				title: "Aulas",
				list_items: [
					{ title: "Gerenciar", id: "gerenciar-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Adicionar", id: "adicionar-toggler", url: "#", first_item: false, last_item: true },
				]
			}
		end
		def input_attributes
			@inputs_attributes = {
				search: {
					label: "",
					width: "30%",
					placeholder: "Buscar",
					input_id: "search", 
					value: ""
				},
				editar: {
					id: {
						label: "ID",
						input_id: "aula-editar-id",
						disabled: true						
					},
					nome: {
						label: "Nome",
						placeholder: "Nome",
						loader_id: "aula-editar-nome-loader",
						done_id: "aula-editar-nome-check",
						error_id: "aula-editar-nome-error",
						input_id: "aula-editar-nome",
						value: ""
					},
					descricao: {
						label: "Descrição",
						placeholder: "Descrição",
						loader_id: "aula-editar-descricao-loader",
						done_id: "aula-editar-descricao-check",
						error_id: "aula-editar-descricao-error",
						input_id: "aula-editar-descricao",
						value: ""
					},
					repete: {
						label: "Repete",
						placeholder: "Repete",
						loader_id: "aula-editar-repete-loader",
						done_id: "aula-editar-repete-check",
						error_id: "aula-editar-repete-error",
						input_id: "aula-editar-repete",
					},
					intervalo_repeticao: {
						label: "Repetição",
						placeholder: "Repetição",
						loader_id: "aula-editar-intervalo-repeticao-loader",
						done_id: "aula-editar-intervalo-repeticao-check",
						error_id: "aula-editar-intervalo-repeticao-error",
						input_id: "aula-editar-intervalo-repeticao",
						value: ""
					},
					data_inicio: {
						label: "Data Inicio",
						placeholder: "Data Inicio",
						loader_id: "aula-editar-inicio-loader",
						done_id: "aula-editar-inicio-check",
						error_id: "aula-editar-inicio-error",
						input_id: "aula-editar-inicio",
						value: ""
					},
					duracao: {
						label: "Duração",
						placeholder: "Duração",
						loader_id: "aula-editar-duracao-loader",
						done_id: "aula-editar-duracao-check",
						error_id: "aula-editar-duracao-error",
						input_id: "aula-editar-duracao",
						value: ""
					}					
				},
				novo: {
					nome: {
						label: "Nome",
						placeholder: "Nome",
						input_id: "aula-nova-nome",
						value: ""
					},
					descricao: {
						label: "Descrição",
						placeholder: "Descrição",
						input_id: "aula-nova-descricao",
						value: ""
					},
					repete: {
						label: "Repete",
						placeholder: "",
						input_id: "aula-nova-repete",
						value: ""
					},
					intervalo_repeticao: {
						label: "Intervalo Repetição",
						placeholder: "Intervalo  Repetição",
						input_id: "aula-nova-intervalo-repeticao",
						value: ""
					},
					data_inicio: {
						label: "Data Inicio",
						placeholder: "Data Inicio",
						input_id: "aula-nova-inicio",
						value: ""
					},
					duracao: {
						label: "Duração",
						placeholder: "Duração",
						input_id: "aula-nova-duracao",
						value: ""
					}
				}
			}
		end
end
	