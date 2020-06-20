class Aula < ApplicationRecord
  	belongs_to :gym
	belongs_to :funcionario, foreign_key: 'professor_id'

	has_many :aula_presencas, dependent: :destroy
	has_many :alunos, through: :aula_presencas

  	validates_presence_of :nome
  	validates_presence_of :data_inicio
  	validates_presence_of :duracao

  	enum status: { ativa: 'ativa', cancelada: 'cancelada', adiada: 'adiada' }

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

	def self.proximas gym_id, search_month, search_year
		aula = nil
		if search_month.present?
			year = search_year.present? ? search_year.to_i : Time.new.year
			month = search_month.to_i
			aula = Aula.select("id, nome, strftime('%d/%m',data_inicio) AS inicio, strftime('%H:%M', horario) AS horario_inicio, vagas").where('data_inicio >= ? AND data_inicio <= ? AND gym_id = ?', Date.civil(year, month, 1), Date.civil(year, month, -1), gym_id).order(data_inicio: "asc")
		else
			aula = Aula.select("id, nome, strftime('%d/%m',data_inicio) AS inicio, strftime('%H:%M', horario) AS horario_inicio, vagas").where('data_inicio >= ? AND data_inicio <= ? AND gym_id = ?', DateTime.now.beginning_of_month, DateTime.now.end_of_month, gym_id).order(data_inicio: "asc")
		end
		aula
	end
end

# Documentacao
# Paginate __________________________________________________________________________________
# 	- Recebe gym_id e uma pagina como parametro. Todos sao obrigatorios.
# 	- A variavel start armazena a partir de qual pagina deve começar a busca por records.
# 	- Cada pagina compreende 20 records.
# Search ____________________________________________________________________________________
# 	- Recebe gym_id, uma pagina e um parametro de busca. Todos sao obrigatorios.
# 	- A variavel start armazena a partir de qual pagina deve começar a busca por records.
# 	Lembrando que cada pagina compreende 20 records.
# Proximas __________________________________________________________________________________
# 	- Recebe gym_id, um mes e um ano como parametro. Apenas gym_id é obrigatorio.
# 	- Se o parametro mes estiver presente buscamos as aulas que compreendem aquele mes.
# 	- Se o parametro ano estiver presente buscamos as aulas que compreendem aquele mes e ano.
# 	- Caso tenha o parametro mes e nao tenha ano, retorna as aulas que compreendam ao mes
# 	buscado, do ano corrente.
# 	- Se o parametro mes nao estiver presente buscamos as aulas do mes corrente.
