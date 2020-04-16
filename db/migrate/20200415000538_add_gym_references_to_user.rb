class AddGymReferencesToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :gym, null: true, foreign_key: true
  end
end
