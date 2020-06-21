class CreateAvaliacaoFisicaCcdcs < ActiveRecord::Migration[6.0]
  def change
    create_table :avaliacao_fisica_ccdcs do |t|
      t.references :avaliacao_fisica, null: false, foreign_key: true
      t.float :subscapular
      t.float :triciptal
      t.float :peitoral
      t.float :axilar_media
      t.float :supra_iliaca
      t.float :abdominal
      t.float :coxa
      t.float :gordura_atual
      t.float :peso_gordo
      t.float :peso_magro

      t.timestamps
    end
  end
end
