class AppSugestaoUpdate < ApplicationRecord
	belongs_to :user, dependent: :destroy

	def self.destaques
		sugestoes = AppSugestaoUpdate.all.order(votos: :desc).limit(8)
		return sugestoes
	end
	def self.paginate page
    	start = page.to_i * 10
    	sugestoes = AppSugestaoUpdate.where('app_sugestao_update.id > ?', start).limit(20)
    	sugestoes
	end	
end
