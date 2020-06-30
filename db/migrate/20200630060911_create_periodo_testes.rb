class CreatePeriodoTestes < ActiveRecord::Migration[6.0]
  def change
    create_table :periodo_testes do |t|
      t.references :gym, null: false, foreign_key: true
      t.datetime :vencimento

      t.timestamps
    end
  end
end
