class UserSugestaoVoto < ApplicationRecord
  belongs_to :user
  belongs_to :app_sugestao_update
end
