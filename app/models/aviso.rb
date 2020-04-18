class Aviso < ApplicationRecord
  belongs_to :gym, dependent: :destroy

  validates_presence_of :nome
  validates_presence_of :conteudo
end
