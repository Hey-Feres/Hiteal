class Aluno < ApplicationRecord
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
