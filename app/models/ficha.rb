class Ficha < ApplicationRecord
	enum dia: { segunda: 'segunda', terca: 'terca', quarta: 'quarta', quinta: 'quinta', sexta: 'sexta', sabado: 'sabado', domingo: 'domingo' }
  	
  	belongs_to :exercicio
  	belongs_to :aluno

  	def self.search param, aluno_id
  	  	fichas = Ficha.joins(:exercicio).joins(:aluno).select("exercicios.grupo as exercicio_grupo, exercicios.nome as exercicio_nome, alunos.nome as aluno_nome, fichas.*")
  	    	.where(aluno_id: aluno_id)
  	    	.where('fichas.dia LIKE ?', "%#{param}%")
  	  	fichas
  	end
end
