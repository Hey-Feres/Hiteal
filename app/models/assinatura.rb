class Assinatura < ApplicationRecord
	enum status: { ativa: "ativa", inativa: "inativa" }

	belongs_to :gym

	def self.atualizar gym_id
		gym = Gym.find gym_id
		if gym.assinatura.nil?
			Assinatura.create(gym_id: gym_id, valor: gym.alunos.count * 2.00, status: "ativa", vencimento: DateTime.now + 1.month)
		else
			gym.assinatura.update(valor: gym.alunos.count * 2.00, status: "ativa", vencimento: DateTime.now + 1.month)
		end
	end

	def self.cancelar gym_id
		gym = Gym.find gym_id
		gym.assinatura.update(valor: gym.alunos.count * 2.00, status: "inativa")
	end
end
