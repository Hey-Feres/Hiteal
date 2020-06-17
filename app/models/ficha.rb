class Ficha < ApplicationRecord
	enum dia: { segunda: 'segunda', terca: 'terca', quarta: 'quarta', quinta: 'quinta', sexta: 'sexta', sabado: 'sabado', domingo: 'domingo' }
  	
  	belongs_to :exercicio
  	belongs_to :aluno
end
