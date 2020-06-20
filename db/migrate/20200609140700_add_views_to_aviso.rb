class AddViewsToAviso < ActiveRecord::Migration[6.0]
  def change
    add_column :avisos, :views, :integer, default: 0
  end
end
