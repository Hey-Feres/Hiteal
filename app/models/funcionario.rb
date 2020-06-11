class Funcionario < ApplicationRecord
  	belongs_to :gym
	
	enum sexo: { feminino: 'feminino', masculino: 'masculino' }
	
	validates_presence_of :nome
	validates_presence_of :email
	validates_presence_of :cpf
	validates_presence_of :funcao
	
	validates_uniqueness_of :cpf
	
	def self.paginate page, gym_id
	  start = page.to_i * 10
	  funcionarios = Funcionario.where('funcionarios.id > ?', start).where(gym_id: gym_id).limit(20)
	  funcionarios
	end
	def self.search param, page, gym_id
	  start = page.to_i * 10
	  funcionarios = Funcionario.where('funcionarios.id > ?', start)
	    .where('funcionarios.nome LIKE ?', "%#{param}%")
	    .where(gym_id: gym_id)
	    .limit(20)
	  funcionarios
	end	
end
