# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_14_221828) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

# Could not dump table "alunos" because of following StandardError
#   Unknown type 'enum' for column 'sexo'

  create_table "aula_presencas", force: :cascade do |t|
    t.integer "aluno_id", null: false
    t.integer "aula_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["aluno_id"], name: "index_aula_presencas_on_aluno_id"
    t.index ["aula_id"], name: "index_aula_presencas_on_aula_id"
  end

  create_table "aulas", force: :cascade do |t|
    t.integer "gym_id", null: false
    t.string "nome"
    t.text "descricao"
    t.boolean "repete", default: false
    t.integer "intervalo_repeticao"
    t.datetime "data_inicio"
    t.integer "duracao"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "professor_id"
    t.time "horario"
    t.integer "vagas", default: 0
    t.string "status", default: "ativa"
    t.index ["gym_id"], name: "index_aulas_on_gym_id"
  end

  create_table "avisos", force: :cascade do |t|
    t.integer "gym_id", null: false
    t.string "nome"
    t.text "conteudo"
    t.boolean "fixado", default: false
    t.datetime "intervalo_exibicao"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "views"
    t.index ["gym_id"], name: "index_avisos_on_gym_id"
  end

  create_table "funcionarios", force: :cascade do |t|
    t.integer "gym_id", null: false
    t.string "nome"
    t.string "email"
    t.string "sexo", default: "feminino"
    t.datetime "nascimento"
    t.string "cpf"
    t.decimal "remuneracao"
    t.string "funcao"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gym_id"], name: "index_funcionarios_on_gym_id"
  end

  create_table "gyms", force: :cascade do |t|
    t.string "nome"
    t.string "razao_social"
    t.string "cnpj"
    t.string "cidade"
    t.string "estado"
    t.string "cep"
    t.string "numero"
    t.decimal "lat"
    t.decimal "lng"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "rua"
  end

  create_table "planos", force: :cascade do |t|
    t.integer "gym_id", null: false
    t.string "nome"
    t.float "valor"
    t.integer "periodo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gym_id"], name: "index_planos_on_gym_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "nome", default: ""
    t.boolean "admin", default: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "gym_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["gym_id"], name: "index_users_on_gym_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "alunos", "gyms"
  add_foreign_key "alunos", "planos"
  add_foreign_key "aula_presencas", "alunos"
  add_foreign_key "aula_presencas", "aulas"
  add_foreign_key "aulas", "gyms"
  add_foreign_key "avisos", "gyms"
  add_foreign_key "funcionarios", "gyms"
  add_foreign_key "planos", "gyms"
  add_foreign_key "users", "gyms"
end
