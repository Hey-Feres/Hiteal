class Aluno < ApplicationRecord
  # masculino : 0 | feminino : 1
  enum sexo: [ :masculino, :feminino ]

  belongs_to :gym, dependent: :destroy
  belongs_to :plano, dependent: :destroy

  validates_presence_of :nome
  validates_presence_of :email
  validates_presence_of :nascimento

  before_save :gerarAcessToken
  before_update :gerarAcessToken

  def self.paginate page, gym_id
    start = page.to_i * 10
    alunos = Aluno.joins(:plano).select("planos.nome as plano_nome, alunos.*").where('alunos.id > ?', start).where(gym_id: gym_id).limit(20)
    alunos 
  end

  def self.search search_terms, gym_id
    alunos = Aluno.joins(:plano).select("planos.nome as plano_nome, alunos.*").where('alunos.nome LIKE ?', search_terms).where(gym_id: gym_id).limit(20)
  end
private
  def gerarAcessToken
  	self.access_token = random_string = SecureRandom.hex
  end
end
