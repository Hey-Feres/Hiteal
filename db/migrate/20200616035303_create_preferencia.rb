class CreatePreferencia < ActiveRecord::Migration[6.0]
  def change
    create_table :preferencia do |t|
      t.string :wallpaper
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
