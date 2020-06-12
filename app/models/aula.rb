class Aula < ApplicationRecord
  	belongs_to :gym, dependent: :destroy
	belongs_to :funcionario, foreign_key: 'professor_id'

  	validates_presence_of :nome
  	validates_presence_of :data_inicio
  	validates_presence_of :duracao

	def self.paginate page, gym_id
	  start = page.to_i * 10
	  aulas = Aula.joins(:funcionario).select("funcionarios.nome as professor_nome, aulas.*").where('aulas.id > ?', start).where(gym_id: gym_id).limit(20)
	  aulas
	end
	def self.search param, page, gym_id
	    start = page.to_i * 10
	    aulas = Aula.joins(:funcionario).select("funcionarios.nome as professor_nome, aulas.*")
		  .where('aulas.id > ?', start)
	      .where('aulas.nome LIKE ?', "%#{param}%")
	      .where(gym_id: gym_id)
	      .limit(20)
	    aulas
	end
end
