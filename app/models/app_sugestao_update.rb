class AppSugestaoUpdate < ApplicationRecord
	belongs_to :user
	
	alias_attribute :users_votaram, :users
	
	has_many :user_sugestao_votos, dependent: :destroy
	has_many :users, through: :user_sugestao_votos

	def self.destaques
		sugestoes = AppSugestaoUpdate.all.order(votos: :desc).limit(8)
		return sugestoes
	end
	def self.paginate page
    	start = page.to_i * 10
    	sugestoes = AppSugestaoUpdate.joins(:user_sugestao_voto).select("user_sugestao_votos.user_id as user_votou_id").where('id > ?', start).limit(20)
    	sugestoes
	end	
end
