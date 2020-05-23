class Gym < ApplicationRecord
	include Auditable

	MAX_PERMITED_USERS = 10

	has_many :users, dependent: :destroy, before_add: :validate_user_limit
	has_many :aulas, dependent: :destroy
	has_many :avisos, dependent: :destroy
	has_many :planos, dependent: :destroy
	has_many :alunos, dependent: :destroy

	has_one_attached :logo
	has_many_attached :imagens
	
	after_create :setGymToUser
	
	attr_accessor :created_by
	
	def setGymToUser
		User.find(self.created_by.id).update(gym_id: self.id)
	end

  	def validate_user_limit(user)
    	raise Exception.new if users.size >= NUMBER_OF_PERMITTED_USERS
  	end	
end
