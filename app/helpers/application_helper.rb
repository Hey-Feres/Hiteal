module ApplicationHelper
	def today? date
		today = nil
		date.strftime("%d/%m/%Y") == DateTime.now.strftime("%d/%m/%Y") ? today = true : today = false
		return today
	end
	def yesterday? date
		yesterday = nil
		date.strftime("%d/%m/%Y") == (DateTime.now - 1.day).strftime("%d/%m/%Y") ? yesterday = true : yesterday = false
		return yesterday
	end	
end
