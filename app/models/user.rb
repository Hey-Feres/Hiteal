class User < ApplicationRecord
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :trackable

	belongs_to :gym, optional: true, dependent: :destroy

	has_one_attached :foto
end
