class Ui::AulasController < ApplicationController
	before_action :check_assinatura
	
	def index
		sidebar_items
		input_attributes
		@numero_paginas = Aula.all.count / 20
	end

	private
		def sidebar_items
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/555555/yoga.png",
				title: "Aulas",
				list_items: [
					{ title: "Gerenciar", id: "todos-toggler", url: "#", first_item: true, last_item: false },
					{ title: "Próximas", id: "proximas-toggler", url: "#", first_item: false, last_item: false },
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
					professor: {
						label: "Professor",
						placeholder: "Professor",
						loader_id: "aula-editar-professor-loader",
						done_id: "aula-editar-professor-check",
						error_id: "aula-editar-professor-error",						
						select_id: "aula-editar-professor",
						options: Funcionario.where(gym_id: current_user.gym.id).where(funcao: "professor").map{|f| {title: f.nome, value: f.id} }
					},
					vagas: {
						label: "Vagas",
						placeholder: "Vagas",
						loader_id: "aula-editar-vagas-loader",
						done_id: "aula-editar-vagas-check",
						error_id: "aula-editar-vagas-error",
						input_id: "aula-editar-vagas",
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
						label: "Intervalo (Dias)",
						placeholder: "Intervalo Repetição (Dias)",
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
						label: "Duração (Horas)",
						placeholder: "Duração (Horas)",
						loader_id: "aula-editar-duracao-loader",
						done_id: "aula-editar-duracao-check",
						error_id: "aula-editar-duracao-error",
						input_id: "aula-editar-duracao",
						value: ""
					},
					horario: {
						label: "Horário",
						placeholder: "Horário",
						loader_id: "aula-editar-horario-loader",
						done_id: "aula-editar-horario-check",
						error_id: "aula-editar-horario-error",
						input_id: "aula-editar-horario",
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
					professor: {
						label: "Professor",
						placeholder: "Professor",
						select_id: "aula-nova-professor",
						options: Funcionario.where(gym_id: current_user.gym.id).where(funcao: "professor").map{|f| {title: f.nome, value: f.id} }
					},
					descricao: {
						label: "Descrição",
						placeholder: "Descrição",
						input_id: "aula-nova-descricao",
						value: ""
					},
					vagas: {
						label: "Vagas",
						placeholder: "Vagas",
						input_id: "aula-editar-vagas",
						value: ""
					},					
					repete: {
						label: "Repete",
						placeholder: "",
						input_id: "aula-nova-repete",
						value: ""
					},
					intervalo_repeticao: {
						label: "Intervalo (Dias)",
						placeholder: "Intervalo  Repetição (Dias)",
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
						label: "Duração (Horas)",
						placeholder: "Duração (Horas)",
						input_id: "aula-nova-duracao",
						value: ""
					},
					horario: {
						label: "Horário",
						placeholder: "Horário",
						input_id: "aula-nova-horario",
						value: ""
					}
				}
			}
		end
end
	
