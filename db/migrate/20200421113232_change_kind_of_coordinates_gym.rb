class ChangeKindOfCoordinatesGym < ActiveRecord::Migration[6.0]
  def change
	change_table :gyms do |t|
	  t.change :lat, :decimal
	  t.change :lng, :decimal
	end
  end
end
