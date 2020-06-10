class Ui::FuncionariosController < ApplicationController
	def index
		sidebar_items
		input_attributes
		@numero_paginas = Funcionario.all.count / 20
	end
	private
		def sidebar_items
			@sidebar_items = {
				img:"https://img.icons8.com/ios/50/FFFFFF/barbell.png",
				title: "Funcionários",
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
						input_id: "funcionario-editar-id",
						disabled: true						
					},
					nome: {
						label: "Nome",
						placeholder: "Nome",
						loader_id: "funcionario-editar-nome-loader",
						done_id: "funcionario-editar-nome-check",
						error_id: "funcionario-editar-nome-error",
						input_id: "funcionario-editar-nome",
						value: ""
					},
					email: {
						label: "Email",
						placeholder: "Email",
						loader_id: "funcionario-editar-email-loader",
						done_id: "funcionario-editar-email-check",
						error_id: "funcionario-editar-email-error",
						input_id: "funcionario-editar-email", 
						value: ""
					},
					cpf: {
						label: "CPF",
						loader_id: "funcionario-editar-cpf-loader",
						done_id: "funcionario-editar-cpf-check",
						error_id: "funcionario-editar-cpf-error",
						input_id: "funcionario-editar-cpf",
						value: ""
					},
					nascimento: {
						label: "Nascimento",
						loader_id: "funcionario-editar-nascimento-loader",
						done_id: "funcionario-editar-nascimento-check",
						error_id: "funcionario-editar-nascimento-error",
						input_id: "funcionario-editar-nascimento",
						value: ""
					},
					sexo: {
						label: "Sexo",
						loader_id: "funcionario-editar-sexo-loader",
						done_id: "funcionario-editar-sexo-check",
						error_id: "funcionario-editar-sexo-error",
						select_id: "funcionario-editar-sexo",
						options: [
							{ title: "Masculino", value: "masculino" },
							{ title: "Feminino", value: "feminino" }
						]
					},
					remuneracao: {
						label: "Remuneração",
						loader_id: "funcionario-editar-remuneracao-loader",
						done_id: "funcionario-editar-remuneracao-check",
						error_id: "funcionario-editar-remuneracao-error",
						input_id: "funcionario-editar-remuneracao",
						value: ""
					},
					funcao: {
						label: "Função",
						loader_id: "funcionario-editar-funcao-loader",
						done_id: "funcionario-editar-funcao-check",
						error_id: "funcionario-editar-funcao-error",
						select_id: "funcionario-editar-funcao",
						options: [
							{ title: "Professor", value: "professor" },
							{ title: "Secretário", value: "secretario" },
							{ title: "Contador", value: "contador" },
							{ title: "Nutricionista", value: "nutricionista" },
							{ title: "Gerente", value: "gerente" }
						]
					},
				},
				novo: {
				}
			}
		end
end

