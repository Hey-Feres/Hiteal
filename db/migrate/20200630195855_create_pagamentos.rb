class CreatePagamentos < ActiveRecord::Migration[6.0]
  def change
    create_table :pagamentos do |t|
      t.references :gym, null: false, foreign_key: true
      t.float :valor
      t.string :status

      t.timestamps
    end
  end
end
