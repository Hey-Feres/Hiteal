class AddStatusToAula < ActiveRecord::Migration[6.0]
  def change
    add_column :aulas, :status, :string, default: "ativa"
  end
end
