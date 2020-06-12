class AddHorarioToAula < ActiveRecord::Migration[6.0]
  def change
    add_column :aulas, :horario, :time
  end
end
