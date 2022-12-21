class Song < ApplicationRecord
  belongs_to :user
  has_one_attached :music

  validates :title, presence: true

end
