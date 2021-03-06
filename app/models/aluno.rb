class Aluno < ApplicationRecord
  enum sexo: { feminino: 'feminino', masculino: 'masculino' }

  belongs_to :gym
  belongs_to :plano
  
  alias_attribute :avaliacoes_fisicas, :avaliacao_fisicas
  alias_attribute :token, :access_token

  has_many :aula_presencas, dependent: :destroy
  has_many :fichas, dependent: :destroy
  has_many :avaliacao_fisicas, dependent: :destroy

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

  def self.search param, page, gym_id
    start = page.to_i * 10
    alunos = Aluno.joins(:plano).select("planos.nome as plano_nome, alunos.*")
      .where('alunos.id > ?', start)
      .where('alunos.nome LIKE ?', "%#{param}%")
      .where(gym_id: gym_id)
      .limit(20)
    alunos
  end
private
  def gerarAcessToken
  	self.access_token = random_string = SecureRandom.hex
  end

  def self.auth dados
    result = { autorizado: true, msg: "Auth Ok" }
    aluno = Aluno.where(dados[:email]).last
    if aluno.nil?
      result = { autorizado: false, msg: "Aluno não encontrado" }
      return result
    elsif aluno.senha.nil?
      result = { autorizado: false, msg: "Conta pendente. Ative-a em seu email" }
      return result
    elsif aluno.senha != dados[:senha]
      result = { autorizado: false, msg: "Senha Incorreta" }
      return result
    else
      return result
    end
  end

end
