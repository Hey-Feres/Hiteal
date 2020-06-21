class CreateAvaliacaoFisicaPerimetros < ActiveRecord::Migration[6.0]
  def change
    create_table :avaliacao_fisica_perimetros do |t|
      t.references :avaliacao_fisica, null: false, foreign_key: true
      t.float :torax
      t.float :cintura
      t.float :abdomen
      t.float :quadril
      t.float :antebraco_esquerdo
      t.float :antebraco_direito
      t.float :braco_esquerdo
      t.float :braco_direito
      t.float :coxa_esquerda
      t.float :coxa_direita
      t.float :panturrilha_esquerda
      t.float :panturrilha_direita

      t.timestamps
    end
  end
end
