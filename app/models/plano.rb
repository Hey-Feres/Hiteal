class Plano < ApplicationRecord
  belongs_to :gym
  has_many :alunos
  
  validates_presence_of :nome
  validates_presence_of :valor
  validates_presence_of :periodo
end
