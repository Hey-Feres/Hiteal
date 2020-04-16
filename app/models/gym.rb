class Gym < ApplicationRecord
	has_many :users, dependent: :destroy
	
	validates_presence_of :nome
	validates_presence_of :razao_social
	validates_presence_of :cnpj
	validates_presence_of :cidade
	validates_presence_of :estado
	validates_presence_of :cep
	validates_presence_of :numero
	
	has_one_attached :logo
	has_many_attached :imagens
end
