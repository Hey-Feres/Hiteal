class AddRuaToGym < ActiveRecord::Migration[6.0]
  def change
    add_column :gyms, :rua, :string
  end
end
