class Aula < ApplicationRecord
  belongs_to :gym, dependent: :destroy

  validates_presence_of :nome
  validates_presence_of :data_inicio
  validates_presence_of :duracao
end
