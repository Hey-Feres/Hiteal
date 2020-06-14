class AddVagasToAulas < ActiveRecord::Migration[6.0]
  def change
    add_column :aulas, :vagas, :integer, default: 0
  end
end
