class Ui::AvaliacoesFisicasController < ApplicationController
	before_action :check_assinatura
	
	def index
		sidebar
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
			@inputs_attributes = {
				geral: {
					aluno_id: {
						label: "ID Aluno",
						placeholder: "",
						input_id: "aluno-id",
						disabled: true,
						value: "2"
					},
					user_id: {
						label: "ID Avaliador",
						placeholder: "",
						input_id: "user-id",
						disabled: true,
						value: "1"
					},
					historico_clinico: {
						label: "Histórico Clínico",
						placeholder: "Histórico Clínico",
						input_id: "historico-clinico",
						value: ""
					},
					historico_familiar: {
						label: "Histórico Familiar",
						placeholder: "Histórico Familiar",
						input_id: "historico-familiar",
						value: ""
					},
					limitacoes: {
						label: "Limitações",
						placeholder: "Limitações",
						input_id: "limitacoes",
						value: ""
					},
					pressao_arterial: {
						label: "Pressão Arterial",
						placeholder: "Pressão Arterial",
						input_id: "pressao-arterial",
						value: ""
					},
					frequencia_cardiaca: {
						label: "Frequência Cardíaca",
						placeholder: "Frequência Cardíaca",
						input_id: "frequencia-cardiaca",
						value: ""
					},
					massa: {
						label: "Massa Corporal",
						placeholder: "Massa Corporal",
						input_id: "massa",
						value: ""
					},
					estatura: {
						label: "Estatura",
						placeholder: "Estatura",
						input_id: "estatura",
						value: ""
					},
					relacao_cintura_quadril: {
						label: "Relação Cintura Quadril",
						placeholder: "Relação Cintura Quadril",
						input_id: "relacao-cintura-quadril",
						disabled: true,
						value: ""
					},
					indice_massa_corporal: {
						label: "Indíce Massa Corporal",
						placeholder: "Indíce de Massa Corporal",
						input_id: "indice-massa-corporal",
						disabled: true,
						value: ""
					},
					observacoes: {
						label: "Observações",
						placeholder: "Observações",
						input_id: "observacoes",
						value: ""
					}
				},
				perimetros: {
				    torax: {
						label: "Tórax",
						placeholder: "Tórax",
						input_id: "torax",
						value: ""
    				},
				    cintura: {
						label: "Cintura",
						placeholder: "Cintura",
						input_id: "cintura",
						value: ""
    				},
				    abdomen: {
						label: "Abdômen",
						placeholder: "Abdômen",
						input_id: "abdomen",
						value: ""
    				},
				    quadril: {
						label: "Quadril",
						placeholder: "Quadril",
						input_id: "quadril",
						value: ""
    				},
				    antebraco_esquerdo: {
						label: "Antebraço Esquerdo",
						placeholder: "Antebraço Esquerdo",
						input_id: "antebraco-esquerdo",
						value: ""
    				},
				    antebraco_direito: {
						label: "Antebraço Direito",
						placeholder: "Antebraço Direito",
						input_id: "antebraco-direito",
						value: ""
    				},
				    braco_esquerdo: {
						label: "Braço Esquerdo",
						placeholder: "Braço Esquerdo",
						input_id: "braco-esquerdo",
						value: ""
    				},
				    braco_direito: {
						label: "Braço Direito",
						placeholder: "Braço Direito",
						input_id: "braco-direito",
						value: ""
    				},
				    coxa_esquerda: {
						label: "Coxa Esquerda",
						placeholder: "Coxa Esquerda",
						input_id: "coxa-esquerda",
						value: ""
    				},
				    coxa_direita: {
						label: "Coxa Direita",
						placeholder: "Coxa Direita",
						input_id: "coxa-direita",
						value: ""
    				},
				    panturrilha_esquerda: {
						label: "Panturrilha Esquerda",
						placeholder: "Panturrilha Esquerda",
						input_id: "panturrilha-esquerda",
						value: ""
    				},
				    panturrilha_direita: {
						label: "Panturrilha Direita",
						placeholder: "Panturrilha Direita",
						input_id: "panturrilha-direita",
						value: ""
    				}
				},
				ccdc: {
    				subscapular: {
						label: "Subscapular",
						placeholder: "Subscapular",
						input_id: "subscapular",
						value: ""
    				},
    				triciptal: {
						label: "Triciptal",
						placeholder: "Triciptal",
						input_id: "triciptal",
						value: ""
    				},
    				peitoral: {
						label: "Peitoral",
						placeholder: "Peitoral",
						input_id: "peitoral",
						value: ""
    				},
    				axilar_media: {
						label: "Axilar Média",
						placeholder: "Axilar Média",
						input_id: "axilar-media",
						value: ""
    				},
    				supra_iliaca: {
						label: "Supra Ilíaca",
						placeholder: "Supra Ilíaca",
						input_id: "supra-iliaca",
						value: ""
    				},
    				abdominal: {
						label: "Abdominal",
						placeholder: "Abdominal",
						input_id: "abdominal",
						value: ""
    				},
    				coxa: {
						label: "Coxa",
						placeholder: "Coxa",
						input_id: "coxa",
						value: ""
    				},
    				gordura_atual: {
						label: "Gordura Atual",
						placeholder: "Gordura Atual",
						input_id: "gordura-atual",
						value: ""
    				},
    				peso_gordo: {
						label: "Peso Gordo",
						placeholder: "Peso Gordo",
						input_id: "peso-gordo",
						value: ""
    				},
    				peso_magro: {
						label: "Peso Magro",
						placeholder: "Peso Magro",
						input_id: "peso-magro",
						value: ""
    				}		
				}		
			}
		end
end
