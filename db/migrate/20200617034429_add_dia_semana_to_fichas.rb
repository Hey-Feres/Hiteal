class AddDiaSemanaToFichas < ActiveRecord::Migration[6.0]
  def change
    add_column :fichas, :dia, :string
  end
end
