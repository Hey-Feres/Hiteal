class Gym < ApplicationRecord
	include Auditable

	MAX_PERMITED_USERS = 3

	has_many :users, dependent: :destroy
	has_many :aulas, dependent: :destroy
	has_many :avisos, dependent: :destroy
	has_many :planos, dependent: :destroy
	has_many :alunos, dependent: :destroy
	has_many :funcionarios, dependent: :destroy
	has_many_attached :imagens

	has_one :assinatura, dependent: :destroy
	has_one :periodo_teste, dependent: :destroy
	has_one_attached :logo
	
	after_create :setGymToUser
	after_create :iniciarPeriodoTeste

	attr_accessor :created_by
	
	def setGymToUser
		User.find(self.created_by.id).update(gym_id: self.id)
	end

	def iniciarPeriodoTeste
		if Gym.all.count <= 6
			PeriodoTeste.create!(vencimento: DateTime.now + 1.year, gym_id: self.id)
		else
			PeriodoTeste.create!(vencimento: DateTime.now + 1.month, gym_id: self.id)
		end
	end
end
