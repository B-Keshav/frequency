class Song < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :synth, presence: true

end
