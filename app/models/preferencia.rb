class Preferencia < ApplicationRecord
  	belongs_to :user

  	def self.search_wallpaper
  		url = URI('https://api.unsplash.com/photos/?client_id=9Ec3BbXzohq7oFt9MyTXbac7B1V3i9mSAU77GFStEiU')
		wallpapers = JSON.parse(Net::HTTP.get_response(url).body)
		return wallpapers
  	end
end
