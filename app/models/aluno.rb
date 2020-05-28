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
private
  def gerarAcessToken
  	self.access_token = random_string = SecureRandom.hex
  end
end
