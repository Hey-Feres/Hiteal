class Gym < ApplicationRecord
	has_many :users, dependent: :destroy
	has_many :aulas, dependent: :destroy
	has_many :avisos, dependent: :destroy
	has_many :planos, dependent: :destroy
	has_many :alunos, dependent: :destroy

	validates_presence_of :nome
	validates_presence_of :razao_social
	validates_presence_of :cnpj
	validates_presence_of :rua
	validates_presence_of :cidade
	validates_presence_of :estado
	validates_presence_of :cep
	validates_presence_of :numero
	
	has_one_attached :logo
	has_many_attached :imagens

	after_create :setGymToUser

	def setGymToUser
		current_user.update(gym_id: self.id)
	end
end
