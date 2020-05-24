class Plano < ApplicationRecord
  belongs_to :gym, dependent: :destroy
  has_many :alunos
  
  validates_presence_of :nome
  validates_presence_of :valor
  validates_presence_of :periodo
end
