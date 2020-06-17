class CreateExercicios < ActiveRecord::Migration[6.0]
  def change
    create_table :exercicios do |t|
      t.string :grupo
      t.string :nome

      t.timestamps
    end
  end
end
