class CreateUserSugestaoVotos < ActiveRecord::Migration[6.0]
  def change
    create_table :user_sugestao_votos do |t|
      t.references :user, null: false, foreign_key: true
      t.references :app_sugestao_update, null: false, foreign_key: true

      t.timestamps
    end
  end
end
