class AddSexoToAlunos < ActiveRecord::Migration[6.0]
  def change
    add_column :alunos, :sexo, :enum
  end
end
